install: 
	npm install

install-deps:
	npm ci	

brain-games:
	node bin/brain-games.js

publish:
	npm publish

lint:
	npx eslint .