const checkUsernames = require("../katas/check-usernames");

//should return a boolean
//should return false if array is empty
//the value to be checked should be at least 5 characters long
//the value being checked should be no longer than 20 characters long
//the value being checked should only have lowercase characters
//the value being checked should only have letters, numbers or underscores
// should return true if all usernames in the array are valid
// should return false if any of the usernames in the array is invalid

describe("checkUsernames", () => {
  it("should return a boolean", () => {
    expect(typeof checkUsernames()).toBe("boolean");
  });
  it("should return false if array is empty", () => {
    expect(checkUsernames([])).toBe(false);
  });
  it('should return true if value has at least 5 characters', () => {
    expect(checkUsernames(["vera8"])).toBe(true)
    expect(checkUsernames(["vera"])).toBe(false)
  });
});
