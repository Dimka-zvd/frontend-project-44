export default RandomNumberInRange = (min, max) => { // Рандомайзер
  return Math.random() * (max - min) + min
}