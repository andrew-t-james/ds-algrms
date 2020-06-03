class ListNode {
  constructor(value) {
    this.val = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insert(value) {
    const newNode = new ListNode(value)
    if (!this.head) {
      this.head = new ListNode(value)
    } else {
      let current = this.head

      while (current.next !== null) {
        current = current.next
      }

      current.next = newNode
    }
  }
}

function deleteDuplicates(head) {
  if (head === null) return head

  const uniqueVals = new Set()
  let current = head

  let newNode

  while (current.next !== null) {
    uniqueVals.add(current.val)
    if (uniqueVals.has(current.val) === uniqueVals.has(current.next.val)) {
      newNode = current.next.next
      current.next = newNode
    } else {
      current = current.next
    }
  }

  return head
}

module.exports = { deleteDuplicates, LinkedList }
