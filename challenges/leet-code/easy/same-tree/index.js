class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

class Tree {
  constructor(value) {
    this.root = new TreeNode(value)
  }

  insert(value) {
    this.root

    if (!this.root.left) {
      this.root.left = new TreeNode(value)
    } else if (this.root.right) {
      this.root.right = new TreeNode(value)
    }
  }
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  let q1 = [p]
  let q2 = [q]

  while (q1.length && q2.length) {
    const c1 = q1.shift()
    const c2 = q2.shift()

    if (c1 && c2 && c1.val !== c2.val) {
      return false
    }

    if (c1 && !c2) {
      return false
    }

    if (!c1 && c2) {
      return false
    }

    if (c1) {
      q1.push(c1.left)
      q1.push(c1.right)
    }

    if (c2) {
      q2.push(c2.left)
      q2.push(c2.right)
    }
  }

  return !q2.length && !q1.length
}

module.exports = { isSameTree, Tree, TreeNode }
