const getCityWeather = (city) => {
  console.log(`Your city: ${city}`);
  let weather = '';
  switch (city) {
    case 'Moscow':
      weather = '10';
      break;

    case 'Piter':
      weather = '3';
      break;

    default:
      weather = 'not found';
  }
  return weather;
};

export default getCityWeather;
