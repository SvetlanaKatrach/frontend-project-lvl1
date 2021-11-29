import startGame from '../index.js';
import getRandomNum from '../getRandom.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

// eslint-disable-next-line max-len
const getCommonDivisor = (number1, number2) => ((number2 === 0) ? number1 : (getCommonDivisor(number2, number1 % number2)));

const getGameResult = () => {
  const number1 = getRandomNum(2, 30);
  const number2 = getRandomNum(2, 30);
  const expressionInQuestion = `${number1} ${number2}`;
  const expectedAnswer = String(getCommonDivisor(number1, number2));
  return [expectedAnswer, expressionInQuestion];
};

const gcdGame = () => startGame(gameRule, getGameResult);

export default gcdGame;
