const Node = require('../Node')

class LinkedList {
  constructor() {
    this.head = new Node()
  }

  append(data) {
    let current = this.head
    let newNode = new Node(data)
    while (current.next !== null) {
      current = current.next
    }
    current.next = newNode
  }

  appendAt() {}

  remove() {}

  removeAt() {}

  reverse() {}

  swap() {}

  length() {
    let counter = 0
    let current = this.head
    while (current.next !== null) {
      current = current.next
      counter++
    }
    return counter
  }

  traverse() {}

  display() {}

  search() {}
}

module.exports = LinkedList
