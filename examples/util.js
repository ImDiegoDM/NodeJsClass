/**
 *  Desafio 3
 * 
 */

const log = require('./log');

let text = '';

process.argv.forEach((value,index)=>{
    if(index>=2){
        text+=value+' ';
    }
})
log(text);