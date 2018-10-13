#!/usr/bin/env node

import getCityWeather from '..';

const city = process.argv[process.argv.length - 1];
console.log(`Weather in ${city} is ${getCityWeather(city)}`);
