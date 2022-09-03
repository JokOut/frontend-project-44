import playGame from '../index.js';

import getRandom from '../tools.js';

const isEven = (number) => number % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandom();
  const expectedAnswer = isEven(question) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const runBrainEven = () => playGame(gameRule, generateRound);

export default runBrainEven;
