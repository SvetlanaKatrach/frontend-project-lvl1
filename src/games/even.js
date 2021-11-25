import startGame from '../index.js';
import getRandomNum from '../getRandom.js';

const isEven = (number) => number % 2 === 0;
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minValueOfRandomNum = 1;
const maxValueOfRandomNum = 100;

const getGameResult = () => {
  const expressionInQuestion = getRandomNum(minValueOfRandomNum, maxValueOfRandomNum);
  const expectedAnswer = isEven(expressionInQuestion) ? 'yes' : 'no';
  return [expectedAnswer, expressionInQuestion];
};

const evenGame = () => startGame(gameRule, getGameResult);

export default evenGame;
