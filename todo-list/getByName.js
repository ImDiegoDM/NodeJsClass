const todoHelper = require('./todoHelper');

function getByName(name){
    const data = todoHelper.get();

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if(element.name === name){
            
            return {todo:element,index:i};
        }
    }

    return null;
}

module.exports = getByName;