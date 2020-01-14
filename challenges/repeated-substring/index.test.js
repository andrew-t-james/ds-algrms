const repeatedSubstringPattern = require('.')

test('Test Case repeating substring', () => {
  expect(repeatedSubstringPattern('abab')).toBe(true)
  expect(repeatedSubstringPattern('abc')).toBe(false)
  expect(repeatedSubstringPattern('abcabcabcabc')).toBe(true)
  expect(repeatedSubstringPattern('helol')).toBe(false)
})
