const yargs = require('yargs');
const add = require('./add');
const remove = require('./remove');
const todoHelper = require('./todoHelper');
const get = require('./getByName');

yargs.command({
    command: 'add',
    describe: 'add a new todo',
    builder:{
        name:{
            describe: 'todo name',
            demandOption:true,
            type:'string'
        },
        description:{
            describe: 'todo description',
            type:'string',
            demandOption:true,
        }
    },
    handler:(args)=>{
        const todo ={
            name: args.name,
            description: args.description
        }

        add(todo);
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a todo',
    builder:{
        name:{
            describe: 'todo name',
            demandOption:true,
            type:'string'
        }
    },
    handler:(args)=>{
        remove(args.name);
    }
});

yargs.command({
    command: 'get',
    describe: 'get all or get todo item by name',
    builder:{
        name:{
            describe: 'todo name',
            type:'string'
        }
    },
    handler:(args)=>{
        if(!args.name){
            console.log(todoHelper.get())
            return
        }

        const response = get(args.name)
        if(response !== null){
            console.log(response.todo)
            return
        }

        console.log('not finded todo')
        return
    }
});

yargs.parse();