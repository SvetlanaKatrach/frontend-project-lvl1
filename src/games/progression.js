import readlineSync from 'readline-sync';
import { getRandomNum, startGame } from './index.js';

const gameRule = 'What number is missing in the progression?';

const maxRandomValue = 20;
const minElementsOfProgression = 5;
const maxElementsOfProgression = 10;

const getProgression = (firstElement, lengthOfProgression, commonDifference) => {
  let result = firstElement;
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression[i] = result;
    result += commonDifference;
  }
  return progression;
};

const getProgressionWithHiddenElement = (progression, hiddenElementIndex) => {
  const progressionForQuestion = progression;
  for (let i = 0; i < progressionForQuestion.length; i += 1) {
    if (i === hiddenElementIndex) {
      progressionForQuestion[i] = '..';
    }
  }
  return progressionForQuestion.join(' ');
};

const getGameResult = () => {
  const firstElement = getRandomNum(0, maxRandomValue);
  const lengthOfProgression = getRandomNum(minElementsOfProgression, maxElementsOfProgression);
  const commonDifference = getRandomNum(2, maxRandomValue);
  const progression = getProgression(firstElement, lengthOfProgression, commonDifference);
  const hiddenElementIndex = getRandomNum(0, lengthOfProgression - 1);
  const expectedAnswer = String(progression[hiddenElementIndex]);
  const question = String(getProgressionWithHiddenElement(progression, hiddenElementIndex));
  const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
  return [expectedAnswer, userAnswer];
};

const progressionGame = () => startGame(gameRule, getGameResult);

export default progressionGame;
