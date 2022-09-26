const takeUntil = require("../takeUntil");
const assert = require("chai").assert;

describe("Function takeUntil", () => {
  it("should return  [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5] with callback: x => x < 0", () => {
    const actual = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const expected = [1, 2, 5, 7, 2];
    const callback = (x) => x < 0;
    assert.deepEqual(takeUntil(actual, callback), expected);
  });
  it("should return  [ 'Hello' ] for ['Hello', '!','How','are','you','?'] with callback x => x === '!'", () => {
    const actual = ["Hello", "!", "How", "are", "you", "?"];
    const expected = ["Hello"];
    const callback = (x) => x === "!";
    assert.deepEqual(takeUntil(actual, callback), expected);
  });
});
