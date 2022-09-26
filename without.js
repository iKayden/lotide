const without = (source, itemsToRemove) => {
  let outputArr = [];
  for (let i = 0; i < itemsToRemove.length; i++) {
    outputArr = source.filter((item) => item !== itemsToRemove[i]);
  }
  console.log(outputArr);
  return outputArr;
};

module.exports = without;
