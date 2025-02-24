export const isPrime = (n) => {
    if (n === 2) {
      return 'Простое число'
    }
    let i = 2;
    const limit = Math.sqrt(n)
    while (i <= limit) {
      if (n % i === 0) {
        return 'no'
      }
      i +=1
    }
    return 'yes'
}