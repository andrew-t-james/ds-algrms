const Stack = require('../../DataStructures/Stack')
const { sortStack, sortStackWithStack } = require('.')

describe('Sort Stack', () => {
  const stack = new Stack()
  const data = [23, 60, 12, 42, 4, 97, 2]
  const sorted = data.sort((a, b) => a - b)

  beforeEach(() => {
    for (let n of data) {
      stack.push(n)
    }
  })

  afterEach(() => (stack.items = []))

  test('should sort Stack', () => {
    expect(sortStack(stack).items).toEqual(sorted)
  })

  test('should sort Stack using a Stack', () => {
    expect(sortStackWithStack(stack).items).toEqual(sorted)
  })
})
