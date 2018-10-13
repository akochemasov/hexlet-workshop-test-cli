import nock from 'nock';
import getCityWeather from '../src';

// todo: код асинхронный, так не будет работать
describe('weather', () => {
  let scope;

  beforeAll(() => {
    const url = 'https://www.metaweather.com/api/location/search';
    scope = nock(url)
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/?query=Moscow')
      .reply(200, [
        {
          title: 'Moscow',
          location_type: 'City',
          woeid: 2122265,
          latt_long: '55.756950,37.614971',
        },
      ]);
  });

  afterAll(() => {
    scope.cleanAll();
  });

  test('weather Moscow', async () => {
    const result = await getCityWeather('Moscow');
    expect(result).toBe(2122265);
  });
  // expect(getCityWeather('Moscow')).toBe('2122265');
  // expect(getCityWeather('Piter')).not.toBe('31');
  // expect(getCityWeather(1)).toBe('not found');
  // expect(getCityWeather('Hello')).toBe('not found');
});
