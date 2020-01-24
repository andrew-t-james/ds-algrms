// implement a function, findFirstUnique(arr) that returns the first unique integer in the array.
function findFirstUnique(arr) {
  let curr = arr[0]
  for (let num in arr) {
    if (arr.slice(num).indexOf(curr) > -1) {
      curr = arr[num]
    }
  }
  return curr
}

function findFirstUniqueDictionary(arr) {
  const seen = {}

  for (let num of arr) {
    seen[num] = (seen[num] || 0) + 1
  }

  for (let key in arr) {
    if (seen[arr[key]] === 1) {
      return arr[key]
    }
  }

  return seen
}

module.exports = { findFirstUnique, findFirstUniqueDictionary }
