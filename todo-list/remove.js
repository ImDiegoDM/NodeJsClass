const todoHelper = require('./todoHelper');
const get = require('./getByName');

function removeTodo(name){
    const data = todoHelper.get();

    const todo = get(name);
    if(todo !== null){
        data.splice(todo.index,1);
        todoHelper.save(data);
        console.log('todo removed')
        return
    }

    console.log('todo not finded')
    return
}

module.exports = removeTodo
