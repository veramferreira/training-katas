/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
  console.log(String(num).split(''))
const total = String(num).split('').reduce((acc, c) => {
  if (!Number(c) == NaN){
    return acc + Number(c)
  }
  return acc
}, 0)
console.log(total)
return total;
}
// console.log(sumDigits(10.5))

module.exports = sumDigits;
