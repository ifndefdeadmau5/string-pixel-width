[string-pixel-width-kr](https://github.com/adambisek/string-pixel-width)
===================================
Korean text width measurement on the backend in Javascript.

[Article from the original library author](https://medium.com/@adambisek/text-pixel-width-measuring-on-javascript-backend-node-js-2b82bea97fab#.8ypyiffyw)

Installation
------------
To install the stable version:

<code>
npm install --save string-pixel-width-kr
</code>

Supported fonts:
------------

- Noto Sans KR

Example
------------
```
var pixelWidth = require('string-pixel-width');

const width = pixelWidth('이 텍스트의 width는 얼마일까요?');

How to contribute
------------
PRs are welcome :)
This library uses static map of width of every ASCII letter for all supported fonts.

1. Clone the repository
2. Open file ```src/pixelWidthCalculator.html``` in your editor
3. Add your font name into array of fonts (currently var websafe) and save
4. Open up ```src/pixelWidthCalculator.html``` in Google Chrome. It should look like this:
![PHPStan](docs/string-pixel-width-1.png)
5. Map of withs will be generated for you - copy it and replace content of file ```src/widthsMap.js```

**Please everytime make sure you don't broke existing fonts - remove any font or broke his widths.**
