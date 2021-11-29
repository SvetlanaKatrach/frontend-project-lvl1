import startGame from '../index.js';
import getRandomNum from '../getRandom.js';

const isEven = (number) => number % 2 === 0;
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameResult = () => {
  const expressionInQuestion = getRandomNum(1, 100);
  const expectedAnswer = isEven(expressionInQuestion) ? 'yes' : 'no';
  return [expectedAnswer, expressionInQuestion];
};

const evenGame = () => startGame(gameRule, getGameResult);

export default evenGame;
