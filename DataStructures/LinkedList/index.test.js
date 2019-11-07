const LinkedList = require('.')

describe('LinkedList', () => {
  test('should append new Node into LinkedList', () => {
    const list = new LinkedList()
    expect(list.head).toBe(null)
    list.append(1)
    expect(list.head.data).toBe(1)
    list.append(2)
    expect(list.head.next.data).toBe(2)
  })

  test('should append Node at a position in LinkedList', () => {
    const list = new LinkedList()
    const expected = {
      head: {
        data: 1,
        next: { data: 3, next: { data: 2, next: null } }
      }
    }
    list.append(1)
    list.append(2)
    list.appendAt(1, 3)
    expect(list).toEqual(expected)
  })

  test('should return length of LinkedList', () => {
    const list = new LinkedList()
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

  test('should return display Nodes and return sting of data from Nodes', () => {
    const list = new LinkedList()
    expect(list.empty()).toBe(true)
    list.append(1)
    list.append(2)
    list.append(3)
    expect(list.display()).toBe('1 2 3')
  })

  test('should return traverse Nodes and update data of that Node', () => {
    const list = new LinkedList()
    const expected = {
      head: {
        data: 11,
        next: { data: 12, next: { data: 13, next: null } }
      }
    }
    list.traverse(node => {
      node.data += 10000
    })
    expect(list).toEqual({ head: null })
    list.append(1)
    list.append(2)
    list.append(3)
    list.traverse(node => {
      node.data += 10
    })
    expect(list).toEqual(expected)
  })

  test('should return false || index if value exists in list', () => {
    const list = new LinkedList()
    expect(list.empty()).toBe(true)
    list.append(2)
    list.append(1)
    expect(list.search(1)).toBe(1)
  })

  test('should return remove data from head of LinkedList', () => {
    let list = new LinkedList()
    const expected = {
      head: {
        data: 2,
        next: {
          data: 3,
          next: null
        }
      }
    }
    expect(list.empty()).toBe(true)
    list.append(1)
    list.append(2)
    list.append(3)
    list.remove(1)
    expect(list.length()).toBe(2)
    expect(list).toEqual(expected)
  })

  test('should return remove data from tail of LinkedList', () => {
    let list = new LinkedList()
    const expected = {
      head: {
        data: 1,
        next: {
          data: 2,
          next: null
        }
      }
    }
    expect(list.empty()).toBe(true)
    list.append(1)
    list.append(2)
    list.append(3)
    list.remove(3)
    expect(list.length()).toBe(2)
    expect(list).toEqual(expected)
  })

  test('should return remove data from LinkedList', () => {
    let list = new LinkedList()
    const expected = {
      head: {
        data: 1,
        next: {
          data: 3,
          next: null
        }
      }
    }
    expect(list.empty()).toBe(true)
    list.append(1)
    list.append(2)
    list.append(3)
    list.remove(2)
    expect(list.length()).toBe(2)
    expect(list).toEqual(expected)
  })
})
