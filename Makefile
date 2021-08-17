clean:
	rm -rf ./dist

build:
	node_modules/.bin/webpack --mode production