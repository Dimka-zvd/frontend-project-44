import readlineSync from "readline-sync"

import {name} from "../bin/brain-games.js"

const RandomNumberInRange = (min, max) => { // Рандомайзер
    return Math.random() * (max - min) + min;
}

const progression = () => {  // Прогрессия
    const firstNumber = RandomNumberInRange(1,100).toFixed(0)
    const progress = RandomNumberInRange(1,10).toFixed(0)
    const quantityOfNumbers = RandomNumberInRange(5,10).toFixed(0)
    const questionNumber = Number(RandomNumberInRange(0, quantityOfNumbers - 1).toFixed(0))
    console.log(questionNumber)
    let listOfProgression = []
    if(questionNumber !== 0){
        listOfProgression.push(Number(firstNumber))
    }else{
        listOfProgression.push('..')
    }
    if(questionNumber !== 1){
        listOfProgression.push(Number(firstNumber) + Number(progress))
    }else{
        listOfProgression.push('..')
    }
    let i = 2
    while(i < quantityOfNumbers){
        if(i === questionNumber){
            listOfProgression.push('..')
        }else{
            if(listOfProgression[i-1] === '..') {
                listOfProgression.push(Number(listOfProgression[i-2]) + (Number(progress) * 2))
            }else{
                listOfProgression.push(Number(listOfProgression[i-1]) + Number(progress))
            }
        }
        i += 1
    }
    return listOfProgression
}

const readOfProgression = (progression) => { 
    const index = progression.indexOf('..')
    if(index + 1 === progression.length - 1 || index === progression.length - 1){
        return progression[index - 1] + (progression[index - 1] - progression[index - 2])
    } else if(index - 1 === 0){
        return progression[index + 1] - (progression[index + 2] - progression[index + 1])
    }else {
        return progression[index + 1] - (progression[index + 2] - progression[index + 1])
    }
}

console.log(progression())

const RandomNumbers = (quantity) => { // Часть логики. Выстраивает выражение, с которым будет работать вторая часть логики
    let i = 0 
    let numbers = []
    let str = ''
    const znaki = ['+', '-', '*']
    if(quantity === 1) {
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

const gcd = (str) => { // Ищет наивысший делитель
    const newStr = str.map(Number)
    let j = 1
    let del = 0
    while(j !== Math.max.apply(null,(newStr.map(Number)))) {
        if(newStr.every((x) => x % j === 0)) {
            del = j
        }
        j += 1
    }
    return del
}


export const LogicGame = (yes, no, logic, quantity) => { // Вторая часть логики
    let i = 0
    let flag = true
    while (i !== 3) {
        let str = []
        let str1 = ''
        if (quantity === 10){
            str = progression()
        }else{
            str = RandomNumbers(quantity)
        }
        if (Array.isArray(str) === true){
            str1 = str.join(' ')
        }
        console.log('Question: ',str1)
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
                m = gcd(RandomNumbers(quantity))
            }else if(quantity === 10){
                m = readOfProgression(str)
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
