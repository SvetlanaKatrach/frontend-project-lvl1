import readlineSync from 'readline-sync';

const numberOfRightAnswers = 3;

const startGame = (gameRule, getGameResult) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  for (let counter = 0; counter < numberOfRightAnswers; counter += 1) {
    const [expectedAnswer, expressionInQuestion] = getGameResult();
    console.log(`Question: ${expressionInQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
