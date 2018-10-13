import getCityWeather from '../src';

//todo: код асинхронный, так не будет работать
test('weather', () => {
  expect(getCityWeather('Moscow')).toBe('2122265');
  expect(getCityWeather('Piter')).not.toBe('31');
  expect(getCityWeather(1)).toBe('not found');
  expect(getCityWeather('Hello')).toBe('not found');
});
