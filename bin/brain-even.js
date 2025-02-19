import readlineSync from "readline-sync"

import {name} from "./brain-games.js"

const RandomNumberInRange = (min, max) => {
    return Math.random() * (max - min) + min;
}

console.log('Answer "yes" if the number is even, otherwise answer "no"')

let i = 0
let flag = true
while ( i != 3) {
    let num = RandomNumberInRange(1,100)
    console.log('Question: ',num.toFixed(0))
    let answer = readlineSync.question('Your answer: ')
    if ((num.toFixed(0) % 2 === 0 && answer === 'yes')||(num.toFixed(0) % 2 !== 0 && answer === 'no')) {
        console.log('Correct!')
        i += 1
    } else {
        let m = 'yes'
        if (num.toFixed(0) % 2 === 0){
            m = 'yes'
        } else {
            m = 'no'
        }
        console.log("'" + answer + "'" + "is wrong answer ;(. Correct answer was '" + m + "'")
        flag = false
        break
    }
}

if (flag === true) {
    console.log(`Congratulations, ${name}!`)
} else{
    console.log(`Let's try again, ${name}!`)
}