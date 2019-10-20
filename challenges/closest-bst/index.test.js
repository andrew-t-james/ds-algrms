const bst = require('./setup')

const {
  findClosestValueInBst,
  findClosestValueInBstTwo,
  findClosestValueInBstThree
} = require('.')

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

describe('More Better Solution', () => {
  test('Test Case #1', () => {
    expect(findClosestValueInBstTwo(bst, 100)).toBe(100)
  })

  test('Test Case #2', () => {
    expect(findClosestValueInBstTwo(bst, 208)).toBe(208)
  })

  test('Test Case #3', () => {
    expect(findClosestValueInBstTwo(bst, 4500)).toBe(4500)
  })

  test('Test Case #4', () => {
    expect(findClosestValueInBstTwo(bst, 4501)).toBe(4500)
  })

  test('Test Case #5', () => {
    expect(findClosestValueInBstTwo(bst, -70)).toBe(-51)
  })

  test('Test Case #6', () => {
    expect(findClosestValueInBstTwo(bst, 2000)).toBe(1001)
  })

  test('Test Case #7', () => {
    expect(findClosestValueInBstTwo(bst, 6)).toBe(5)
  })

  test('Test Case #8', () => {
    expect(findClosestValueInBstTwo(bst, 30000)).toBe(55000)
  })

  test('Test Case #9', () => {
    expect(findClosestValueInBstTwo(bst, -1)).toBe(1)
  })

  test('Test Case #10', () => {
    expect(findClosestValueInBstTwo(bst, 29751)).toBe(55000)
  })
})

describe('WHILE loop solution', () => {
  test('Test Case #1', () => {
    expect(findClosestValueInBstThree(bst, 100)).toBe(100)
  })

  test('Test Case #2', () => {
    expect(findClosestValueInBstThree(bst, 208)).toBe(208)
  })

  test('Test Case #3', () => {
    expect(findClosestValueInBstThree(bst, 4500)).toBe(4500)
  })

  test('Test Case #4', () => {
    expect(findClosestValueInBstThree(bst, 4501)).toBe(4500)
  })

  test('Test Case #5', () => {
    expect(findClosestValueInBstThree(bst, -70)).toBe(-51)
  })

  test('Test Case #6', () => {
    expect(findClosestValueInBstThree(bst, 2000)).toBe(1001)
  })

  test('Test Case #7', () => {
    expect(findClosestValueInBstThree(bst, 6)).toBe(5)
  })

  test('Test Case #8', () => {
    expect(findClosestValueInBstThree(bst, 30000)).toBe(55000)
  })

  test('Test Case #9', () => {
    expect(findClosestValueInBstThree(bst, -1)).toBe(1)
  })

  test('Test Case #10', () => {
    expect(findClosestValueInBstTwo(bst, 29751)).toBe(55000)
  })
})
