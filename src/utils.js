export default (min = 0, max = 100) => { // Рандомайзер
  const randomNum = Math.floor(Math.random() * (max - min + 1))+ min
  return randomNum
}