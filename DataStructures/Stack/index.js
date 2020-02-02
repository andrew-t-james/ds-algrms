class Stack {
  constructor() {
    this.items = []
    this.top = null
  }

  push(elem) {
    this.items.push(elem)
    this.top = elem
  }

  pop() {
    if (this.items.length !== 0) {
      if (this.items.length === 1) {
        this.top = null
        return this.items.pop()
      } else {
        this.top = this.items[this.items.length - 2]
        return this.items.pop()
      }
    } else {
      return null
    }
  }

  get getTop() {
    if (this.top == null) return null
    return this.top
  }

  get isEmpty() {
    return this.items.length === 0
  }

  get size() {
    return this.items.length
  }
}

module.exports = Stack
