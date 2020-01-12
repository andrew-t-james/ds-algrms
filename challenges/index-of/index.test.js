const strStr = require('.')

test('Test Case #1', () => {
  expect(strStr('hello', '')).toBe(0)
  expect(strStr('hello', 'l')).toBe(2)
  expect(strStr('hello', 'll')).toBe(2)
  expect(strStr('hello', 'lll')).toBe(-1)
  expect(strStr('hello', 'h')).toBe(0)
  expect(strStr('hello', 'hellohello')).toBe(-1)
})
