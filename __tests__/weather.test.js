import getCityWeather from '../src/city';

test('weather', () => {
  expect(getCityWeather('Moscow')).toBe('10');
  expect(getCityWeather('Piter')).not.toBe('31');
});
