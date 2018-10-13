import readlineSync from 'readline-sync';

const getCity = () => {
  const city = readlineSync.question('Enter the name of the city: ');
  console.log(`Your city: ${city}`);
};

export default getCity;
