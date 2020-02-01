class Stack {
  constructor() {
    this.items = []
    this.stackTop = null
  }

  get top() {
    if (this.stackTop == null) return null
    return this.stackTop
  }

  get isEmpty() {
    return this.items.length === 0
  }

  get size() {
    return this.items.length
  }
}

module.exports = Stack
