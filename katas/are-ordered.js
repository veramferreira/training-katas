/*
  the areOrdered function should take an array of numbers as an input.
  It should return true if all the numbers are in ascending order and false if they are not.
  An empty array should return false.
*/

function areOrdered(arr) {

  for (let i = 0; i < arr.length -1 ; i++) {
    if(arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return arr.length === 0 ? false : true
}


module.exports = areOrdered;
