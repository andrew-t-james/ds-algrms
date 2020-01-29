class Node {
  constructor(data) {
    this.data = data
    this.previous = null // pointer to previous element
    this.next = null // pointer to next element
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  insertAtHead(data) {
    const tempNode = new Node(data)
    tempNode.next = this.head
    if (this.isEmpty) {
      this.tail = tempNode
      this.head = tempNode
      return this
    }
    this.head.previous = tempNode
    this.head = tempNode
    return this
  }

  deleteAtTail() {
    if (this.isEmpty) return this

    let lastElement = this.tail
    this.tail = lastElement.previous
    if (this.tail === null) {
      this.head = null
      return this
    }

    this.tail.next = null
    return this
  }

  length() {
    let current = this.head
    let count = 0

    if (this.isEmpty) return count

    while (current !== null) {
      current = current.next
      count++
    }
    return count
  }

  get isEmpty() {
    return this.head === null
  }
}

module.exports = DoublyLinkedList
