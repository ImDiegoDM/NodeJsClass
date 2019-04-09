const _ = require('lodash');
const chalk = require('chalk');

const array = [1,2,3,4,5,6];

const mensagem = 'array sem split';
console.log(chalk.red.bold(mensagem));

console.log(array);

const newArray = _.chunk(array,3);

const mensagem2 = 'array com split';
console.log(chalk.blue.bold(mensagem2));

console.log(newArray);