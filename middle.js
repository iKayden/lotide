const eqArrays = (arrA, arrB) => {
  let isGood = true;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      isGood = false;
    }
  }
  return isGood;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = (arr) => {
  // Creating variables for work with input and output
  const outputArray = [];
  const length = arr.length;
  const midIndex = arr[Math.ceil(length / 2 - 1)];
  const midTwoIndexes = [midIndex, midIndex + 1];

  // Creating return statements and process
  // if array has two or less elements
  if (length <= 2) {
    return outputArray;
  }
  // if array has even number we will return two middle elements
  if (length % 2 === 0) {
    return outputArray.push(midTwoIndexes);
  }
  if (length % 2 !== 0) {
    outputArray.push(midIndex);
    return outputArray;
  }
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
