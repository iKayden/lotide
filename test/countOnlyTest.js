const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("Function countOnly", () => {
  it("should return { 'cat' : 2 } for ['cat', 'dog', 'cat'] with { 'cat' : true }", () => {
    const testObj = ["cat", "dog", "cat"];
    const value = { cat: true };
    const expect = { cat: 2 };
    assert.deepEqual(countOnly(testObj, value), expect);
  });
  it("should return { } for ['cat', 'dog', 'cat'] with { 'cat' : false }", () => {
    const testObj = ["cat", "dog", "cat"];
    const value = { cat: false };
    const expect = {};
    assert.deepEqual(countOnly(testObj, value), expect);
  });
});
