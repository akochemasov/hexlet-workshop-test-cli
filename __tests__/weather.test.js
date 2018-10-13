import nock from 'nock';
import getCityWeather from '../src';

const url = 'https://www.metaweather.com/api/location/search';

const nockRequest = () => nock(url).defaultReplyHeaders({ 'access-control-allow-origin': '*' });

// test
describe('weather Moscow', () => {
  nockRequest()
    .get('/?query=Moscow')
    .reply(200, [
      {
        title: 'Moscow',
        location_type: 'City',
        woeid: 2122265,
        latt_long: '55.756950,37.614971',
      },
    ]);

  test('testing', async () => {
    const result = await getCityWeather('Moscow');
    expect(result).toBe(2122265);
  });
});

// test
describe('weather Piter', () => {
  nockRequest()
    .get('/?query=Piter')
    .reply(200, []);

  test('testing', async () => {
    const result = await getCityWeather('Piter');
    expect(result).toBe('not found');
  });
});
