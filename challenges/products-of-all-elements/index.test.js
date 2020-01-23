const findProduct = require('.')

test('should return product of all the numbers in the array except the number stored at that index', () => {
  expect(findProduct([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
})
