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
    let current = this.getHeadNode
    let previous

    while (current.next !== null) {
      previous = current
      current = current.next
    }

    previous.next = null

    return this
  }

  get getHeadNode() {
    return this.head
  }

  get isEmpty() {
    return this.head === null
  }
}

module.exports = LinkedList
