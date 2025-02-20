import readlineSync from "readline-sync"

import {name} from "../bin/brain-games.js"

const RandomNumberInRange = (min, max) => {
    return Math.random() * (max - min) + min;
}

const RandomNumbers = (quantity) => {
    let i = 0 
    let numbers = []
    let str = ''
    const znaki = ['+', '-', '*']
    if(quantity < 3 || quantity % 2 === 0) {
        return RandomNumberInRange(1,100).toFixed(0)
    }
    while(i < quantity - 1) {
        numbers.push(RandomNumberInRange(1,100).toFixed(0))
        i += 1
    }
    for(let num of numbers) {
        str += num.toString()
        if((str.includes('+') === false) && (str.includes('-') === false) && (str.includes('*') === false)){
            let ran = RandomNumberInRange(0,2).toFixed(0)
            str += znaki[ran].toString()
        }
    }
    return str
}


export const LogicGame = (yes, no, logic, quantity) => {
    let i = 0
    let flag = true
    while (i !== 3) {
        const str = RandomNumbers(quantity)
        console.log('Question: ',str)
        let answer = readlineSync.question('Your answer: ')
        if (eval(logic)) {
            console.log('Correct!')
            i += 1
        } else {
            let m = 0
            if(quantity === 1){
                m = yes
                if(str % 2 !== 0) {
                    m = no
                }
            }else {
                m = eval(str)
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
