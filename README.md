# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @kyrylokharchenko/lotide`

**Require it:**

`const _ = require('@kyrylokharchenko/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- [`countLetters`](./countLetters.js): Given a string of letters, returns an object with the number of occurrences for each letter.
- [`countOnly`](./countOnly.js): Given an object and a list of values, returns the number of occurrences of each.
- [`eqArrays`](./eqArrays.js): Checks if two arrays are identical.
- [`eqObjects`](./eqObjects.js): Checks if two objects are identical.
- [`findKey`](./findKey.js): Given an object and a callback function, returns the key associated with it.
- [`findKeyByValue`](./findKeyByValue.js): Given an object and a value, returns the key associated with it.
- [`flatten`](./flatten.js): Given an a nested array, returns a flat array of the same elements.
- [`head`](./head.js): Given an array, returns the first element.
- [`letterPositions`](./letterPositions.js): Given a string, returns an object with an array of positions for each.
- [`map`](./map.js): Given an array and a callback function will return an array with the callback applied.
- [`middle`](./middle.js): Retrieve the middle element of an array. If the length of an array is even, it will return both middle indexes.
- [`tail`](./tail.js): Returns the last element of an array.
- [`takeUntil`](./takeUntil.js): Given an array and a callback function will output all elements that got matched.
- [`without`](./without.js): Given an array and an exclusion/ignore list, returns a new array without excluded/ignored elements.
