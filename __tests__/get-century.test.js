const getCentury = require("../katas/get-century");

describe("getCentury", () => {
  //should return a string
  // should take a year and return the century
  // should return the right suffix - if result ends in 1, should use "st"; if result ends in 2 should use "nd"; if result ends in 3, should return "rd";
  // should return the right suffix - if return is 11, 12, or 13, should return "th"
  // for all other cases, should return "th"
  // should work up to, including 9,999
  it("should take in a number and return a string", () => {
    expect(typeof getCentury(1998)).toBe("string");
  });
  it("should take in a year and return the century", () => {
    expect(getCentury(1999)).toBe("20th");
  });
  it("should return the right suffix when result ends in 1, 2 or 3, except for 11, 12 and 13;", () => {
    expect(getCentury(2004)).toBe("21st");
    expect(getCentury(2104)).toBe("22nd");
    expect(getCentury(2204)).toBe("23rd");
  });
  it('should return "th" for all other cases', () => {
    expect(getCentury(1999)).toBe("20th");
    expect(getCentury(1875)).toBe("19th");
  });
  it('should return the right suffix - if return is 11, 12, or 13, should return "th"', () => {
    expect(getCentury(1101)).toBe("12th");
    expect(getCentury(1240)).toBe("13th");
  });
});
