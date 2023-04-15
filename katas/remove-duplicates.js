/*
  The function removeDuplicates should take an array and return a new array with any duplicate items removed. The original order should be maintained.
*/

function removeDuplicates(farm) {
  const filteredAnimal = [];

  farm.filter((animal, index) => {
    if (farm.indexOf(animal) !== index) {
      return filteredAnimal.push(animal);
    }
  });
  return filteredAnimal.length > 0 ? filteredAnimal : farm;
}

module.exports = removeDuplicates;
