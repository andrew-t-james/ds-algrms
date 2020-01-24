const { findFirstUnique, findFirstUniqueDictionary } = require('.')

test('should return the first integer which is unique in the array ', () => {
  expect(findFirstUnique([9, 2, 3, 2, 6, 6])).toBe(9)
})
