const alternateCase = require("../katas/alternate-case")

// take one string and return a string✅
// alternate every other letter to capital case, staring with a capital letter✅
// if passed an empty string should return "" ✅
// if passed a string of one letter should return the reverse case ✅
// if more than one word is passed the consecutive word should follow the same pattern as the last word's letter ❌


describe('alternateCase()', () => {
    it('should return an empty string if nothing has been passed', () => {
        expect(alternateCase("")).toBe("");
    });
    it('should return a capital letter if only passed in one character', () => {
        expect(alternateCase("a")).toBe("A");
        expect(alternateCase("A")).toBe("A");
    });
    it('should alternate every other letter to capital case when passed a string with more than one letter', () => {
        expect(alternateCase("hello")).toBe("HeLlO");
    });
    it('should return a string', () => {
        expect(alternateCase("7")).toBe("7");
    });
});