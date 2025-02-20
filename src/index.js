import readlineSync from "readline-sync"

import {name} from "../bin/brain-games.js"

const RandomNumberInRange = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const LogicGame = (yes, no, logic) => {
    let i = 0
    let flag = true
    while ( i != 3) {
        let  num = RandomNumberInRange(1,100).toFixed(0)
        console.log('Question: ',num)
        let answer = readlineSync.question('Your answer: ')
        if (eval(logic)) {
            console.log('Correct!')
            i += 1
        } else {
            let m = yes
            if (num % 2 !== 0){
                m = no
            }
            console.log("'" + answer + "'" + "is wrong answer ;(. Correct answer was '" + m + "'")
            flag = false
            break
        }
    }

    if (flag === true) {
        return (`Congratulations, ${name}!`)
    } else{
        return (`Let's try again, ${name}!`)
    }
}