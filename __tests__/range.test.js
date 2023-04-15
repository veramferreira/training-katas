const range = require("../katas/range");

// should return an array of numbers from 0 with length specified if it has only a length ✅
// should start at start value instead of 0 if it also has a start value ✅
// the numbers in the array should increase by the specified step if all values present ✅
// it should return an [] ✅

describe("range", () => {
  it("should return an array", () => {
    expect(range()).toEqual([]);
  });
  it("should should return an array of numbers from 0 with length specified if it has only a length", () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });
  it("should start at start value instead of 0 if it also has a start value", () => {
    expect(range(5, 2)).toEqual([2, 3, 4, 5, 6]);
  });
  it("should increase by the specified step if all values present", () => {
    expect(range(5, 2, 2)).toEqual([2, 4, 6, 8, 10]);
  });
});
