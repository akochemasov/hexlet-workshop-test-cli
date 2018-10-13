#!/usr/bin/env node

import getCityWeather from '../index';

const city = process.argv[process.argv.length - 1];
getCityWeather(city).then(console.log);
