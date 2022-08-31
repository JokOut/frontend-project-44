import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (gameRule, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  for (let i = 0; i < roundsCount; i += 1) {
    const [expectedAnswer, question] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = (readlineSync.question('Your answer: '));
    if (userAnswer.toLowerCase() !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}.'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
