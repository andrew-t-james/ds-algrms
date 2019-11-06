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
    let count = 1
    if (!current) return 0
    while (current.next !== null) {
      current = current.next
      count++
    }
    return count
  }

  empty() {
    return this.length() < 1
  }

  display() {
    let current = this.head
    let elements = []
    if (!current) return
    while (current !== null) {
      elements.push(current.data)
      current = current.next
    }
    return elements.join(' ')
  }

  traverse(fn) {
    let current = this.head
    if (!current) return
    while (current) {
      fn(current)
      current = current.next
    }
  }

  search(data) {
    let current = this.head
    let counter = 0
    if (!current) return

    while (current) {
      if (current.data === data) {
        return counter
      }
      current = current.next
      counter++
    }
    return false
  }
}

module.exports = LinkedList
