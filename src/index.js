import readlineSync from 'readline-sync';

export const getUserName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');

export const startGame = (gameRule, getGameResult) => {
  const greetingUser = () => `Hello, ${getUserName}!`;
  console.log(greetingUser());
  const numberOfRightAnswers = 3;
  console.log(gameRule);
  for (let counter = 0; counter < numberOfRightAnswers; counter += 1) {
    const [expectedAnswer, expressionInQuestion] = getGameResult();
    const userAnswer = readlineSync.question(`Question: ${expressionInQuestion} \nYour answer: `);
    const rightAnswer = 'Correct!';
    const wrongAnswer = `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`;
    const letsTryAgain = `Let's try again, ${getUserName}!`;
    if (userAnswer !== expectedAnswer) {
      console.log(wrongAnswer);
      console.log(letsTryAgain);
      return;
    }
    console.log(rightAnswer);
  }
  console.log(`Congratulations, ${getUserName}!`);
};
