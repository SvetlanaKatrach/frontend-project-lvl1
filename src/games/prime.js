import readlineSync from 'readline-sync';
import { getRandomNum, startGame } from './index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minRandomNum = 2;
const maxRandomNum = 20;

const isPrime = (randomNum) => {
  for (let randomDivisor = 2; randomDivisor < randomNum; randomDivisor += 1) {
    if (randomNum % randomDivisor === 0) {
      return false;
    }
  }
  return true;
};

const getGameResult = () => {
  const randomNum = getRandomNum(minRandomNum, maxRandomNum);
  const expectedAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${randomNum} \nYour answer: `);
  return [expectedAnswer, userAnswer];
};

const primeGame = () => startGame(gameRule, getGameResult);
export default primeGame;
