const map = require("../map");
const assert = require("chai").assert;

describe("Function map", () => {
  it("should return  [ 'l', 'l', 'b' ] for ['lighthouse', 'labs', 'bootcamp'] with callback: w => w[0]", () => {
    const actual = ["lighthouse", "labs", "bootcamp"];
    const expected = ["l", "l", "b"];
    const callback = (word) => word[0];
    assert.deepEqual(map(actual, callback), expected);
  });

  it("should return [10, 4, 8] for ['lighthouse', 'labs', 'bootcamp'] with callback: w => w.length", () => {
    const actual = ["lighthouse", "labs", "bootcamp"];
    const expected = [10, 4, 8];
    const callback = (word) => word.length;
    assert.deepEqual(map(actual, callback), expected);
  });
});
