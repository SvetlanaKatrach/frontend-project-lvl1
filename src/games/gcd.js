import readlineSync from 'readline-sync';
import { getRandomNum, startGame } from './index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const minValueOfRandomNum = 2;
const maxValueOfRandomNum = 30;

/* не смогла реализовать через while и for
реализацию подсмотрела
*/

const calculateGreatRandomDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return calculateGreatRandomDivisor(num2, num1 % num2);
};

const getGameResult = () => {
  const num1 = getRandomNum(minValueOfRandomNum, maxValueOfRandomNum);
  const num2 = getRandomNum(minValueOfRandomNum, maxValueOfRandomNum);
  const expressionInQuestion = `${num1} ${num2}`;
  const expectedAnswer = String(calculateGreatRandomDivisor(num1, num2));
  const userAnswer = readlineSync.question(`Question: ${expressionInQuestion} \nYour answer: `);
  return [expectedAnswer, userAnswer];
};

const gcdGame = () => startGame(gameRule, getGameResult);

export default gcdGame;
