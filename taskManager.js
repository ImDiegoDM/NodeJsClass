const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'add a new task',
    builder:{
        name:{
            describe: 'task name',
            type:'string'
        },
        description:{
            describe: 'task description',
            type:'string'
        }
    },
    handler:(args)=>{
        console.log(args.name)
        console.log(args.describe)
    }
});

yargs.parse();