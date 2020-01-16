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
  let leftWindow = 0
  let pattern = ''
  const seen = {}

  // eslint-disable-next-line prettier/prettier
  for (let rightWindow = 0; rightWindow < s.length;) {
    seen[s[rightWindow]] = (seen[s[rightWindow]] || 0) + 1

    if (seen[s[rightWindow]] > 1) {
      seen[s[leftWindow]] -= 1
      leftWindow++
      console.log(seen, leftWindow)
    }

    // pattern = s[rightWindow - leftWindow]
    rightWindow++
  }
  console.log({ seen, leftWindow, pattern })
  return false
}
repeatedSubstringPattern('helhol')
module.exports = repeatedSubstringPattern
