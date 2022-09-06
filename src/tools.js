const getRandomNumber = (min = 1, max = 99) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

export default getRandomNumber;
