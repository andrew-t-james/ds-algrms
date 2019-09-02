// implement a function called countUniqueValues that accepts an array
// of sorted numbers and returns the count of unique values in the array. Numbers can be negative
function countUniqueValues(arr) {
  if (!arr.length) return 0
  const lookup = {}
  for (let num of arr) {
    lookup[num] = (lookup[num] || 0) + 1
  }
  return Object.keys(lookup).length || undefined
}

// alternative solution using pointers vs object lookup
function countUniqueValuesUsingPointers(arr) {
  if (!arr.length) return 0
  let i = 0
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

/**
 * first iteration i = 0 j = 1;
 * i = 0
 * j = 1
 *  i
 * [1, 1, 1, 1, 2]
 *     j
 * if they are NOT equal increment i assigning arr[i] the value of arr[j]
 *
 * second iteration
 * i = 0
 * j = 2
 *  i
 * [1, 1, 1, 2]
 *        j
 * third iteration
 * i = 0
 * j = 3
 *  i
 * [1, 1, 1, 2]
 *        j
 *
 * fourth iteration
 * i = 1
 * j = 3
 *     i
 * [1, 2, 1, 2]
 *           j
 * we are hit array.length
 * current value of i = 1
 * we will return i + 1 = 2
 **/

module.exports = { countUniqueValues, countUniqueValuesUsingPointers }
