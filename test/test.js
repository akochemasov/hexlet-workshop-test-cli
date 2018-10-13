const getCityWeather = require('../src/index');

test('test1', () => {
  expect(getCityWeather().toBe('10'));
});
