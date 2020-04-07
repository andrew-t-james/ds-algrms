function findMinNode(rootNode) {
  if (!rootNode) return null

  while (rootNode.left) {
    rootNode = rootNode.left
  }
  return rootNode.value
}

function findMinNodeRecursive(rootNode) {
  if (!rootNode) return null

  if (rootNode.left === null) {
    return rootNode.value
  } else {
    return findMinNodeRecursive(rootNode.left)
  }
}

module.exports = { findMinNode, findMinNodeRecursive }
