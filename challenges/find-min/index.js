// Implement a function findMinimum(arr) which finds the smallest number in the given array.
function findMinWithSort(arr) {
  return arr.sort((a, b) => a - b)[0]
}

module.exports = { findMinWithSort }
