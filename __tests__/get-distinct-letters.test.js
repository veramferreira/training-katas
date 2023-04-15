const getDistinctLetters = require("../katas/get-distinct-letters");

// should return one string in alphabetical order✅
// if only one string is passed it should return the other string sorted (with no duplicated letters)
// it should only return unique letters to both parameters
// should return an empty string if no strings are passed in ✅

describe("getDistinctLetters", () => {
  it("should return an empty string if passed an empty string", () => {
    expect(getDistinctLetters("", "")).toBe("");
  });
  it("should return a sorted string when one string is empty and the other is not", () => {
    expect(getDistinctLetters("", "hello")).toBe("ehllo");
  });
  it("should return a function", () => {
    expect(typeof getDistinctLetters()).toBe("function");
  });
});


//both strings share all letters and sorted
// both strings share no letters & sorted
// the strings share some letters and sorted
// empty string