import playGame from '../index.js';

import getRandomNumber from '../tools.js';

const isEven = (number) => number % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(1, 99);
  const answer = isEven(question) ? 'yes' : 'no';
  return [answer, question];
};

const runBrainEven = () => playGame(gameRule, generateRound);

export default runBrainEven;
