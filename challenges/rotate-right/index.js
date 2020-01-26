/**
 * Implement a function rightRotate(arr,n) which will rotate the given array by n.
 * This means that the right-most elements will appear at the left-most position
 * in the array and so on. You only have to rotate by one element from the right though.
 */

function rotateRight(arr, n) {
  const right = arr.splice(-n)
  const left = arr.slice(0)
  return right.concat(left)
}

module.exports = { rotateRight }
