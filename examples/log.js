const fs = require('fs');

const path = 'log.txt';

function log(value){
    let oldText = '';

    if(fs.existsSync(path)){
        oldText = fs.readFileSync(path,'utf8')+'\n';
    }

   fs.writeFileSync(path,oldText+value);
}

module.exports = log