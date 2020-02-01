const Stack = require('.')

describe('Stack', () => {
  test('should return boolean when isEmpty called', () => {
    const list = new Stack()
    expect(list.isEmpty).toBe(true)
  })

  test('should topNode in stack || null if none', () => {
    const list = new Stack()
    expect(list.top).toBe(null)
  })

  test('should return size of stack', () => {
    const list = new Stack()
    expect(list.size).toBe(0)
  })
})
