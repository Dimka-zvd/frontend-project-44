import { LogicGame } from "../src/index.js"

const logic = '(Number(answer) === eval(str))'

console.log('What is the result of the expression?')

console.log(LogicGame(1, 1, logic,3))