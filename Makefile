install:
	npm install

start:
	npm run babel-node -- src/bin/weather.js

publish:
	npm publish

lint:
	npm run eslint

testing:
	npm run test
