const Node = require('../Node')

class LinkedList {
  constructor() {
    this.head = null
  }

  append(data) {
    let current = this.head
    let newNode = new Node(data)

    if (!current) {
      this.head = newNode
      return
    }

    while (current.next !== null) {
      current = current.next
    }
    current.next = newNode
  }

  appendAt(pos, data) {
    let current = this.head
    let counter = 1
    const newNode = new Node(data)
    if (!current) {
      this.head = newNode
      return
    }
    while (current.next !== null) {
      if (pos === counter) {
        newNode.next = current.next
        current.next = newNode
      }
      current = current.next
      counter++
    }
  }

  remove() {}

  removeAt() {}

  reverse() {}

  swap() {}

  length() {
    let current = this.head

    if (!current) return 0

    let counter = 1

    while (current.next !== null) {
      current = current.next
      counter++
    }
    return counter
  }

  empty() {
    return this.length() < 1
  }

  display() {
    let current = this.head
    let elements = []
    while (current !== null) {
      elements.push(current.data)
      current = current.next
    }
    return elements.join(' ')
  }

  traverse(fn) {
    let current = this.head
    while (current.next !== null) {
      fn(current)
      current = current.next
    }
  }

  search() {}
}

module.exports = LinkedList
