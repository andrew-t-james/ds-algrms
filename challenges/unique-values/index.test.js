const { countUniqueValues, countUniqueValuesUsingPointers } = require('.')

test('should return the number of unique values in a given array', () => {
  expect(countUniqueValues([1, 1, 1, 1, 2])).toBe(2)
  expect(countUniqueValues([1, 1, 1, 2, 2, 13, 18, 20])).toBe(5)
  expect(countUniqueValues([])).toBe(0)
})

test('should return the number of unique values in a given array', () => {
  expect(countUniqueValuesUsingPointers([1, 1, 1, 1, 2])).toBe(2)
  expect(countUniqueValuesUsingPointers([1, 1, 1, 2, 2, 13, 18, 20])).toBe(5)
  expect(countUniqueValuesUsingPointers([])).toBe(0)
})
