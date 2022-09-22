const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arrA, arrB) => {
  let isGood = true;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      isGood = false;
    }
  }
  console.log(isGood);
  return isGood;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object2);

  if (keysObj1.length !== keysObj2.length) {
    return false;
  }

  for (const key of keysObj1) {
    const valueObj1 = object1[key];
    const valueObj2 = object2[key];

    if (Array.isArray(valueObj1) && Array.isArray(valueObj2)) {
      if (!eqArrays(valueObj1, valueObj2)) {
        return false;
      }
    } else if (valueObj1 !== valueObj2) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const bac = { b: "2", a: "4", c: "9" };
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, bac), false); // => false

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(ba, ab), true); // => true
