import playGame from '../index.js';

import getRandomNumber from '../tools.js';

function gcd(a, b) {
  if (!b) return a;
  return gcd(b, a % b);
}

const gameRule = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99);
  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));
  return [answer, question];
};

const runBrainGcd = () => playGame(gameRule, generateRound);

export default runBrainGcd;
