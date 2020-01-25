const { findSecondMaximum, findSecondMaximumSorted } = require('.')

test('should return the first integer which is unique in the array ', () => {
  expect(findSecondMaximum([9, 2, 3, 6])).toBe(6)
})

test('should return the first integer which is unique in the array ', () => {
  expect(findSecondMaximumSorted([9, 2, 3, 2, 6, 6])).toBe(6)
})
