const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

describe("Function findKeyByValue", () => {
  it("should return 'a' for {a: 'cat', b:'dog'} with 'cat'", () => {
    const inputObj = { a: "cat", b: "dog" };
    const actual = "cat";
    const expected = "a";
    assert.strictEqual(findKeyByValue(inputObj, actual), expected);
  });
  it("should return undefined for {a: 'dog', b:'zebra'} with 'monkey'", () => {
    const inputObj = { a: "dog", b: "zebra" };
    const actual = "monkey";
    const expected = undefined;
    assert.strictEqual(findKeyByValue(inputObj, actual), expected);
  });
});
