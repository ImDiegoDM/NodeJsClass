const fs = require('fs');

let text;

const path = 'arquivo.txt';

if(fs.existsSync(path)){
    text = fs.readFileSync(path,'utf8');
}

fs.writeFile(path,text+'new data',()=>{
    console.log('work')
});