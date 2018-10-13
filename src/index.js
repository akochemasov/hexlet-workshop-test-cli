import axios from 'axios';

const getCityWeather = async (city) => {
  const url = `https://www.metaweather.com/api/location/search/?query=${city}`;
  const result = await axios.get(url);
  if (result.data && result.data[0] && result.data[0].woeid) {
    return result.data[0].woeid;
  }
  return 'not found';
};

export default getCityWeather;
