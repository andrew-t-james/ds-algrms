const LinkedList = require('.')

describe('LinkedList', () => {
  test('should return boolean true when isEmpty', () => {
    const list = new LinkedList()
    expect(list.isEmpty()).toBe(true)
  })

  test('should return boolean false when isEmpty', () => {
    const list = new LinkedList()
    list.insertAtHead(1)
    expect(list.isEmpty()).toBe(false)
  })

  test('should insert new node at head', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insertAtHead(1)
    expect(list).toEqual({ head: { data: 1, next: null } })
    list.insertAtHead(2)
    expect(list).toEqual({ head: { data: 2, next: { data: 1, next: null } } })
  })
})
