const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;
