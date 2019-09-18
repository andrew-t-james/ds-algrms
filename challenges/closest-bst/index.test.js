const bst = require('./Bst')
const { findClosestValueInBst, findClosestValueInBstTwo } = require('.')

describe('Naive Solution', () => {
  test('Test Case #1', () => {
    expect(findClosestValueInBst(bst, 100)).toBe(100)
  })

  test('Test Case #2', () => {
    expect(findClosestValueInBst(bst, 208)).toBe(208)
  })

  test('Test Case #3', () => {
    expect(findClosestValueInBst(bst, 4500)).toBe(4500)
  })

  test('Test Case #4', () => {
    expect(findClosestValueInBst(bst, 4501)).toBe(4500)
  })

  test('Test Case #5', () => {
    expect(findClosestValueInBst(bst, -70)).toBe(-51)
  })

  test('Test Case #6', () => {
    expect(findClosestValueInBst(bst, 2000)).toBe(1001)
  })

  test('Test Case #7', () => {
    expect(findClosestValueInBst(bst, 6)).toBe(5)
  })

  test('Test Case #8', () => {
    expect(findClosestValueInBst(bst, 30000)).toBe(55000)
  })

  test('Test Case #9', () => {
    expect(findClosestValueInBst(bst, -1)).toBe(1)
  })

  test('Test Case #10', () => {
    expect(findClosestValueInBst(bst, 29751)).toBe(55000)
  })
})
