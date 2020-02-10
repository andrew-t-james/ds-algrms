const Stack = require('.')

describe('Stack', () => {
  function addNodes(stack, nodes) {
    for (let node of nodes) {
      stack.push(node)
    }
  }

  test('should return boolean when isEmpty called', () => {
    const list = new Stack()
    expect(list.isEmpty).toBe(true)
    list.push(2)
    expect(list.isEmpty).toBe(false)
  })

  test('should topNode in stack || null if none', () => {
    const list = new Stack()
    expect(list.top).toBe(null)
    list.push(2)
    expect(list.top).toBe(2)
  })

  test('should return null when stack empty', () => {
    const list = new Stack()
    expect(list.getTop).toBe(null)
    list.push(2)
    expect(list.getTop).toBe(2)
    expect(list.pop()).toBe(2)
    expect(list.pop()).toBe(null)
  })

  test('should return size of stack', () => {
    const list = new Stack()
    expect(list.size).toBe(0)
    list.push(2)
    expect(list.size).toBe(1)
  })

  test('should pop node off Stack and return node', () => {
    const list = new Stack()

    const nodes = [1, 2, 3, 4, 5]
    addNodes(list, nodes)

    expect(list.top).toBe(5)
    expect(list.pop()).toBe(5)
    expect(list.top).toBe(4)
  })
})
