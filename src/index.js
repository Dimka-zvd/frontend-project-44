import readlineSync from "readline-sync"

import {name} from "../bin/brain-games.js"

import gcd from './games/gcd.js'

import * as prg from './games/progression.js'

import { isPrime } from "./games/prime.js"

const RandomNumberInRange = (min, max) => { // Рандомайзер
    return Math.random() * (max - min) + min;
}

const RandomNumbers = (quantity) => { // Часть логики. Выстраивает выражение, с которым будет работать вторая часть логики
    let i = 0 
    let numbers = []
    let str = ''
    const znaki = ['+', '-', '*']
    if(quantity === 1 || quantity === 11) {
        return RandomNumberInRange(1,100).toFixed(0)
    }
    if(quantity === 10){
        return progression()
    }
    if(quantity === 2) {
        str = str + RandomNumberInRange(1,100).toFixed(0) + ' ' + RandomNumberInRange(1,100).toFixed(0)
        return str.split(' ').map(Number)
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

export const LogicGame = (yes, no, logic, quantity) => { // Вторая часть логики
    let i = 0
    let flag = true
    while (i !== 3) {
        let str = []
        if (quantity === 10){
            str = prg.progression()
        }else{
            str = RandomNumbers(quantity)
        }
        if (Array.isArray(str) === true){
            str = str.join(' ')
        }
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
            }else if(quantity === 3){
                m = eval(str)
            }else if(quantity  === 2){
                m = gcd(str)
            }else if(quantity === 10){
                m = prg.readOfProgression(str)
            }else if(quantity === 11){
                if(isPrime(str) === 'yes'){
                    m = 'yes'
                }else{
                    m = 'no'
                }
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
