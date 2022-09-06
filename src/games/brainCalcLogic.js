import playGame from '../index.js';

import getRandomNumber from '../tools.js';

const operators = ['+', '-', '*'];
const calculate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const gameRule = 'What is the result of the expression?';

const generateRound = () => {
  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(operator, number1, number2));
  return [answer, question];
};

const runBrainCalc = () => playGame(gameRule, generateRound);

export default runBrainCalc;
