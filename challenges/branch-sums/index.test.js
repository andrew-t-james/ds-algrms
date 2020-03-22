const { branchSums, BinaryTree } = require('./index.js')

test('should sum tree', () => {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5])
  expect(branchSums(tree)).toEqual([7, 8, 4])
})

test('should not sum tree', () => {
  const tree = new BinaryTree()
  expect(branchSums(tree)).toEqual('Empty tree')
})
