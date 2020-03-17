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

    expect(BST).toEqual({
      root: {
        val: 6,
        leftChild: {
          val: 4,
          leftChild: {
            val: 2,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 5,
            leftChild: null,
            rightChild: null
          }
        },
        rightChild: {
          val: 9,
          leftChild: {
            val: 8,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 12,
            leftChild: {
              val: 10,
              leftChild: null,
              rightChild: null
            },
            rightChild: {
              val: 14,
              leftChild: null,
              rightChild: null
            }
          }
        }
      }
    })
  })

  test('should insert new Node recursively', () => {
    const BST = new BinarySearchTree(6)
    expect(BST.root.val).toBe(6)
    BST.rInsert(4)
    BST.rInsert(9)
    BST.rInsert(5)
    BST.rInsert(2)
    BST.rInsert(8)
    BST.rInsert(12)
    BST.rInsert(10)
    BST.rInsert(14)

    expect(BST).toEqual({
      root: {
        val: 6,
        leftChild: {
          val: 4,
          leftChild: {
            val: 2,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 5,
            leftChild: null,
            rightChild: null
          }
        },
        rightChild: {
          val: 9,
          leftChild: {
            val: 8,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 12,
            leftChild: {
              val: 10,
              leftChild: null,
              rightChild: null
            },
            rightChild: {
              val: 14,
              leftChild: null,
              rightChild: null
            }
          }
        }
      }
    })
  })
})
