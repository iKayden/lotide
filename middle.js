const middle = (arr) => {
  // Creating variables for work with input and output
  const outputArray = [];
  const length = arr.length;
  const midIndex = Math.floor(length / 2);

  // Creating return statements and process
  // if array has two or less elements
  if (length <= 2) {
    return outputArray;
  }
  // if array has even number we will return two middle elements
  if (length % 2) {
    return arr.slice(midIndex, midIndex + 1);
  } else {
    return arr.slice(midIndex - 1, midIndex + 1);
  }
};

module.exports = middle;
