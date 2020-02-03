const { genBinNumbers } = require('.')

describe('BinaryNumbers', () => {
  test('should return binary numbers in the form of strings from 1 up to n', () => {
    expect(genBinNumbers(3)).toEqual(['1', '10', '11'])
    expect(genBinNumbers(5)).toEqual(['1', '10', '11', '100', '101'])
  })
})
