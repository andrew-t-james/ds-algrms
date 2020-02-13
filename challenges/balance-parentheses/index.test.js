const { isBalanced } = require('.')

describe('Balanced Parent', () => {
  test('should return true || false based parenthesis being balanced', () => {
    expect(isBalanced('{[({})]}')).toBe(true)
    expect(isBalanced('{[({([({({})})])})]}')).toBe(true)
    expect(isBalanced('{({})]}')).toBe(false)
    expect(isBalanced('{[({([({({)})])})]}')).toBe(false)
  })
})
