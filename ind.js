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
