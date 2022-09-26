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

module.exports = middle;
