# travis-or-circle [![NPM version](https://img.shields.io/npm/v/travis-or-circle.svg)](https://npmjs.com/package/travis-or-circle) [![NPM downloads](https://img.shields.io/npm/dm/travis-or-circle.svg)](https://npmjs.com/package/travis-or-circle) [![Build Status](https://img.shields.io/circleci/project/egoist/travis-or-circle/master.svg)](https://circleci.com/gh/egoist/travis-or-circle)

> Read node versions from travis or circle config file.

## Install

```
$ npm install --save travis-or-circle
```

## Usage

```js
const travisOrCircle = require('travis-or-circle')

travisOrCircle()
//=> ['0.12', '4', '5']

travisOrCirle('../there')

travisOrCirle('.git')
// return null if no version detected
```

## License

MIT © [EGOIST](https://github.com/egoist)
