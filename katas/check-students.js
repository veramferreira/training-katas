/*
  The function checkStudents should take a list of students and a cohort and return true if all students are in the given cohort and false if any students are not in the given cohort.
  E.g. checkStudents([
    {name: 'Ben', cohort: 'October'},
    {name: 'Amanda', cohort: 'April'},
    {name: 'Matt', cohort: 'April'}
  ], 'April')
  --> false
*/

function checkStudents(students, cohort) {
  if(cohort.length === 0) {
    return "no cohort specified"
  }
  return students.every(student => student.cohort === cohort)
}

console.log(checkStudents([
  {name: 'Ben', cohort: 'April'},
  {name: 'Amanda', cohort: 'April'},
  {name: 'Matt', cohort: 'April'}
], 'January'))

module.exports = checkStudents;
