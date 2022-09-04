import playGame from '../index.js';

import getRandom from '../tools.js';

const isPrimeNumber = (num) => {
  if (num < 2 || num === num < 0) return false;
  if (num < 4) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5, n = Math.sqrt(num); i <= n; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = getRandom();
  const expectedAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const runBrainPrime = () => playGame(gameRule, generateRound);

export default runBrainPrime;
