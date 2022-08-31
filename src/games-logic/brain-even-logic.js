import playGame from '../games-body.js';

import getRandom from '../tools.js';

const isEven = (number) => number % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const value = getRandom();
  const expectedAnswer = isEven(value) ? 'yes' : 'no';
  return [expectedAnswer, value];
};

const runBrainEven = () => playGame(gameRule, generateRound);

export default runBrainEven;
