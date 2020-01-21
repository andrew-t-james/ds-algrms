// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

function sortedSquares(arr) {
  return arr.map(n => Math.abs(n) * Math.abs(n)).sort((a, b) => a - b)
}

module.exports = sortedSquares
