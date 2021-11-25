import startGame from '../index.js';
import getRandomNum from '../getRandom.js';

const maxInGetRandomNum = 10;
const gameRule = 'What is the result of the expression?';

const calculateRandomMath = (operand1, operand2, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Operation ${randomOperator} is not supported`);
  }
};

const getGameResult = () => {
  const operators = ['+', '-', '*'];
  const getRandomOperator = getRandomNum(0, 2);
  const randomOperator = operators[getRandomOperator];
  const operand1 = getRandomNum(0, maxInGetRandomNum);
  const operand2 = getRandomNum(0, maxInGetRandomNum);
  const expressionInQuestion = `${operand1} ${randomOperator} ${operand2}`;
  const expectedAnswer = String(calculateRandomMath(operand1, operand2, randomOperator));
  return [expectedAnswer, expressionInQuestion];
};

const calcGame = () => startGame(gameRule, getGameResult);

export default calcGame;
