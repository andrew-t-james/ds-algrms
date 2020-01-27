const { reArrange } = require('.')

test('should return the first integer which is unique in the array ', () => {
  expect(reArrange([10, -1, 20, 4, 5, -9, -6])).toEqual([
    -1,
    -9,
    -6,
    10,
    20,
    4,
    5
  ])
})
