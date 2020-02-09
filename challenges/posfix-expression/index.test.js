const posFixExpression = require('.')

describe('PosFixExpression', () => {
  test('should compute postfix mathematical expressions using stacks', () => {
    expect(posFixExpression('921*-8-4+')).toBe(3)
    expect(posFixExpression('293*-9+')).toBe(-16)
  })
})
