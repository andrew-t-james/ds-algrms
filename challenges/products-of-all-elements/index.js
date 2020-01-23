const { pipeWith } = require('../../utils')

// Implement a function, findProduct(arr), which modifies an array so that each index has a product of all the numbers present in the array except the number stored at that index
function findProduct(arr) {
  const total = currArr => currArr.reduce((acc, n) => acc * n)
  const removeNumAtIndex = n => arr.filter(x => x !== n)

  return arr.map(int => pipeWith(int, removeNumAtIndex, total))
}

module.exports = findProduct
