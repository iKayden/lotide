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

const without = (source, itemsToRemove) => {
  let outputArr = [];
  for (let i = 0; i < itemsToRemove.length; i++) {
    outputArr = source.filter((item) => item !== itemsToRemove[i]);
  }
  console.log(outputArr);
  return outputArr;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
