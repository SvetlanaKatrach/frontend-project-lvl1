import readlineSync from 'readline-sync';

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const isEven = (num) => num % 2 === 0;

export const getUserName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');

export const greeting = () => {
  const greetingUser = () => `Hello, ${getUserName}!`;
  console.log(greetingUser());
};

export const startGame = (gameRule, getGameResult) => {
  let counter = 0;
  const numberOfRightAnswers = 3;
  while (counter < numberOfRightAnswers) {
    const [expectedAnswer, userAnswer] = getGameResult();
    const rightAnswer = 'Correct!';
    const wrongAnswer = `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. \nLet's try again, ${getUserName}!`;

    if (userAnswer === expectedAnswer) {
      console.log(rightAnswer);
      counter += 1;
    } else if (userAnswer !== expectedAnswer) {
      console.log(wrongAnswer);
      counter = 0;
      break;
    }

    if (counter === numberOfRightAnswers) {
      console.log(`Congratulations, ${getUserName}!`);
    }
  }
};
