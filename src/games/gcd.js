export const gcd = (str) => { // Ищет наивысший делитель
    str = str.split(' ')
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
