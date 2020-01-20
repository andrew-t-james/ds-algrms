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
  if (s.length < 2) return false
  let pattern = ''
  for (let i = 0; i < s.length / 2; i++) {
    pattern += s[i]
    if (!s.split(pattern).join('').length) return true
  }

  return false
}
module.exports = repeatedSubstringPattern
