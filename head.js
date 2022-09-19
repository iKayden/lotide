const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function for returning first element of the array.
const head = function (arr) {
  if (arr && arr.length > 1) {
    return arr[0];
  } else {
    return undefined;
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
