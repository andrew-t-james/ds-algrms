//Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle.length === 0) return 0
  if (needle.length > haystack.length) return -1

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let sub = haystack.substring(i, i + needle.length)
      if (sub === needle) {
        return i
      }
    }
  }

  return -1
}

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function slidingStr(haystack, needle) {
  if (needle.length === 0) return 0
  if (needle.length > haystack.length) return -1

  for (let i = 0; i < haystack.length; i++) {
    let sub = needle[0]
    if (haystack[i] === sub) {
      if (sub !== needle) sub += needle[i - needle.length]
      if (sub === needle) {
        return i
      }
    }
  }
  return -1
}

module.exports = { strStr, slidingStr }
