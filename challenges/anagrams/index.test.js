const isAnagram = require('./')

test('should return if return true if str2 is an anagram of str1', () => {
  expect(isAnagram('', '')).toBe(true)
})
