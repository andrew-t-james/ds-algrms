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

module.exports = { findFirstUnique }
