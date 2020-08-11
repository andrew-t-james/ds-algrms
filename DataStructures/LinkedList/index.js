const Node = require('../Node')

class LinkedList {
  constructor() {
    this.head = null
  }

  insertAtHead(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  insertAtTail(data) {
    const newNode = new Node(data)
    let current = this.getHeadNode
    let previous

    if (current === null) {
      this.head = newNode
    } else {
      while (current) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous.next = newNode
    }
  }

  insert(data) {
    let current = this.getHeadNode
    let previous
    const newNode = new Node(data)

    if (current === null) {
      this.head = newNode
    } else {
      while (current !== null) {
        previous = current
        current = current.next
      }
      previous.next = newNode
    }

    return this
  }

  insertAtPosition(data, pos) {
    let current = this.getHeadNode
    let previous
    let count = 0
    const newNode = new Node(data)
    while (current !== null) {
      if (count === pos) {
        newNode.next = current
        previous.next = newNode
      }
      previous = current
      current = current.next
      count++
    }
  }

  search(data) {
    let current = this.getHeadNode
    let searchResult = false
    while (current !== null) {
      if (current.data === data) {
        searchResult = true
        break
      }
      current = current.next
    }

    return searchResult
  }

  reverse() {
    let current = this.getHeadNode
    let previous = null
    let tmp
    while (current !== null) {
      // save next link
      tmp = current.next
      current.next = previous
      previous = current
      current = tmp
    }
    this.head = previous
  }

  detectLoop() {
    let current = this.getHeadNode
    let hasLoop = false
    const uniqueVals = new Set()
    while (current !== null) {
      if (uniqueVals.has(current.data)) {
        hasLoop = true
        break
      }
      uniqueVals.add(current.data)
      current = current.next
    }
    return hasLoop
  }

  setHead(node) {}

  recursiveSearch(node, data) {
    let foundNode = false
    function rSearchHelper(current) {
      if (current === null) return
      if (current.data === data) {
        foundNode = true
        return
      }
      rSearchHelper(current.next)
    }

    rSearchHelper(node)
    return foundNode
  }

  deleteAtHead() {
    let current = this.getHeadNode
    current = this.head.next
    this.head = current
  }

  deleteAtTail() {
    let current = this.getHeadNode
    let previous
    while (current !== null) {
      if (current.next === null) {
        previous.next = null
      }
      previous = current
      current = current.next
    }
  }

  deleteByValue(value) {
    let current = this.getHeadNode
    let previous
    let deletedNode = false
    if (current === null) {
      return deletedNode
    } else if (current.data === value) {
      this.head = current.next
      deletedNode = true
    } else {
      while (current.data !== value) {
        previous = current
        current = current.next
      }
      if (current === null) {
        return deletedNode
      }
      previous.next = current.next
      deletedNode = true
    }
    return deletedNode
  }

  findMidNode() {}

  removeDuplicatesWithSet() {
    const dupSet = new Set()
    let current = this.getHeadNode
    let previous
    while (current.next !== null) {
      dupSet.add(current.data)
      previous = current
      current = current.next
      if (dupSet.has(current.data)) {
        previous.next = current.next
      }
    }
  }

  getNthNodeFromEnd(node) {}

  get getHeadNode() {
    return this.head
  }

  get isEmpty() {
    return this.head === null
  }
}

module.exports = LinkedList
