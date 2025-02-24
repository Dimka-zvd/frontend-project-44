import { LogicGame } from "../src/index.js"


const logic = '(str % 2 === 0 && answer === yes)||(str % 2 !== 0 && answer === no)'

console.log('Answer "yes" if the number is even, otherwise answer "no"')

console.log(LogicGame('yes', 'no', logic, 1))