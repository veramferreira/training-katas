const removeDuplicates = require("../katas/remove-duplicates");

//should return a new array with duplicate items removed✅
// should retain the original order ✅🤔
//should return a NEW array 🤔
// should return [] if passed []✅
//should return the same array if no duplicates found✅

/* ig: ['ducks', 'dogs', 'cats', 'dogs', 'horses', 'ducks'] ---> ['ducks', 'dogs'] */

describe("removeDuplicates", () => {
  it("should return an empty array if passed an empty array", () => {
    expect(removeDuplicates([])).toEqual([]);
  });
  it("should return the same array if no duplicates found", () => {
    expect(removeDuplicates(["ducks", "dogs", "cats", "horses"])).toEqual([
      "ducks",
      "dogs",
      "cats",
      "horses",
    ]);
  });
  it("should return a new array with any duplicate items removed", () => {
    expect(
      removeDuplicates(["ducks", "dogs", "cats", "dogs", "horses", "ducks"])
    ).toEqual(["dogs", "ducks"]);
  });
});
