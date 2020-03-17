class Node {
  constructor(value) {
    this.val = value
    this.leftChild = null
    this.rightChild = null
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value)
  }

  insert(value) {
    let current = this.root
    let parent
    while (current) {
      parent = current
      if (value < current.val) {
        current = current.leftChild
      } else {
        current = current.rightChild
      }
    }
    if (value < parent.val) {
      parent.leftChild = new Node(value)
    } else {
      parent.rightChild = new Node(value)
    }
  }

  insertRecursive(currentNode, value) {
    if (currentNode === null) {
      currentNode = new Node(value)
    } else if (value < currentNode.val) {
      currentNode.leftChild = this.insertRecursive(currentNode.leftChild, value)
    } else {
      currentNode.rightChild = this.insertRecursive(
        currentNode.rightChild,
        value
      )
    }
    return currentNode
  }

  rInsert(newValue) {
    this.insertRecursive(this.root, newValue)
  }
}

module.exports = BinarySearchTree
