import playGame from '../index.js';
import getRandomNumber from '../tools.js';

const gameRule = 'What number is missing in the progression?';

const progressionLength = getRandomNumber(5, 10);

const makeProgression = (startNumber, step, changeIndex) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    progression = (i === changeIndex) ? `${progression} ..` : `${progression} ${startNumber + (i * step)}`;
  }
  return progression.trim();
};

const generateRound = () => {
  const progressionStart = getRandomNumber(1, 99);
  const progressionStep = getRandomNumber(5, 10);
  const index = getRandomNumber(0, progressionLength - 1);
  const getQuestion = makeProgression(progressionStart, progressionStep, index);
  const answer = String(progressionStart + progressionStep * index);
  return [answer, getQuestion];
};

const runBrainProgression = () => playGame(gameRule, generateRound);

export default runBrainProgression;
