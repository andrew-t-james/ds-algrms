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

  remove(data) {
    let current = this.head

    if (current.data === data) {
      this.head = current.next
    } else {
      let previous = current
      while (current.next) {
        if (current.data === data) {
          previous.next = current.next
          return
        }
        previous = current
        current = current.next
      }
      if (current.data === data) {
        previous.next = null
      }
    }
  }

  removeAt(pos) {
    let current = this.head
    let counter = 0
    let previous = current
    while (current.next !== null) {
      // console.log('pos:', counter)
      if (pos === counter) {
        previous.next = current.next
        // current.next = newNode
        return
      }
      current = current.next
      counter++
    }
  }

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

  print() {
    if (!this.head) {
      return
    }

    let node = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}

module.exports = LinkedList
