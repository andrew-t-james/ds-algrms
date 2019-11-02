const LinkedList = require('.')

describe('LinkedList', () => {
  test('should append new Node into LinkedList', () => {
    const list = new LinkedList()
    expect(list.head.data).toBe(null)
    list.append(1)
    expect(list.head.next.data).toBe(1)
    list.append(2)
    expect(list.head.next.next.data).toBe(2)
  })

  test('should append Node at a position in LinkedList', () => {
    const list = new LinkedList()
    const expected = {
      head: {
        data: null,
        next: { data: 1, next: { data: 3, next: { data: 2, next: null } } }
      }
    }
    list.append(1)
    list.append(2)
    list.appendAt(1, 3)
    expect(list).toEqual(expected)
  })

  test('should return length of LinkedList', () => {
    const list = new LinkedList()
    expect(list.length()).toBe(0)
    list.append(1)
    expect(list.length()).toBe(1)
    list.append(2)
    expect(list.length()).toBe(2)
  })

  test('should return boolean based on LinkedList length', () => {
    const list = new LinkedList()
    expect(list.empty()).toBe(true)
    list.append(1)
    expect(list.empty()).toBe(false)
  })

  test('should return traverse Nodes and return sting of data from Nodes', () => {
    const list = new LinkedList()
    expect(list.empty()).toBe(true)
    list.append(1)
    list.append(2)
    list.append(3)
    expect(list.traverse()).toBe(' 1 2 3')
  })
})
