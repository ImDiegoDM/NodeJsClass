const PATH = "./todo.json"
const fs = require('fs');

function get(){
    try{
        const rawData = fs.readFileSync(PATH);
        const data = JSON.parse(rawData);
        return data;
    }catch(err){
        return [];
    }
}

function save(data){
    fs.writeFileSync(PATH,JSON.stringify(data));
}

module.exports = {save,get}