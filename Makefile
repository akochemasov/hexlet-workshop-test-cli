install:
	npm install

start:
	npm run babel-node -- src/bin/weather.js

publish:
	npm publish

lint:
	npm run eslint

build:
	npm run build

test:
	npm test

.PHONY: test