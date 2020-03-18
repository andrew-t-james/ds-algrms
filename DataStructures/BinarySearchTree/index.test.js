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

  test('should preOrderPrint Tree', () => {
    const BST = new BinarySearchTree(6)
    expect(BST.root.val).toBe(6)
    const nodes = [4, 9, 5, 2, 8, 12, 10, 14]

    for (let node of nodes) {
      BST.rInsert(node)
    }

    BST.preOrderPrint(BST.root)
    expect(BST.printResult).toEqual([6, 4, 2, 5, 9, 8, 12, 10, 14])
  })

  test('should inOrderPrint Tree', () => {
    const BST = new BinarySearchTree(6)
    expect(BST.root.val).toBe(6)
    const nodes = [4, 9, 5, 2, 8, 12]

    for (let node of nodes) {
      BST.insert(node)
    }

    BST.inOrderPrint(BST.root)
    expect(BST.printResult).toEqual([2, 4, 5, 6, 8, 9, 12])
  })

  test('should postOrderPrint Tree', () => {
    const BST = new BinarySearchTree(6)
    expect(BST.root.val).toBe(6)
    const nodes = [4, 9, 5, 2, 8, 12]

    for (let node of nodes) {
      BST.insert(node)
    }

    BST.postOrderPrint(BST.root)
    expect(BST.printResult).toEqual([2, 5, 4, 8, 12, 9, 6])
  })

  test('should search for node and return node when values match', () => {
    const BST = new BinarySearchTree(6)
    expect(BST.root.val).toBe(6)
    const nodes = [4, 9, 5, 2, 8, 12]

    for (let node of nodes) {
      BST.insert(node)
    }

    expect(BST.search(13)).toEqual(null)
    expect(BST.search(12)).toEqual({
      leftChild: null,
      rightChild: null,
      val: 12
    })
  })

  test('should search for node recursively and return node when values match', () => {
    const BST = new BinarySearchTree(6)
    expect(BST.root.val).toBe(6)
    const nodes = [4, 9, 5, 2, 8, 12]

    for (let node of nodes) {
      BST.insert(node)
    }

    expect(BST.rSearch(5)).toEqual(5)
  })
})
