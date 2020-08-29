const { invertTree, TreeNode } = require('./index')

test('should invertTree', () => {
  const treeOne = [4, 2, 7, 1, 3, 6, 9]
  const expected = [4, 7, 2, 9, 6, 3, 1]
  const root = new TreeNode(treeOne.shift())
  console.log('root:', root)

  // expect(invertTree(root)).toEqual(expected)
})
