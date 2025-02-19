import readlineSync from "readline-sync"

export const username = () => {
    return readlineSync.question('May I have your name? ');
}