const {
  nextGreaterElementBruteForce,
  nextGreaterElementUsingStack
} = require('.')

describe('nextGreaterElement', () => {
  test('should return array of next greater elements brute force', () => {
    // O(n2)
    expect(nextGreaterElementBruteForce([4, 6, 3, 2, 8, 1])).toEqual([
      6,
      8,
      8,
      8,
      -1,
      -1
    ])
  })

  test('should return array of next greater elements stack', () => {
    // O(n)
    expect(nextGreaterElementUsingStack([4, 6, 3, 2, 8, 1])).toEqual([
      6,
      8,
      8,
      8,
      -1,
      -1
    ])
  })
})
