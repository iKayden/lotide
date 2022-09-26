// Function for returning first element of the array.
const head = function (arr) {
  if (arr && arr.length >= 1) {
    return arr[0];
  } else if (arr.length <= 0) {
    return undefined;
  }
};

module.exports = head;
