const eqArrays = (arrA, arrB) => {
  let isGood = true;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      isGood = false;
    }
  }
  return isGood;
};

const assertEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual([1, 2, 3], [1, 2, 4]);
