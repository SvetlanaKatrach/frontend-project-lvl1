import startGame from '../index.js';
import getRandomNum from '../getRandom.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getGameResult = () => {
  const expressionInQuestion = getRandomNum(2, 20);
  const expectedAnswer = isPrime(expressionInQuestion) ? 'yes' : 'no';
  return [expectedAnswer, expressionInQuestion];
};

const primeGame = () => startGame(gameRule, getGameResult);
export default primeGame;
