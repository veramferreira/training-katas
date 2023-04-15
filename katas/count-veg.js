/*
  The function countVeg should take an array of vegetables and a string of the type of vegetable and return the total quantity of that type of vegetable in the array.
  Vegetable types can be root, leaf, legume, bulb or brassica.
  e.g.
  countVeg([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
], 'root') should return 9
*/

function countVeg(arr, type) {
  let total = 0;
  if (type.length === 0) {
    return "please enter your choice of vegetable"
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === type) {
      total += arr[i].quantity;
    }
  }

  return total;
}

module.exports = countVeg;
