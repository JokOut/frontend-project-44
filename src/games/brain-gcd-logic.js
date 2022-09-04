import playGame from '../index.js';

import getRandom from '../tools.js';

function gcd(a, b) {
  if (!b) return a;
  return gcd(b, a % b);
}

const gameRule = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const numberOne = getRandom();
  const numberTwo = getRandom();
  const question = `${numberOne} ${numberTwo}`;
  const expectedAnswer = String(gcd(numberOne, numberTwo));
  return [expectedAnswer, question];
};

const runBrainGcd = () => playGame(gameRule, generateRound);

export default runBrainGcd;
