const checkStudents = require('../katas/check-students')

// should return 'no cohort specified' if passed in an empty string ✅
// should return a boolean 🤔
// should return true if all students are in the same given cohort ✅
// should return false otherwise ✅
// it should return false if string doesn't match the cohorts inside object ✅🤔

describe('checkStudents', () => {
    it('should return "no cohort specified" if passed in an empty string', () => {
        expect(checkStudents([
            {name: 'Ben', cohort: 'October'},
            {name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'}
          ], '')).toBe("no cohort specified")
    });
    it('should return true if all students are in the same given cohort', () => {
        expect(checkStudents([
            {name: 'Ben', cohort: 'April'},
            {name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'}
          ], 'April')).toEqual(true);
    });
    it('should return false if all students are in the same cohort', () => {
        expect(checkStudents([
            {name: 'Ben', cohort: 'October'},
            {name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'}
          ], 'April')).toEqual(false);
    });
});