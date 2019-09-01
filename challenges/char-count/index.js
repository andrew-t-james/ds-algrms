function charCount(str) {
  const sanitized = str.toLowerCase().replace(' ', '')
  const charMap = {}
  for (let char of sanitized) {
    // if we have not seen charMap[char] initialize to zero and add 1
    // if we have seen charMap[char] add one to the value
    charMap[char] = (charMap[char] || 0) + 1
    // if (!charMap[char]) {
    //   charMap[char] = 1
    // } else {
    //   charMap[char]++
    // }
  }

  return charMap
}

module.exports = charCount
