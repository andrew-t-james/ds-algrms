const merge = require('.')

test('should sort array nums1 in place', () => {
  let nums1 = [1, 2, 3, 0, 0, 0]
  merge(nums1, 3, [2, 5, 6], 3)
  const expected = [1, 2, 2, 3, 5, 6]
  expect(nums1).toEqual(expected)
})

test('shold sort array in place', () => {
  let nums1 = [1, 2, 3, 6, 4, 2]
  merge(nums1, 5, [2, 5, 6], 3)
  const expected = [1, 2, 2, 3, 4, 5, 6, 6]
  expect(nums1).toEqual(expected)
})
