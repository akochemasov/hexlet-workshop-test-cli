import axios from 'axios';
import _ from 'lodash';
import '@babel/polyfill';

const getCityWeather = async (city) => {
  const url = `https://www.metaweather.com/api/location/search/?query=${city}`;
  const result = await axios.get(url);
  if (_.has(result.data[0], 'woeid')) {
    return result.data[0].woeid;
  }
  return 'not found';
};

export default getCityWeather;
