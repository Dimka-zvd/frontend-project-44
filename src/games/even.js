import logic from '../index.js'
import RandomNumberInRange from '../utils.js'

const text = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no')

const game = () => {
  const question = RandomNumberInRange()
  const answer = isEven(question)
  return [question, answer]
}

export default function runGame() {
  logic(text, game)
}