const { rotateRight } = require('.')

test('should return the first integer which is unique in the array ', () => {
  expect(rotateRight([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3])
  expect(rotateRight([300, -1, 3, 0], 3)).toEqual([-1, 3, 0, 300])
})
