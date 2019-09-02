// given two strings write a function to determine the second string
// is and anagram of the first string.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false

  let charMap1 = {}
  let charMap2 = {}
  for (let char of str1) {
    charMap1[char] = (charMap1[char] || 0) + 1
  }
  for (let char of str2) {
    charMap2[char] = (charMap2[char] || 0) + 1
  }
  for (let key in charMap1) {
    if (charMap1[key] !== charMap2[key]) {
      return false
    }
  }
  return true
}

module.exports = isAnagram
