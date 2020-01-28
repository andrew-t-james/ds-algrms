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
      let currentent = this.getHeadNode
      let previous
      let count = 0
      while (count < pos) {
        previous = currentent
        currentent = currentent.next
        count++
      }

      node.next = currentent
      previous.next = node
    }

    return this
  }

  search(data) {
    if (this.isEmpty) return false
    let current = this.getHeadNode
    while (current.next !== null) {
      current = current.next
      if (current.data === data) return true
    }

    return false
  }

  get getHeadNode() {
    return this.head
  }

  get isEmpty() {
    return this.head === null
  }
}

module.exports = LinkedList
