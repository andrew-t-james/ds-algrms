const LinkedList = require('.')
const { union, intersection } = require('./helpers')

describe('LinkedList', () => {
  function addData(arr, list) {
    for (let data of arr) {
      list.insertAtTail(data)
    }
  }

  test('should return boolean true when isEmpty', () => {
    const list = new LinkedList()
    expect(list.isEmpty).toBe(true)
  })

  test('should return boolean false when isEmpty', () => {
    const list = new LinkedList()
    list.insertAtHead(1)
    expect(list.isEmpty).toBe(false)
    list.insertAtHead(2)
    expect(list.head.data).toBe(2)
    expect(list.head.next.data).toBe(1)
  })

  test('should insert new node at head', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insertAtHead(1)
    expect(list).toMatchSnapshot()
    list.insertAtHead(2)
    expect(list).toMatchSnapshot()
  })

  test('should insert new node at tail', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insert(1)
    list.insert(3)
    expect(list).toEqual({ head: { data: 1, next: { data: 3, next: null } } })
    list.insertAtTail(2)
    expect(list).toEqual({
      head: { data: 1, next: { data: 3, next: { data: 2, next: null } } },
    })
  })

  test('should insert new node at position', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insert(1)
    expect(list).toEqual({ head: { data: 1, next: null } })
    list.insert(2)
    expect(list).toEqual({ head: { data: 1, next: { data: 2, next: null } } })
    list.insertAtPosition(3, 1)
    expect(list).toEqual({
      head: { data: 1, next: { data: 3, next: { data: 2, next: null } } },
    })
  })

  test('should return true/false when searching for node', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)
    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } },
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
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } },
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
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } },
    })
    list.deleteAtHead()
    expect(list).toEqual({
      head: { data: 2, next: { data: 3, next: null } },
    })
  })

  test('should delete tail node', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })
    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)
    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: { data: 3, next: null } } },
    })
    list.deleteAtTail()
    expect(list).toEqual({
      head: { data: 1, next: { data: 2, next: null } },
    })
  })

  test('should delete node by value', () => {
    const list = new LinkedList()

    expect(list.deleteByValue()).toBe(false)
    expect(list).toEqual({ head: null })

    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)

    expect(list).toMatchSnapshot()

    expect(list.deleteByValue(1)).toBe(true)

    expect(list).toMatchSnapshot()

    list.insertAtHead(1)

    expect(list).toMatchSnapshot()

    expect(list.deleteByValue(2)).toBe(true)
    expect(list).toMatchSnapshot()
  })

  test('should reverse linked list', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })

    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)

    expect(list).toMatchSnapshot()

    list.reverse()
    expect(list).toMatchSnapshot()
  })

  test('should detect a circular reference in a linked list', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })

    list.insertAtTail(1)
    list.insertAtTail(2)
    list.insertAtTail(3)

    expect(list).toMatchSnapshot()

    expect(list.detectLoop()).toBe(false)
    list.head.next.next.next = list.head.next
    expect(list.head.next.next.next.data).toBe(2)

    expect(list.detectLoop()).toBe(true)
  })

  test.only('should return mid node', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })

    expect(list.findMidNode()).toBe('Empty LinkedList')

    let dataList = [1, 2, 3, 4]

    for (let data of dataList) {
      list.insertAtTail(data)
    }

    expect(list).toMatchSnapshot()

    expect(list.findMidNode()).toBe(2)

    dataList.push(5)

    const newList = new LinkedList()

    for (let data of dataList) {
      newList.insertAtTail(data)
    }

    expect(newList).toMatchSnapshot()

    expect(newList.findMidNode()).toBe(3)
  })

  test('should remove duplicate nodes in a linked list', () => {
    const list = new LinkedList()
    expect(list).toEqual({ head: null })

    const dataList = [1, 2, 3, 2, 6, 2, 8, 6]

    for (let data of dataList) {
      list.insertAtTail(data)
    }

    expect(list).toMatchSnapshot()

    list.removeDuplicatesWithSet()

    expect(list).toMatchSnapshot()
  })

  test('should return node that is an intersection in multiple liked lists', () => {
    const listOne = new LinkedList()
    const listTwo = new LinkedList()

    const dataList = [1, 2, 3]
    const dataListTwo = [3, 4, 5]

    addData(dataList, listOne)
    addData(dataListTwo, listTwo)

    expect(listOne).toMatchSnapshot()
    expect(listTwo).toMatchSnapshot()

    expect(intersection(listOne, listTwo)).toMatchSnapshot()
  })

  test('should return a union of two liked lists', () => {
    const listOne = new LinkedList()
    const listTwo = new LinkedList()

    expect(intersection(listOne, listTwo)).toBe('Empty List')

    const dataList = [1, 2, 3]
    const dataListTwo = [4, 5, 6]

    addData(dataList, listOne)

    expect(listOne).toMatchSnapshot()

    expect(union(listOne, listTwo)).toMatchSnapshot()

    addData(dataListTwo, listTwo)

    expect(listTwo).toMatchSnapshot()

    expect(union(listOne, listTwo)).toMatchSnapshot()
  })

  test('should return nth node from the last node', () => {
    const list = new LinkedList()
    expect(list.getNthNodeFromEnd(3)).toBe('Empty List')

    const dataList = [1, 2, 3, 4, 5, 6]

    addData(dataList, list)

    expect(list).toMatchSnapshot()

    expect(list.getNthNodeFromEnd(10)).toBe(null)
    expect(list.getNthNodeFromEnd(3)).toBe(4)
  })
})
