const charCount = require('./index.js')

test('should count all chars in string ignoring whitespace', () => {
  expect(charCount('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 })

  expect(charCount('hello 1234')).toEqual({
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1,
    h: 1,
    e: 1,
    l: 2,
    o: 1
  })

  expect(charCount('hello WORLD')).toEqual({
    h: 1,
    e: 1,
    l: 3,
    w: 1,
    o: 2,
    r: 1,
    d: 1
  })
})
