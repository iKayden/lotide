const findKey = require("../findKey");
const assert = require("chai").assert;

describe("Function findKey", () => {
  it("should return 'b' for {a: { d: 1 }, b: { d: 3 }, c: { d: 0 }} with callback function", () => {
    const actualObject = { a: { d: 1 }, b: { d: 3 }, c: { d: 0 } };
    const callback = (x) => x.d === 3;
    const expected = "b";
    assert.strictEqual(findKey(actualObject, callback), expected);
  });
  it("should return undefined for { 'a': { c: 3 }, 'b': { c: 1 }} with callback function", () => {
    const actualObject = { a: { c: 3 }, b: { c: 1 } };
    const callback = (x) => x.c === 2;
    const expected = undefined;
    assert.strictEqual(findKey(actualObject, callback), expected);
  });
});
