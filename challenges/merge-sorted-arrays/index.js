/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  // remove m elements from array and replace with nums1.length
  nums1.splice(m, nums1.length)
  nums1.push(...nums2.splice(0, n))
  nums1.sort((a, b) => a - b)
}

function mergeSortedLists(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b)
}

function mergeSortedListsAnotherWay(arr1, arr2) {
  let merged = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i])
      i++
    } else {
      merged.push(arr2[j])
      j++
    }
  }

  if (i <= arr1.length - 1) {
    merged = merged.concat(arr1.slice(i))
  } else if (j <= arr2.length - 1) {
    merged = merged.concat(arr2.slice(i))
  }

  return merged
}

module.exports = { merge, mergeSortedLists, mergeSortedListsAnotherWay }
