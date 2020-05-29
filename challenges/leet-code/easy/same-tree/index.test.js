const { isSameTree, Tree, TreeNode } = require('.')

test('should boolean based on tree values matching or not', () => {
  const treeOne = new Tree(1)
  const treeOneNodeList = [2, 3]
  const treeTwo = new Tree(1)
  const treeTwoNodeList = [2, 3]

  for (let node of treeOneNodeList) {
    treeOne.insert(node)
  }
  for (let node of treeTwoNodeList) {
    treeTwo.insert(node)
  }
  // treeOne.insert(1, new TreeNode(2), new TreeNode(3))
  // treeTwo.insert(1, new TreeNode(2), new TreeNode(3))

  expect(isSameTree(treeOne.root, treeTwo.root)).toBe(true)
})

test('should return false when trees are not the same length', () => {
  const treeOne = new Tree(1)
  const treeOneNodeList = [2]
  const treeTwo = new Tree(1)
  const treeTwoNodeList = [null, 2]

  for (let node of treeOneNodeList) {
    treeOne.insert(node)
  }
  for (let node of treeTwoNodeList) {
    treeTwo.insert(node)
  }

  expect(isSameTree(treeOne.root, treeTwo.root)).toBe(false)
})

test('should return false when value do not match', () => {
  const treeOne = new Tree(1)
  const treeOneNodeList = [2, 1]
  const treeTwo = new Tree(1)
  const treeTwoNodeList = [1, 2]

  for (let node of treeOneNodeList) {
    treeOne.insert(node)
  }
  for (let node of treeTwoNodeList) {
    treeTwo.insert(node)
  }

  expect(isSameTree(treeOne.root, treeTwo.root)).toBe(false)
})
