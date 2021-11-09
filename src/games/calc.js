import readlineSync from 'readline-sync';
import { getRandomNum, startGame } from './index.js';

const maxInGetRandomNum = 10;
const gameRule = 'What is the result of the expression?';

const calculateRandomMath = (operand1, operand2, randomOperator) => {
  let result;
  switch (randomOperator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      break;
  }
  return result;
};

const getGameResult = () => {
  const operators = ['+', '-', '*'];
  const getRandomOperator = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[getRandomOperator];
  const operand1 = getRandomNum(0, maxInGetRandomNum);
  const operand2 = getRandomNum(0, maxInGetRandomNum);
  const expressionInQuestion = `${operand1} ${randomOperator} ${operand2}`;
  const expectedAnswer = String(calculateRandomMath(operand1, operand2, randomOperator));
  const userAnswer = readlineSync.question(`${gameRule} ${expressionInQuestion} \nYour answer: `);
  return [expectedAnswer, userAnswer];
};

const calcGame = () => startGame(gameRule, getGameResult);

export default calcGame;
