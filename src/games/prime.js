import startGame from '../index.js';
import getRandomNum from '../getRandom.js';

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
  const expressionInQuestion = getRandomNum(minRandomNum, maxRandomNum);
  const expectedAnswer = isPrime(expressionInQuestion) ? 'yes' : 'no';
  return [expectedAnswer, expressionInQuestion];
};

const primeGame = () => startGame(gameRule, getGameResult);
export default primeGame;
