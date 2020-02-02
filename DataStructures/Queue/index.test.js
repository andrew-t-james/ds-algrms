const Queue = require('.')

describe('Queue', () => {
  function addNodes(queue, nodes) {
    for (let node of nodes) {
      queue.enqueue(node)
    }
  }

  test('should return boolean when isEmpty called', () => {
    const queue = new Queue()
    expect(queue.isEmpty).toBe(true)
    queue.enqueue(2)
    expect(queue.isEmpty).toBe(false)
  })

  test('should return first item in queue', () => {
    const queue = new Queue()
    expect(queue.isEmpty).toBe(true)
    expect(queue.front).toBe(null)
    queue.enqueue(2)
    expect(queue.front).toBe(2)
  })

  test('should return size of the queue', () => {
    const queue = new Queue()
    queue.enqueue(2)
    expect(queue.size).toBe(1)
  })

  test('should enqueue new items in Queue', () => {
    const queue = new Queue()
    const items = [1, 2, 3, 4, 5, 6]

    addNodes(queue, items)

    expect(queue.size).toBe(6)
    expect(queue.items).toEqual(items)
  })

  test('should dequeue items in Queue', () => {
    const queue = new Queue()
    const items = [1, 2, 3, 4, 5, 6]

    addNodes(queue, items)

    expect(queue.size).toBe(6)
    expect(queue.items).toEqual(items)
    queue.dequeue()
    expect(queue.size).toBe(5)
    expect(queue.items).toEqual(items.slice(1))
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    expect(queue.size).toEqual(0)
    expect(queue.front).toEqual(null)
  })
})
