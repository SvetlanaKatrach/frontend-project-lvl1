import startGame from '../index.js';
import getRandomNum from '../getRandom.js';

const gameRule = 'What number is missing in the progression?';

const maxRandomValue = 20;
const minElementsOfProgression = 5;
const maxElementsOfProgression = 10;

const getProgression = (firstElement, lengthOfProgression, commonDifference) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    const current = firstElement + (commonDifference * i);
    progression.push(current);
  }
  return progression;
};

const getProgressionWithHiddenElement = (progression, hiddenIndex) => {
  const progressionForQuestion = Array.from(progression);
  for (let i = 0; i < progressionForQuestion.length; i += 1) {
    progressionForQuestion[hiddenIndex] = '..';
  }
  return progressionForQuestion.join(' ');
};

const getGameResult = () => {
  const firstElement = getRandomNum(0, maxRandomValue);
  const lengthOfProgression = getRandomNum(minElementsOfProgression, maxElementsOfProgression);
  const commonDifference = getRandomNum(2, maxRandomValue);
  const progression = getProgression(firstElement, lengthOfProgression, commonDifference);
  const hiddenIndex = getRandomNum(0, lengthOfProgression - 1);
  const expectedAnswer = String(progression[hiddenIndex]);
  const expressionInQuestion = String(getProgressionWithHiddenElement(progression, hiddenIndex));
  return [expectedAnswer, expressionInQuestion];
};

const progressionGame = () => startGame(gameRule, getGameResult);

export default progressionGame;
