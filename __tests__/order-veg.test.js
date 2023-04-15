const orderVeg = require('../katas/order-veg')

// it should return an [] if passed [] ✅
// it should return a new array 🤔
// it should return a sorted array (ascending order according to quantity)✅
// it ignores objects that don't have a quantity key/value ✅


describe('orderVeg', () => {
    it('should return an empty array if passed an empty array', () => {
        expect(orderVeg([])).toEqual([]);
    });
    it('should return a new sorted array in ascending order according to quantity', () => {
        expect(orderVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ])).toEqual([
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ]);
    });
    it('should ignore objects that don\'t have a quantity key/value', () => {
        expect(orderVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb'},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ])).toEqual([
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ]);
    });
});