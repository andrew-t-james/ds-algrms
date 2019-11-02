const LinkedList = require('.')

describe('LinkedList', () => {
  test('should append new Node into LinkedList', () => {
    const list = new LinkedList()
    expect(list.head.data).toBe(null)
    list.append(1)
    expect(list.head.next.data).toBe(1)
    list.append(2)
    console.log(JSON.stringify(list, null, 2))
    expect(list.head.next.next.data).toBe(2)
  })

  test('should return length of LinkedList', () => {
    const list = new LinkedList()
    expect(list.length()).toBe(0)
    list.append(1)
    expect(list.length()).toBe(1)
    list.append(2)
    expect(list.length()).toBe(2)
  })
})
