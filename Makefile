install:
	npm install

start:
	npm run babel-node -- src/bin/weather.js Piter

start-build:
	npm run babel-node -- dist/bin/weather.js Moscow

publish:
	npm publish

lint:
	npm run eslint

build:
	npm run build

test:
	npm test

.PHONY: test