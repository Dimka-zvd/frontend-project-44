import { LogicGame } from "../src/index.js";

const logic = '(Number(answer) === readOfProgression(str))'

console.log('What number is missing in the progression?')

console.log(LogicGame(1, 1, logic,10))