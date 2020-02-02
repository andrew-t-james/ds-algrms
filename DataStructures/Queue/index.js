class Queue {
  constructor() {
    this.items = []
  }

  enqueue(elem) {
    this.items.push(elem)
  }

  dequeue() {
    if (this.isEmpty) {
      return null
    } else {
      this.items.shift()
    }
  }

  get isEmpty() {
    return this.items.length === 0
  }

  get front() {
    if (this.size > 0) {
      return this.items[0]
    } else {
      return null
    }
  }

  get size() {
    return this.items.length
  }
}

module.exports = Queue
