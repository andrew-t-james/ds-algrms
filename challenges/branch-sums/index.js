class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(values, i = 0) {
    if (i >= values.length) return
    const queue = [this]
    while (queue.length > 0) {
      let current = queue.shift()
      if (current.left === null) {
        current.left = new BinaryTree(values[i])
        break
      }
      queue.push(current.left)
      if (current.right === null) {
        current.right = new BinaryTree(values[i])
        break
      }
      queue.push(current.right)
    }
    this.insert(values, i + 1)
    return this
  }
}

function calculateBranchSums(node, runningSums, sums) {
  if (!node) return // base case
  const newRunningSum = runningSums + node.value

  if (!node.right && !node.left) {
    sums.push(newRunningSum)
    return
  }

  calculateBranchSums(node.left, newRunningSum, sums)
  calculateBranchSums(node.right, newRunningSum, sums)
}

function branchSums(root) {
  if (!root.value) return 'Empty tree'

  const sums = []
  calculateBranchSums(root, 0, sums)
  return sums
}

module.exports = { branchSums, BinaryTree }
