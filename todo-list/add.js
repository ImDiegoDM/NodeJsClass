const todoHelper = require('./todoHelper');
const get = require('./getByName');

function addToJson(todoItem){
    const todo = get(todoItem.name);

    if(todo){
        console.log('todo alredy exists')
        return
    }

    const data = todoHelper.get();

    data.push(todoItem);

    todoHelper.save(data)
    console.log('todo add')
}

module.exports = addToJson;