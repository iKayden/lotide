const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  let returnObj = {};
  string = string.split(" ").join("").toLowerCase();
  for (const letter in string) {
    if (string[letter] in returnObj) {
      returnObj[string[letter]] += 1;
    } else {
      returnObj[string[letter]] = 1;
    }
  }
  console.log(string);
  console.log(returnObj);
  return returnObj;
};

countLetters("lighthouse in the house");
