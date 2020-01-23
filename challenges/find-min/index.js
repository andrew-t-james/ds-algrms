// Implement a function findMinimum(arr) which finds the smallest number in the given array.
function findMinWithSort(arr) {
  return arr.sort((a, b) => a - b)[0]
}

function findMinWithOutSort(arr) {
  let min = arr[0]
  for (let n in arr) {
    if (arr[n] < min) min = arr[n]
  }
  return min
}

module.exports = { findMinWithSort, findMinWithOutSort }
