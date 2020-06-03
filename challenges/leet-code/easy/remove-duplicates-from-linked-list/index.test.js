const { deleteDuplicates, LinkedList } = require('.')

test('should return unchanged list when no values repeated', () => {
  const list = new LinkedList()
  const nodeList = [1, 2, 3]

  for (let node of nodeList) {
    list.insert(node)
  }

  expect(deleteDuplicates(list.head)).toMatchSnapshot()
})

test('should return updated list when values repeated', () => {
  const list = new LinkedList()
  const nodeList = [1, 2, 2, 3]

  for (let node of nodeList) {
    list.insert(node)
  }

  expect(deleteDuplicates(list.head)).toMatchSnapshot()
})

test('should return handle N repeated values', () => {
  const list = new LinkedList()
  const nodeList = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]

  for (let node of nodeList) {
    list.insert(node)
  }

  expect(deleteDuplicates(list.head)).toMatchSnapshot()
})

test('should handle case when head is null', () => {
  const list = new LinkedList()

  expect(deleteDuplicates(list.head)).toBe(null)
})
