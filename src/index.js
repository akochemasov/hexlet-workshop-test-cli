import readlineSync from 'readline-sync';
import https from 'https';

const getWeather = (city) => {
  https
    .get(
      `https://www.metaweather.com/api/location/search/?query=${city}`,
      (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          const weather = JSON.parse(data)[0]
            ? JSON.parse(data)[0].woeid
            : 'not found';
          console.log(`Weather in ${city} is`, weather);
        });
      },
    )
    .on('error', (err) => {
      console.log(`Error: ${err.message}`);
    });
};

const getCityWeather = () => {
  const city = readlineSync.question('Enter the name of the city: ');
  console.log(`Your city: ${city}`);
  //   getWeather(city);
  console.log('test', getWeather(city));
};

export default getCityWeather;
