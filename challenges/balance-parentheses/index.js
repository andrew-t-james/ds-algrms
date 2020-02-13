function isBalanced(str) {
  let balanced = true
  const results = []
  let output
  const set = new Set('{ [ (')

  for (let part of str) {
    if (set.has(part)) {
      results.push(part)
    }

    if (part === '}' || part === ')' || part === ']') {
      output = results.pop()

      if (
        (output !== '{' && part === '}') ||
        (output !== '[' && part === ']') ||
        (output !== '(' && part === ')')
      ) {
        balanced = false
      }
    }
  }

  return balanced
}

module.exports = { isBalanced }
