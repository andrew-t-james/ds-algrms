const BST = require('../../DataStructures/BST')
const { findMinNode, findMinNodeRecursive } = require('.')

test('should find min node in BST', () => {
  const bst = new BST(6)
  bst.insert(20)
  bst.insert(-1)

  expect(findMinNode(bst)).toBe(-1)
})

test('should find min node in BST recursive', () => {
  const bst = new BST(6)
  bst.insert(20)
  bst.insert(-1)

  expect(findMinNodeRecursive(bst)).toBe(-1)
})
