const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("Function eqArrays", function () {
  it("should return true for: [1, 2, 3] === [1, 2, 3]", function () {
    const arrA = [1, 2, 3];
    const arrB = [1, 2, 3];
    assert.isTrue(eqArrays(arrA, arrB));
  });
  it("should return false for: [1, 2] === [1, 2, 3]", function () {
    const arrA = [1, 2];
    const arrB = [1, 2, 3];
    assert.isFalse(eqArrays(arrA, arrB));
  });
  it('should return false for: [1, 2, 3] === [1, 2, "3"]', function () {
    const arrA = [1, 2, 3];
    const arrB = [1, 2, "3"];
    assert.isFalse(eqArrays(arrA, arrB));
  });
  it("should return false for: [[2], 3, 4] === [2, [3], 4]", function () {
    const arrA = [[2], 3, 4];
    const arrB = [2, [3], [4]];
    assert.isFalse(eqArrays(arrA, arrB));
  });
  it("should return false for: [[2], [3, [4]]] === [2, [3], 4]", function () {
    const arrA = [[2], 3, 4];
    const arrB = [2, [3], [4]];
    assert.isFalse(eqArrays(arrA, arrB));
  });
});
