import logic from '../index.js'
import RandomNumberInRange from '../utils.js'

const text = 'Find the greatest common divisor of given numbers.'

const getGcd = (num1, num2) => (num1 === 0 ? num2 : getGcd(num2 % num1, num1))

const game = () => {
  const num1 = RandomNumberInRange()
  const num2 = RandomNumberInRange()
  const question = `${num1} ${num2}`
  const answer = `${getGcd(num1, num2)}`
  return [question, answer]
}

export default function runGame() {
  logic(text, game)
}
