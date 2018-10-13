import getCityWeather from '../src';

test('weather', () => {
  expect(getCityWeather('Moscow')).toBe('10');
  expect(getCityWeather('Piter')).not.toBe('31');
});
