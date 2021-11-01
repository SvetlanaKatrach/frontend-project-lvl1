import readlineSync from 'readline-sync';
import { getRandomNum, getUserName, greetingUser } from './functions.js';

console.log(greetingUser());
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => num % 2 === 0;

let counter = 0;
while (counter < 3) {
  const randomNumUpTo100 = getRandomNum(1, 100);
  const userAnswer = readlineSync.question(`Question: ${randomNumUpTo100} \nYour answer: `);
  const expectedAnswerEven = isEven(randomNumUpTo100) ? 'yes' : 'no';
  const rightAnswer = 'Correct!';
  const wrongAnswer = `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswerEven}'. \nLet's try again, ${getUserName}!`;

  if (userAnswer === expectedAnswerEven) {
    console.log(rightAnswer);
    counter += 1;
  } else if (userAnswer !== expectedAnswerEven) {
    console.log(wrongAnswer);
    counter = 0;
    break;
  }
}

if (counter === 3) {
  console.log(`Congratulations, ${getUserName}!`);
}

export default isEven;
