const countLetters = (string) => {
  let returnObj = {};
  string = string.split(" ").join("").toLowerCase();
  for (const letter in string) {
    if (string[letter] in returnObj) {
      returnObj[string[letter]]++;
    } else {
      returnObj[string[letter]] = 1;
    }
  }
  return returnObj;
};

module.exports = countLetters;
