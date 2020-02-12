const Stack = require('../../DataStructures/Stack')

function nextGreaterElementBruteForce(arr) {
  const results = []
  let found

  for (let i = 0; i < arr.length; i++) {
    found = false
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] > arr[i]) {
        found = true
        results.push(arr[k])
        break
      }
    }
    if (!found) {
      results.push(-1)
    }
  }

  return results
}

function nextGreaterElementUsingStack(arr) {
  const stack = new Stack()
  let results = []
  let top
  let next

  for (let i = arr.length - 1; i >= 0; i--) {
    next = arr[i]

    if (!stack.isEmpty) {
      top = stack.getTop

      while (top < next) {
        if (stack.isEmpty) break

        stack.pop()
        top = stack.getTop
      }
    }

    if (!stack.isEmpty) {
      results[i] = stack.getTop
    } else {
      results[i] = -1
    }

    stack.push(next)
  }

  return results
}

module.exports = {
  nextGreaterElementBruteForce,
  nextGreaterElementUsingStack
}
