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

// there is Array.prototype.flat() but I guess it's not cool to just use it, here's workaround.
const flatten = (nestedArrays) => {
  // Initializing reduce function to sim trough unnecessary arrays
  // flatArr is the "previousValue" (arr[0]) and makeFlat is the "currentValue" (arr[1])
  return nestedArrays.reduce(
    (flatArr, makeFlat) => {
      // creating a new array by merging and flattening (if needed) existing arrays
      return flatArr.concat(
        Array.isArray(makeFlat) ? flatten(makeFlat) : makeFlat
      );
    },
    // Creating "starting accumulator" for the reduce function or "initial value"
    []
  );
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6
