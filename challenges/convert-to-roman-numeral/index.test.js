const { convertToRoman } = require('.')

test('Should return a roman numeral based on the number input', () => {
  expect(convertToRoman(2)).toBe('II')
  expect(convertToRoman(3)).toBe('III')
  expect(convertToRoman(4)).toBe('IV')
  expect(convertToRoman(5)).toBe('V')
  expect(convertToRoman(6)).toBe('VI')
  expect(convertToRoman(9)).toBe('IX')
  expect(convertToRoman(12)).toBe('XII')
  expect(convertToRoman(16)).toBe('XVI')
})
