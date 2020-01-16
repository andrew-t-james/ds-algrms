const repeatedSubstringPattern = require('.')

test('Test Case repeating substring', () => {
  expect(repeatedSubstringPattern('')).toBe(false)
  expect(repeatedSubstringPattern('aba')).toBe(false)
  expect(repeatedSubstringPattern('abab')).toBe(true)
  // expect(repeatedSubstringPattern('aabbaabb')).toBe(true)
  // expect(repeatedSubstringPattern('abc')).toBe(false)
  // expect(repeatedSubstringPattern('abcabcabcabc')).toBe(true)
  // expect(repeatedSubstringPattern('helol')).toBe(false)
  // expect(repeatedSubstringPattern('helhol')).toBe(false)
  // expect(repeatedSubstringPattern('hellohello')).toBe(true)
})
