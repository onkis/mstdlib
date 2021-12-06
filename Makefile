
.PHONY: clean, install, build

clean:
	rm -rf ./dist

build:
	node_modules/.bin/webpack --mode production
	
install:
	cp dist/mstdlib.js /Users/mike/projects/demo0/aws_lambda/app_tracking/mstdlib.js