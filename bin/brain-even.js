import readlineSync from "readline-sync"

import {name} from "./brain-games.js"

import { LogicGame } from "../src/index.js"

console.log('Answer "yes" if the number is even, otherwise answer "no"')

const yes = 'yes'

const no = 'no'

let logic = '(num % 2 === 0 && answer === yes)||(num % 2 !== 0 && answer === no)'

console.log(LogicGame(yes, no, logic))