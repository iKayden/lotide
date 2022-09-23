const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

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

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
