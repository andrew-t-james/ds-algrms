const MinStack = require('.')

describe('MinStack', () => {
  test('should return the min value from a stack in O(1)', () => {
    const minStack = new MinStack()
    const values = [5, 2, 4, 1, 3, 9]
    for (let n of values) {
      minStack.push(n)
    }
    expect(minStack.min()).toBe(1)
  })
})
