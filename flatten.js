const flatten = (nestedArrays) => {
  // Initializing reduce function to sim trough unnecessary arrays
  // flatArr is the "previousValue" (arr[0]) and makeFlat is the "currentValue" (arr[1])
  return nestedArrays.reduce(
    (flatArr, makeFlat) => {
      // creating a new array by merging and flattening (if needed) existing arrays
      return flatArr.concat(
        Array.isArray(makeFlat) ? flatten(makeFlat) : makeFlat
      );
    },
    // Creating "starting accumulator" for the reduce function or "initial value"
    []
  );
};

module.exports = flatten;
