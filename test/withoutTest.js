const without = require("../without");
const assert = require("chai").assert;

describe("Function without", () => {
  it("should return ['1','2'] from ['1','2','3'], [1,2,'3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("should return ['hello', 'world'] from ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(
      without(["hello", "world", "lighthouse"], ["lighthouse"]),
      ["hello", "world"]
    );
  });
});
