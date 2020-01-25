const { findFirstUnique, findFirstUniqueDictionary } = require('.')

test('should return the first integer which is unique in the array ', () => {
  expect(findFirstUnique([9, 2, 3, 2, 6, 6])).toBe(9)
})

test('should return the first integer which is unique in the array ', () => {
  expect(findFirstUniqueDictionary([9, 2, 3, 2, 6, 6])).toBe(9)
})
