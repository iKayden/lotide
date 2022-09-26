const flatten = require("../flatten");
const assert = require("chai").assert;

describe("Function flatten", () => {
  it("should return => [] for => []", () => {
    assert.deepEqual(flatten([]), []);
  });
  it("should return => [1, 2, 3] for => [1, [2, 3]]", () => {
    assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
  });
  it("should return => [1] for => [[[1]]]", () => {
    assert.deepEqual(flatten([[[1]]]), [1]);
  });
});
