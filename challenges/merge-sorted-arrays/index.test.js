const { merge, mergeSortedLists, mergeSortedListsAnotherWay } = require('.')

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

test('should sort merge and sort two lists', () => {
  const arr1 = [1, 3, 6, 8, 8, 9]
  const arr2 = [1, 2, 2, 3, 5, 6]
  expect(mergeSortedLists(arr1, arr2)).toEqual([
    1,
    1,
    2,
    2,
    3,
    3,
    5,
    6,
    6,
    8,
    8,
    9
  ])
})

test('should sort merge and sort two lists different approach', () => {
  const arr1 = [1, 3, 6, 8, 8, 9, 10, 22, 23]
  const arr2 = [1, 2, 2, 3, 5, 6, 10, 11, 12, 24]
  expect(mergeSortedListsAnotherWay(arr1, arr2)).toEqual([
    1,
    1,
    2,
    2,
    3,
    3,
    5,
    6,
    6,
    8,
    8,
    9,
    10,
    10,
    11,
    12,
    22,
    23,
    24
  ])
})
