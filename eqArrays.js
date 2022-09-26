const eqArrays = (arrA, arrB) => {
  let isGood = true;
  if (arrA.length !== arrB.length) {
    isGood = false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      isGood = false;
    }
  }
  return isGood;
};

module.exports = eqArrays;
