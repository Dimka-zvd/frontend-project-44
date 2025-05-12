import logic from '../index.js'
import RandomNumberInRange from '../utils.js'

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (n) => {
  if (n === 2) {
    return 'Простое число'
  }
  let i = 2
  const limit = Math.sqrt(n)
  while (i <= limit) {
    if (n % i === 0) {
      return 'no'
    }
    i +=1
  }
  return 'yes'
}

const game = () => {
  const num = RandomNumberInRange(1, 100)
  const question = `${num}`
  const answer = isPrime(question)
  return [question, answer]
}

export default function runGame() {
  logic(text, game)
}