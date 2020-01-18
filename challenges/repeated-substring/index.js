/**
 * Given a non-empty string check if it can be constructed by taking a
 * substring of it and appending multiple copies of the substring together.
 * You may assume the given string consists of lowercase English letters only
 * and its length will not exceed 10000.
 */

/**
 * Input: "abab"
 * Output: True
 * Explanation: It's the substring "ab" twice.
 *
 * Input: "aba"
 * Output: False
 *
 * Input: "abcabcabcabc"
 * Output: True
 * Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 */

function repeatedSubstringPattern(s) {
  if (s.length % 2 !== 0 || !s.length) return false
  const seen = {}
  let pattern = ''
  let leftWindow = 0
  let count = 0

  for (let char of s) {
    if (!seen[char]) {
      seen[char] = 0
      pattern += char
    }
    if (seen[char]) break
    seen[char] += 1
  }
  let temp = ''
  // eslint-disable-next-line prettier/prettier
  for (let i = leftWindow; i < pattern.length;) {

    if (s[i] === pattern[i]) {
      temp += s[i]

      if (temp === pattern) {
        count += 1
        temp = ''
      }
    }
    console.log('temp', { i, count })
    i++
  }

  console.log('seen:', { seen, pattern })
  return false
}
repeatedSubstringPattern('helhol')
module.exports = repeatedSubstringPattern
