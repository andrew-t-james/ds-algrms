// In this problem, you have to implement the findSum(arr,value) function which will take a number n as input and return two numbers that add up to n.
// O(n2)
function findSumBruteForce(arr, value) {
  for (let i of arr) {
    for (let j of arr) {
      if (i + j == value) {
        return [i, j]
      }
    }
  }
  return false
}

function findSum(arr, value) {
  const seen = {}
  const results = []
  for (let i of arr) {
    let cur = value - i
    seen[i] = i

    if (Object.values(seen).indexOf(cur) > -1) {
      results.push(cur)
      results.push(seen[i])
      return results
    }
  }

  return false
}

// console.log(findSum([1, 21, 3, 14, 5, 60, 7, 6], 81))
module.exports = { findSumBruteForce, findSum }
