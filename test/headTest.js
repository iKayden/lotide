const head = require("../head");
const assert = require("chai").assert;

describe("Function head", () => {
  it("should return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  }),
    it("should return '7' for ['7']", () => {
      assert.strictEqual(head(["7"]), "7");
    });
});
