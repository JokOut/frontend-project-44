install: 
	npm ci

brain games:
	node bin/brain-games

publish:
	npm publish --dry-run

lint:
	npx eslint .

