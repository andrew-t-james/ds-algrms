const { findSumBruteForce, findSum } = require('.')

test('should return two numbers that add up to n brute force other wise return false', () => {
  expect(findSumBruteForce([1, 21, 3, 14, 5, 60, 7, 6], 81)).toEqual([21, 60])
  expect(findSumBruteForce([1, 21, 3, 14, 5, 60, 7, 6], 200)).toBe(false)
})

test('should return two numbers that add up to n other wise return false', () => {
  expect(findSum([1, 21, 3, 14, 5, 60, 7, 6], 81)).toEqual([21, 60])
  expect(findSum([1, 21, 3, 14, 5, 60, 7, 6], 200)).toEqual(false)
})
