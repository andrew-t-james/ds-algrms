/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length)
  nums1.push(...nums2.splice(0, n))
  nums1.sort((a, b) => a - b)
}

module.exports = merge
