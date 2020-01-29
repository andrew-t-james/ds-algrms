const LinkedList = require('.')

describe('LinkedList', () => {
  test('should return boolean true when isEmpty', () => {
    const list = new LinkedList()
    expect(list.isEmpty).toBe(true)
  })

  test('should return boolean false when isEmpty', () => {
    const list = new LinkedList()
    list.insertAtHead(1)
    expect(list.isEmpty).toBe(false)
  })

  test('should insert new node at head', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null, tail: null })
    list.insertAtHead(1)
    expect(list).toEqual({
      head: { data: 1, next: null, previous: null },
      tail: { data: 1, previous: null, next: null }
    })
    list.insertAtHead(2)
    expect(list).toEqual({
      head: {
        data: 2,
        next: { data: 1, previous: list.head, next: null },
        previous: null
      },
      tail: {
        data: 1,
        previous: { data: 2, previous: null, next: list.tail },
        next: null
      }
    })
  })

  test('should deleteAtTail', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null, tail: null })

    list.insertAtHead(1)
    expect(list).toEqual({
      head: { data: 1, next: null, previous: null },
      tail: { data: 1, previous: null, next: null }
    })

    list.insertAtHead(2)
    expect(list).toEqual({
      head: {
        data: 2,
        next: { data: 1, previous: list.head, next: null },
        previous: null
      },
      tail: {
        data: 1,
        previous: { data: 2, previous: null, next: list.tail },
        next: null
      }
    })

    list.deleteAtTail()
    expect(list).toEqual({
      head: { data: 2, next: null, previous: null },
      tail: { data: 2, previous: null, next: null }
    })

    list.deleteAtTail()
    expect(list).toEqual({ head: null, tail: null })

    list.deleteAtTail()
    expect(list).toEqual({ head: null, tail: null })
  })

  test('should return number of nodes', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null, tail: null })

    expect(list.length()).toEqual(0)

    list.insertAtHead(1)
    expect(list).toEqual({
      head: { data: 1, next: null, previous: null },
      tail: { data: 1, previous: null, next: null }
    })

    expect(list.length()).toEqual(1)

    list.insertAtHead(2)
    expect(list).toEqual({
      head: {
        data: 2,
        next: { data: 1, previous: list.head, next: null },
        previous: null
      },
      tail: {
        data: 1,
        previous: { data: 2, previous: null, next: list.tail },
        next: null
      }
    })

    expect(list.length()).toEqual(2)

    list.deleteAtTail()
    expect(list).toEqual({
      head: { data: 2, next: null, previous: null },
      tail: { data: 2, previous: null, next: null }
    })

    expect(list.length()).toEqual(1)

    list.deleteAtTail()
    expect(list).toEqual({ head: null, tail: null })

    expect(list.length()).toEqual(0)

    list.deleteAtTail()
    expect(list).toEqual({ head: null, tail: null })
  })
})
