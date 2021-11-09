import readlineSync from 'readline-sync';
import { getRandomNum, isEven, startGame } from './index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minValueOfRandomNum = 1;
const maxValueOfRandomNum = 100;

const getGameResult = () => {
  const randomNum = getRandomNum(minValueOfRandomNum, maxValueOfRandomNum);
  const expectedAnswer = isEven(randomNum) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`${gameRule} \nQuestion: ${randomNum} \nYour answer: `);
  return [expectedAnswer, userAnswer];
};

const evenGame = () => startGame(gameRule, getGameResult);

export default evenGame;
