/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {

  const arrOfLetters = str
  .split('')
  .map((letter, index) => {
    if (index % 2 === 0) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  })
  .join('');

  if (arrOfLetters.length === 1) {
    return arrOfLetters.toUpperCase();
  }

  return arrOfLetters;
}

console.log(alternateCase("hello world"))

module.exports = alternateCase;
