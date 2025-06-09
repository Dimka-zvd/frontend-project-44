/*eslint brace-style: "error"*/
import logic from '../index.js'
import RandomNumberInRange from '../utils.js'

const text = 'What is the result of the expression?'
const opers = ['+', '-', '*']

const calculate = (num1, num2, oper) => {
  if (oper === '+') {
    return `${num1 + num2}`
  } else if (oper === '-') {
    return `${num1 - num2}`
  } else if (oper === '*') {
    return `${num1 * num2}`
  }
}

const game = () => {
  const num1 = RandomNumberInRange()
  const num2 = RandomNumberInRange()
  const oper = opers[RandomNumberInRange(0, 2)]
  const question = `${num1} ${oper} ${num2}`
  const answer = `${calculate(num1, num2, oper)}`
  return [question, answer]
}

export default function runGame() {
  logic(text, game)
}
