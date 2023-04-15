const areOrdered = require('../katas/are-ordered')

// it should return false if array is empty ✅
// it should return true if all numbers are in ascending order and false otherwise
// it should return true if only one number is passed ✅


describe('areOrdered()', () => {
    it('should return false if array is empty', () => {
        expect(areOrdered([])).toBe(false);
    });
    it('should return true if only one number is present in the array', () => {
        expect(areOrdered([7])).toBe(true)
    });
    it('should return true if all numbers are in ascending order and false otherwise', () => {
        expect(areOrdered([2, 12, 1, 25, 3])).toBe(false);
        expect(areOrdered([2, 8, 12, 20])).toBe(true);
    });
});