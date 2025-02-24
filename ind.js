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

console.log(progression())