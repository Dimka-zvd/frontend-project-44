import { LogicGame } from "../src/index.js";

const logic = '(isPrime(str) === answer)'

console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

console.log(LogicGame('yes', 'no', logic, 11))