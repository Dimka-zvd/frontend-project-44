export const progression = () => {  // Прогрессия
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

export const readOfProgression = (progression) => { 
    progression = progression.split(' ')
    const index = progression.indexOf('..')
    if(index + 1 === progression.length - 1 || index === progression.length - 1){
        return progression[index - 1] + (progression[index - 1] - progression[index - 2])
    } else if(index - 1 === 0){
        return progression[index + 1] - (progression[index + 2] - progression[index + 1])
    }else {
        return progression[index + 1] - (progression[index + 2] - progression[index + 1])
    }
}