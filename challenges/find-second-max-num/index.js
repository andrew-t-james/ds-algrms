// Implement a function findSecondMaximum(arr) which returns the second largest element in the array. Assume that the array length will always be greater than 1 and it will not contain duplicates, i.e. there will always be a maximum and a second maximum.

function findSecondMaximum(arr) {
  const max = Math.max(...arr)
  const filtered = arr.filter(n => n !== max)
  return Math.max(...filtered)
}

function findSecondMaximumSorted(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 2]
}

module.exports = { findSecondMaximum, findSecondMaximumSorted }
