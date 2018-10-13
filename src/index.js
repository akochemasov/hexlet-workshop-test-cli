import readlineSync from 'readline-sync';

const getCityWeather = () => {
  const city = readlineSync.question('Enter the name of the city: ');
  console.log(`Your city: ${city}`);
  return '10';
};

export default getCityWeather;
