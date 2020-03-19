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
    this.printResult = []
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

  preOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.printResult.push(currentNode.val)
      this.preOrderPrint(currentNode.leftChild)
      this.preOrderPrint(currentNode.rightChild)
    }
  }

  inOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.inOrderPrint(currentNode.leftChild)
      this.printResult.push(currentNode.val)
      this.inOrderPrint(currentNode.rightChild)
    }
  }

  postOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.postOrderPrint(currentNode.leftChild)
      this.postOrderPrint(currentNode.rightChild)
      this.printResult.push(currentNode.val)
    }
  }

  search(value) {
    let currentNode = this.root
    while (currentNode && currentNode.val !== value) {
      if (value < currentNode.val) {
        currentNode = currentNode.leftChild
      } else {
        currentNode = currentNode.rightChild
      }
    }
    return currentNode
  }

  recursiveSearch(currentNode, value) {
    if (currentNode !== null) {
      if (currentNode.val === value) {
        return currentNode
      } else if (value < currentNode.val) {
        this.recursiveSearch(currentNode.leftChild, value)
      } else {
        this.recursiveSearch(currentNode.rightChild, value)
      }
    } else {
      return null
    }
    return currentNode
  }

  rSearch(currentNode, value) {
    return this.recursiveSearch(currentNode, value)
  }

  deleteNode(currentNode, value) {
    let parentNode

    while (currentNode && currentNode.val !== value) {
      parentNode = currentNode
      if (value < currentNode.val) {
        currentNode = currentNode.leftChild
      } else {
        currentNode = currentNode.rightChild
      }
    }

    if (currentNode.leftChild === null && currentNode.rightChild === null) {
      if (currentNode.val === this.root.val) {
        this.root = null
      } else if (currentNode.val < parentNode.val) {
        parentNode.leftChild = null
      } else {
        parentNode.rightChild = null
      }
    }

    return this
  }
}

module.exports = BinarySearchTree
