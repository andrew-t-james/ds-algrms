/**
 * Implement a function called maxMin(arr) which will re-arrange the elements
 * of a sorted array so that the first position will have the largest number,
 * the second will have the smallest, and the third will have second largest
 * and so on. In other words, all the odd-numbered indices will have the
 * largest numbers in the array in descending order and the even numbered indices
 * will have the smallest numbers in
 */

function maxMin(arr) {
  const reArranged = []
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    console.log('num:', arr[i])
    reArranged.push(arr[arr.length - (i + 1)])
    reArranged.push(arr[i])
  }

  if (arr.length % 2) {
    reArranged.push(arr[Math.floor(arr.length / 2)])
  }

  return reArranged
}

module.exports = { maxMin }
