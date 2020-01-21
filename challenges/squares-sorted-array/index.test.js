const sortedSquares = require('.')

test('should return an array of the squares of each number', () => {
  expect(sortedSquares(sortedSquares([-4, -1, 0, 3, 10]))).toEqual([
    0,
    1,
    9,
    16,
    100
  ])
})
