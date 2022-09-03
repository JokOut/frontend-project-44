import playGame from '../index.js';

import getRandom from '../tools.js';

const operators = ['+', '-', '*'];
// eslint-disable-next-line consistent-return
const calculate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
    // do nothing
  }
};

const gameRule = 'What is the result of the expression?';

const generateRound = () => {
  const numberOne = getRandom();
  const numberTwo = getRandom();
  const operator = operators[getRandom(0, operators.length - 1)];
  const question = `${numberOne} ${operator} ${numberTwo}`;
  const expectedAnswer = String(calculate(operator, numberOne, numberTwo));
  return [expectedAnswer, question];
};

const runBrainCalc = () => playGame(gameRule, generateRound);

export default runBrainCalc;
