const BinarySearchTree = require('.')

describe('BinarySearchTree', () => {
  test('should construct with value at root', () => {
    const BST = new BinarySearchTree(5)
    expect(BST.root.val).toBe(5)
  })

  test('should insert new Node iteratively', () => {
    const BST = new BinarySearchTree(6)
    expect(BST.root.val).toBe(6)
    BST.insert(4)
    BST.insert(9)
    BST.insert(5)
    BST.insert(2)
    BST.insert(8)
    BST.insert(12)
    BST.insert(10)
    BST.insert(14)

    expect(BST).toMatchSnapshot()
  })

  test('should insert new Node recursively', () => {
    const BST = new BinarySearchTree(6)
    expect(BST.root.val).toBe(6)
    const nodes = [4, 9, 5, 2, 8, 12, 10, 14]

    for (let node of nodes) {
      BST.rInsert(node)
    }

    expect(BST).toMatchSnapshot()
  })
})
