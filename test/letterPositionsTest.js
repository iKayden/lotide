const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("Function letterPositions", () => {
  it("should return => { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for 'hello'", () => {
    const input = "hello";
    const expect = { h: [0], e: [1], l: [2, 3], o: [4] };
    assert.deepEqual(letterPositions(input), expect);
  });
  it("should return => { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for 'Hello'", () => {
    const input = "hello";
    const expect = { h: [0], e: [1], l: [2, 3], o: [4] };
    assert.deepEqual(letterPositions(input), expect);
  });
  it("should return => { w: [ 0 ], o: [ 1 ], r: [ 2 ], l: [ 3 ], d: [ 4 ] } for 'World'", () => {
    const input = "world";
    const expect = { w: [0], o: [1], r: [2], l: [3], d: [4] };
    assert.deepEqual(letterPositions(input), expect);
  });
});
