const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("Function countLetters", () => {
  it("should return an empty object {} for empty string ", () => {
    const actual = "";
    const expected = {};
    assert.deepEqual(countLetters(actual), expected);
  });
  it("should return { p: 2, o: 1 } for 'pop'", () => {
    const actual = "pop";
    const expected = { p: 2, o: 1 };
    assert.deepEqual(countLetters(actual), expected);
  });
});
