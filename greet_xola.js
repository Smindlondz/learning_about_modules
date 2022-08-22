import chalk from 'chalk';
import figlet from 'figlet';
import greet from './greet.js'

// const name = chalk.bold.red;
const for_xola = chalk.rgb(123, 45, 67).bgBlue 
const for_mandla = chalk.blue.underline.bold 
const for_coders = chalk.hex('#FFA500').bgCyan; 
const for_sipho = chalk.hex('#DEADED').underline 
const for_lucas = chalk.blue.bgRed.bold 

const fig_xola = figlet.textSync    //change font styles
const fig_coders = figlet.fontsSync //print font styles

// call the function & print the result on the screen

console.log(fig_xola(for_xola(greet('Xola'))))
console.log(for_mandla(greet(chalk.red('Mandla'))))
console.log(fig_coders(for_coders(greet('Coders'))))
console.log(for_sipho(greet('SIPHO')))
console.log(for_lucas(greet('Lucas')))
