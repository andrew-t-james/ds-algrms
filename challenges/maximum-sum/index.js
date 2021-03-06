// Given an array consisting of n integers, find the contiguous subarray of given
// length k that has the maximum value. And you need to output the maximum average value.

function maximumSumBruteForce(arr, n) {
  if (n > arr.length) return null
  let max = 0
  /**
   *                                                     [*  *  *] // deepest calculation
   * iterates over until the length of the array - n. [1, 2, 3, 4]
   * because we do not want to pass the end of the array we iterate to length minus the number of values we want to sum
   * first iteration
   * [1, 2, 3, 4]
   * [*  *  *]
   * i = 0
   *
   *        inner loop iteration
   *         j = 0
   *         temp = 0
   *         max = 0
   *
   *        inner loop iteration
   *        i = 0
   *        j = 1
   *        temp = 3
   *        max = 3
   *
   *        inner loop iteration
   *        i = 0
   *        j = 2
   *        temp = 6
   *        max = 6
   *
   * [1, 2, 3, 4]
   *    [*  *  *]
   * second iteration
   * i = 1
   *        inner loop iteration
   *        j = 0
   *        temp = 6
   *        max = 6
   *
   *        inner loop iteration
   *        i = 1
   *        j = 1
   *        temp = 5
   *        max = 6
   *
   *        inner loop iteration
   *        i = 1
   *        j = 2
   *        temp = 9
   *        max = 9
   * return 9 because that is the greatest sum of three digits in this array
   */
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0
    for (let j = 0; j < n; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}

function maximumSum(arr, num) {
  /**
   * sliding window approach
   */
  // handle edge case when num is to large for equation
  if (arr.length < num) return null

  // iterate over the array until n creating a max sum
  // sum together the digits from arr[0] to n
  let maxSum = 0
  let tempSum = 0

  /**
   * iterate over array up to `num` to and assign that value to `maxSum`
   */
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  // assign tempSum the value of maxSum
  tempSum = maxSum

  for (let j = num; j < arr.length; j++) {
    // move the window up by one each iteration
    tempSum = tempSum - arr[j - num] + arr[j]
    // assign maxSum the return of Math.max(maxSum, tempSum)
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

module.exports = { maximumSum, maximumSumBruteForce }
