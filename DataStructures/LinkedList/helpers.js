const LinkedList = require('.')

function union(list1, list2) {
  return list1
}

function intersection(listOne, listTwo) {
  let result = new LinkedList()
  const dict = new Set()
  let current = listOne.getHeadNode

  if (!listOne.getHeadNode || !listTwo.getHeadNode) return 'Empty List'

  while (current !== null) {
    if (!dict.has(current.data)) {
      dict.add(current.data)
    }

    current = current.next
  }

  current = listTwo.getHeadNode

  while (current !== null) {
    if (dict.has(current.data)) {
      result.insertAtHead(current.data)
    }

    current = current.next
  }

  console.log('result:', result)
  return result
}

module.exports = { union, intersection }
