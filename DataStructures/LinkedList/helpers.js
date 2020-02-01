const LinkedList = require('.')

function union(listOne, listTwo) {
  const result = new LinkedList()
  let current = listOne.getHeadNode

  if (listOne.isEmpty) {
    return listTwo
  } else if (listTwo.isEmpty) {
    return listOne
  }

  while (current !== null) {
    result.insertAtTail(current.data)
    current = current.next
  }

  current = listTwo.getHeadNode

  while (current !== null) {
    result.insertAtTail(current.data)
    current = current.next
  }

  return result
}

function intersection(listOne, listTwo) {
  let result = new LinkedList()
  const set = new Set()
  let current = listOne.getHeadNode

  if (listOne.isEmpty || listTwo.isEmpty) return 'Empty List'

  while (current !== null) {
    if (!set.has(current.data)) {
      set.add(current.data)
    }

    current = current.next
  }

  current = listTwo.getHeadNode

  while (current !== null) {
    if (set.has(current.data)) {
      result.insertAtHead(current.data)
    }

    current = current.next
  }

  return result
}

module.exports = { union, intersection }
