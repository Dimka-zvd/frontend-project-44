import readlineSync from 'readline-sync'
import username from './cli.js'

const roundsCount = 3

export default function logic(description, game) {
  console.log('Welcome to the Brain Games!')

  const userName = username()
  console.log(`Hello, ${userName}!`)

  console.log(description)
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = game()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer === answer) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
