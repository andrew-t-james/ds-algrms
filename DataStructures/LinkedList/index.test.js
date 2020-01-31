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
    expect(list).toEqual({ head: null })
    list.insertAtHead(1)
    expect(list).toEqual({ head: { data: 1, next: null } })
    list.insertAtHead(2)
    expect(list).toEqual({ head: { data: 2, next: { data: 1, next: null } } })
  })

  test('should insert new node at tail', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insertAtTail(1)
    expect(list).toEqual({ head: { data: 1, next: null } })
    list.insertAtTail(2)
    expect(list).toEqual({ head: { data: 1, next: { data: 2, next: null } } })
  })

  test('should insert new node at position', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insertAtHead(1)
    expect(list).toEqual({ head: { data: 1, next: null } })
    list.insertAtTail(2)
    expect(list).toEqual({ head: { data: 1, next: { data: 2, next: null } } })
    list.insertAtPosition(3, 1)
    expect(list).toEqual({
      head: { data: 1, next: { data: 3, next: { data: 2, next: null } } }
    })
  })

  test('should return true/false when searching for node', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)
    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } }
    })
    expect(list.search(1)).toBe(true)
    expect(list.search(3)).toBe(true)
    expect(list.search(5)).toBe(false)
  })

  test('should return true/false when recursive searching for node', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)
    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } }
    })
    expect(list.recursiveSearch(list.head, 1)).toBe(true)
    expect(list.recursiveSearch(list.head, 3)).toBe(true)
    expect(list.recursiveSearch(list.head, 5)).toBe(false)
  })

  test('should delete head node', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)
    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } }
    })
    list.deleteAtHead()
    expect(list).toEqual({
      head: { data: 2, next: { data: 3, next: null } }
    })
  })

  test('should delete tail node', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)
    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } }
    })
    list.deleteAtTail()
    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: null } }
    })
  })

  test('should delete node by value', () => {
    const list = new LinkedList()

    expect(list.deleteByValue()).toBe(false)
    expect(list).toEqual({ head: null })

    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)

    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } }
    })

    expect(list.deleteByValue(1)).toBe(true)

    expect(list).toEqual({
      head: { data: 2, next: { data: 3, next: null } }
    })

    list.insertAtHead(1)

    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } }
    })

    expect(list.deleteByValue(2)).toBe(true)
    expect(list).toEqual({
      head: { data: 1, next: { data: 3, next: null } }
    })
  })

  test('should reverse linked list', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })

    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)

    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } }
    })

    list.reverse()
    expect(list).toEqual({
      head: { data: 3, next: { data: 2, next: { data: 1, next: null } } }
    })
  })

  test('should detect a circular reference in a linked list', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })

    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)

    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } }
    })

    expect(list.detectLoop()).toBe(false)
    list.head.next.next.next = list.head.next
    expect(list.head.next.next.next.data).toBe(2)

    expect(list.detectLoop()).toBe(true)
  })
})
