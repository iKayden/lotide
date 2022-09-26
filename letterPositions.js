const eqArrays = (arrA, arrB) => {
  let isGood = true;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      isGood = false;
    }
  }
  return isGood;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function (str) {
  const results = {};
  str = str.split(" ").join("").toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (results[str[i]]) {
      results[str[i]].push(i);
    } else {
      results[str[i]] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("Hello").e, [1]);
assertArraysEqual(letterPositions("Hello").l, [2, 3]);
