function findHeight(rootNode) {
  const queue = []
  let height = 0
  let currentNode
  let counterNodesInLevel = 1

  queue.push(rootNode)

  while (queue.length) {
    currentNode = queue.pop()
    counterNodesInLevel -= 1

    if (currentNode.left) {
      queue.push(currentNode.left)
    }

    if (currentNode.right) {
      queue.push(currentNode.right)
    }

    if (counterNodesInLevel === 0) {
      height += 1
      counterNodesInLevel = queue.length
    }
  }

  return height - 1
}

module.exports = { findHeight }
