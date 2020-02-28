const Stack = require('../../DataStructures/Stack')

function sortStack(stack) {
  stack.items = stack.items.sort((a, b) => a - b)
  return stack
}

function sortStackWithStack(stack) {
  const tempStack = new Stack()
  let value

  while (stack.isEmpty === false) {
    value = stack.pop()

    if (value >= stack.getTop) {
      tempStack.push(value)
    } else {
      while (tempStack.isEmpty === false) {
        stack.push(tempStack.pop())
      }
      tempStack.push(value)
    }
  }

  while (tempStack.isEmpty === false) {
    stack.push(tempStack.pop())
  }

  return stack
}

function sortStackRecursive(stack) {
  return stack
}

module.exports = { sortStack, sortStackWithStack, sortStackRecursive }
