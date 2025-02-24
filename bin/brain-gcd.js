import { LogicGame } from "../src/index.js";

const logic = '(Number(answer) === Number(gcd(RandomNumbers(quantity))))'

console.log('What is the result of the expression?')

console.log(LogicGame(1, 1, logic,2))