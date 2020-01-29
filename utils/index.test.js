const { log, stringIt, peek, pop, pipe, pipeWith } = require('.')

describe('Helpers', () => {
  test('should log', () => {
    console.log = jest.fn()

    log('hello')

    expect(console.log).toHaveBeenCalledTimes(1)
  })

  test('should call console.log when using stringify helper', () => {
    console.log = jest.fn()

    stringIt({ hello: 'world' })

    expect(console.log).toHaveBeenCalledTimes(1)
  })

  test('should show last elem in an array', () => {
    expect(pop([1, 2, 3, 4])).toBe(4)
  })

  test('should show first elem in an array', () => {
    expect(peek([1, 2, 3, 4])).toBe(1)
  })

  test('should pipe multiple functions', () => {
    const add = (a, b) => a + b
    const addEm = () => add(2, 1)
    const dbl = num => num * 2

    const sumThenDbl = pipe(addEm, dbl)
    expect(sumThenDbl()).toBe(6)
  })

  test('should pipe multiple functions', () => {
    const add = n => n + 3
    const dbl = num => num * 2

    const sumThenDbl = pipeWith(3, add, dbl)
    expect(sumThenDbl).toBe(12)
  })
})
