const { strStr, slidingStr } = require('.')

test('Test Case substring', () => {
  expect(strStr('hello', '')).toBe(0)
  expect(strStr('hello', 'l')).toBe(2)
  expect(strStr('hello', 'll')).toBe(2)
  expect(strStr('hello', 'lll')).toBe(-1)
  expect(strStr('hello', 'h')).toBe(0)
  expect(strStr('hello', 'hellohello')).toBe(-1)
})

test('Test Case sliding window', () => {
  expect(slidingStr('hello', '')).toBe(0)
  expect(slidingStr('hello', 'l')).toBe(2)
  expect(slidingStr('hello', 'll')).toBe(2)
  expect(slidingStr('hello', 'lll')).toBe(-1)
  expect(slidingStr('hello', 'h')).toBe(0)
  expect(slidingStr('hello', 'hellohello')).toBe(-1)
})
