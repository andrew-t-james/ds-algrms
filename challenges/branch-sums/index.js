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

const tree = new BinaryTree(1)
tree.insert([2, 3, 4, 5, 6, 7, 8, 9, 10])

function branchSums(root) {
  console.log(JSON.stringify(root, null, 2))
}

console.log(branchSums(tree))

module.exports = branchSums
