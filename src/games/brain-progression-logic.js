import playGame from '../index.js';
import getRandom from '../tools.js';

const gameRule = 'What number is missing in the progression?';

const progressionLength = getRandom(5, 10);

const makeProgression = (startNumber, step, changeIndex) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    progression = (i === changeIndex) ? `${progression} ..` : `${progression} ${startNumber + (i * step)}`;
  }
  return progression.trim();
};

const generateRound = () => {
  const progressionStart = getRandom();
  const progressionStep = getRandom(5, 10);
  const replaceIndex = getRandom(0, progressionLength - 1);
  const question = makeProgression(progressionStart, progressionStep, replaceIndex);
  const expectedAnswer = String(progressionStart + (progressionStep * replaceIndex));
  return [expectedAnswer, question];
};

const runBrainProgression = () => playGame(gameRule, generateRound);

export default runBrainProgression;
