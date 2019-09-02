const isAnagram = require('./')

test('should return if return true if str2 is an anagram of str1', () => {
  expect(isAnagram('', '')).toBe(true)
  expect(isAnagram('aaa', 'aaa')).toBe(true)
  expect(isAnagram('anagram', 'ganaram')).toBe(true)
  expect(isAnagram('awesome', 'awsome')).toBe(false)
  expect(isAnagram('qwerty', 'ytrewq')).toBe(true)
  expect(isAnagram('cat', 'car')).toBe(false)
})
