const assert = require("chai").assert;
const tail = require("../tail");

describe("Function tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("should return [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
});
