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
  let leftWindow = 0
  let pattern = ''

  // for (let char of s) {
  //   seen[char] = (seen[char] || 0) + 1
  // }

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1] && !seen[s[i]]) {
      console.log('AAAAAAAAAAAAAAAAAAAA')
      console.log(s[i], i)
      pattern += s[i]
    }
    seen[s[i]] = (seen[s[i]] || 0) + 1
  }
  console.log('seen:', { seen, pattern })
  return false
}
repeatedSubstringPattern('abab')
module.exports = repeatedSubstringPattern
