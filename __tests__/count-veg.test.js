const countVeg = require('../katas/count-veg')

// should return total quantity of provided type of vegetable ✅
// if an empty string is provided, return "please enter your choice of vegetable"✅
// it should return a number 🤔

describe('countVeg()', () => {
    it('should return "please enter your choice of vegetable" if an empty string is provided', () => {
        expect(countVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ], '')).toBe('please enter your choice of vegetable')
    });
    it('should return total quantity of provided type of vegetable', () => {
        expect(countVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ], 'root')).toBe(9)
    });
});