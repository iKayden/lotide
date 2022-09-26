const letterPositions = function (str) {
  const results = {};
  str = str.split(" ").join("").toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (results[str[i]]) {
      results[str[i]].push(i);
    } else {
      results[str[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;
