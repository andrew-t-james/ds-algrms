const Node = require('../Node')

class LinkedList {
  constructor() {
    this.head = null
  }

  insertAtHead(data) {
    const tempNode = new Node(data)
    tempNode.next = this.head
    this.head = tempNode
    return this
  }

  insertAtTail(data) {
    const node = new Node(data)
    if (this.isEmpty) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }

    return this
  }

  insertAtPosition(data, pos) {
    const node = new Node(data)
    if (this.isEmpty) {
      this.head = node
    } else {
      let current = this.getHeadNode
      let previous
      let count = 0
      while (count < pos) {
        previous = current
        current = current.next
        count++
      }

      node.next = current
      previous.next = node
    }

    return this
  }

  search(data) {
    if (this.isEmpty) return false
    let current = this.getHeadNode
    if (current.data === data) return true
    while (current.next !== null) {
      current = current.next
      if (current.data === data) return true
    }

    return false
  }

  reverse() {
    if (this.isEmpty) return this
    let current = this.getHeadNode
    let previous = null
    let next = null

    while (current !== null) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }

    this.setHead(previous)
    return this
  }

  detectLoop() {
    let slow = this.getHeadNode
    let fast = this.getHeadNode

    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) return true
    }

    return false
  }

  setHead(node) {
    this.head = node
  }

  recursiveSearch(node, data) {
    // base case:
    if (node === null) return false

    if (node.data === data) return true

    return this.recursiveSearch(node.next, data)
  }

  deleteAtHead() {
    let headNode = this.getHeadNode

    this.head = headNode.next

    return this
  }

  deleteAtTail() {
    if (this.isEmpty) return false

    let current = this.getHeadNode
    let previous

    if (current.next === null) {
      this.deleteAtHead()
      return this
    }

    while (current.next !== null) {
      previous = current
      current = current.next
    }

    previous.next = null

    return this
  }

  deleteByValue(value) {
    if (this.isEmpty) return false

    let current = this.getHeadNode
    let deleted = false

    if (current.data === value) {
      this.deleteAtHead()
      deleted = true
    }

    while (current.next !== null) {
      if (current.next.data === value) {
        current.next = current.next.next
        return true
      }
      current = current.next
    }

    return deleted
  }

  findMidNodeBruteForce() {
    let current = this.getHeadNode
    let count = 0
    let midNode = null

    if (this.isEmpty) return 'Empty LinkedList'

    while (current !== null) {
      current = current.next
      count++
    }

    current = this.getHeadNode

    let mid = Math.round(count / 2)

    let currentCount = 0

    while (current !== null) {
      currentCount++

      if (currentCount === mid) {
        midNode = current.data
      }

      current = current.next
    }

    return midNode
  }

  findMidNode() {
    let slow = this.getHeadNode
    let fast = this.getHeadNode

    if (this.isEmpty) return 'Empty LinkedList'

    if (slow.next === null) {
      return slow.data
    }

    while (
      slow.next !== null &&
      fast.next !== null &&
      fast.next.next !== null
    ) {
      slow = slow.next
      fast = fast.next.next
    }

    return slow.data
  }

  get getHeadNode() {
    return this.head
  }

  get isEmpty() {
    return this.head === null
  }
}

module.exports = LinkedList
