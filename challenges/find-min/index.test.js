const { findMinWithSort, findMinWithOutSort } = require('.')

test('should find the smallest number in the given array using sort.', () => {
  expect(findMinWithSort([9, 2, 3, 6])).toBe(2)
})

test('should find the smallest number in the given array without using sort.', () => {
  expect(findMinWithOutSort([9, 2, 3, 6])).toBe(2)
})
