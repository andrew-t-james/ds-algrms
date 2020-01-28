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
      let curr = this.head
      while (curr.next !== null) {
        curr = curr.next
      }
      curr.next = node
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

  get getHeadNode() {
    return this.head
  }

  get isEmpty() {
    return this.head === null
  }
}

module.exports = LinkedList
