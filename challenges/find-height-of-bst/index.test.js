const BST = require('../../DataStructures/BST')
const { findHeight } = require('.')

test.only('should find min node in BST', () => {
  const bst = new BST(6)
  bst.insert(4)
  bst.insert(9)
  bst.insert(5)
  bst.insert(2)
  bst.insert(8)
  bst.insert(12)

  expect(findHeight(bst)).toBe(3)
})
