const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("Function eqObjects", function () {
  it("Should return true for Base: {a: 1, b: 2} === {a: 1, b: 2 }", function () {
    const actual = { a: 1, b: 2 };
    const expected = { a: 1, b: 2 };
    assert.isTrue(eqObjects(actual, expected));
  });
  it("Should return false for Length: {a: 1, b: 2} === {a: 1, b: 2, c: 3}", function () {
    const actual = { a: 1, b: 2 };
    const expected = { a: 1, b: 2, c: 3 };
    assert.isFalse(eqObjects(actual, expected));
  });
  it('Should return false for Type: {a: 1, b: 2} === {a: 1, b: "2"}', function () {
    const actual = { a: 1, b: 2 };
    const expected = { a: 1, b: "2" };
    assert.isFalse(eqObjects(actual, expected));
  });
  it("Case 1.Should return false for this nested array: {a: 1, b: 3} === {a: 1, b: {c: 5, d: 1}}", function () {
    const actual = { a: 1, b: 3 };
    const expected = { a: 1, b: { c: 5, d: 1 } };
    assert.isFalse(eqObjects(actual, expected));
  });
  it("Case 2.Should return false for this nested array:: {a: {c: 1}, b: {d: 3, e: 4}} === {a: {c: 2, d: 1}, b: {e: 3, f: 4}}", function () {
    const actual = { a: { c: 1 }, b: { d: 3, e: 4 } };
    const expected = { a: { c: 1, d: 2 }, b: { e: 3, f: 4 } };
    assert.isFalse(eqObjects(actual, expected));
  });
});
