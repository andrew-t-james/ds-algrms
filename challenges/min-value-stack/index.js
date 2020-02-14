/**
 * implement the minStack class which will have a min() function.
 * Whenever min() is called, the minimum value of the stack
 * is returned in O(1) time. The element is not popped
 * from the stack, its value is simply returned.
 */
const Stack = require('../../DataStructures/Stack')

class MinStack {
  constructor() {
    // We will use two stacks
    // 1.mainStack: to hold original values
    // 2.minStack to hold minimum values.
    // Top of minStack will always be the minimum value from mainStack
    this.mainStack = new Stack()
    this.minStack = new Stack()
  }

  pop() {
    //1. Pop element from minStack to make it sync with mainStack,
    //2. Pop element from mainStack and return that value
    this.minStack.pop()
    return this.mainStack.pop()
  }

  push(value) {
    // 1. Push value in mainStack and check that value with the top value of minStack
    this.mainStack.push(value)

    // 2. If the pushed value is greater than the value of top, then push top in minStack
    if (value > this.minStack.getTop && this.minStack.isEmpty === false) {
      this.minStack.push(this.minStack.getTop)
    } else {
      this.minStack.push(value)
    }
  }
  // Returns the minimum value from newStack in O(1) Time
  min() {
    return this.minStack.getTop
  }
}

module.exports = MinStack
