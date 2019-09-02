const { maximumSum, maximumSumBruteForce } = require('.')

test('should return the maximum value of n integers summed in an array', () => {
  expect(maximumSumBruteForce([1, 2, 4, 5, 1, 5, 7], 3)).toBe(13)
  expect(maximumSumBruteForce([2, 3, 5, 1, 3, 2], 3)).toBe(10)
  expect(maximumSumBruteForce([10, 1, 33, 3, 12, 2], 2)).toBe(36)
})

test('should return the maximum value of n integers summed in an array more better', () => {
  expect(maximumSumBruteForce([1, 2, 4, 5, 1, 5, 7], 3)).toBe(13)
  expect(maximumSumBruteForce([2, 3, 5, 1, 3, 2], 3)).toBe(10)
  expect(maximumSumBruteForce([10, 1, 33, 3, 12, 2], 2)).toBe(36)
})
