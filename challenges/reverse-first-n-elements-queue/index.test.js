const Queue = require('../../DataStructures/Queue')
const { reverseK } = require('.')

describe('Reverse first n elements of queue', () => {
  test('should reverse first n elements of a queue', () => {
    const queue = new Queue()
    expect(reverseK(queue, 5)).toBe('Empty queue')
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let n of list) {
      queue.enqueue(n)
    }
    expect(reverseK(queue, 5)).toEqual([5, 4, 3, 2, 1, 6, 7, 8, 9, 10])
  })
})
