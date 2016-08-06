#!/bin/sh

if [ -f "app.js" ]; then
  rm app.js
fi

if [ -f "app.js.map" ]; then
  rm app.js.map
fi

find models -name \*.js -exec rm {} \;
find models -name \*.js.map -exec rm {} \;
find tests -name \*.js -exec rm {} \;
find tests -name \*.js.map -exec rm {} \;
find out -name \*.js -exec rm {} \;
find out -name \*.js.map -exec rm {} \;

