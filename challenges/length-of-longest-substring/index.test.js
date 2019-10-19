const { longestSubstring } = require('.')

test('should return the maximum value of n integers summed in an array', () => {
  expect(longestSubstring('')).toBe(null)
  expect(longestSubstring('bbbb')).toBe(1)
  expect(longestSubstring('abcabcbb')).toBe(3)
  expect(longestSubstring('pwwkew')).toBe(3)
})
