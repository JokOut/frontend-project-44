import playGame from '../index.js';

import getRandomNumber from '../tools.js';

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
  const question = getRandomNumber(1, 99);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [answer, question];
};

const runBrainPrime = () => playGame(gameRule, generateRound);

export default runBrainPrime;
