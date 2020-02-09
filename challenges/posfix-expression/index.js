const Stack = require('../../DataStructures/Stack')

function posFixExpression(exp) {
  const stack = new Stack()

  for (let n of exp) {
    const num = Number(n)
    if (!isNaN(num)) {
      stack.push(num)
    } else {
      const n1 = stack.pop()
      const n2 = stack.pop()
      const operation = {
        '+': n1 + n2,
        '-': n2 - n1,
        '/': n2 / n1,
        '*': n1 * n2
      }

      stack.push(operation[n])
    }
  }

  return stack.pop()
}

module.exports = posFixExpression
