/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 **/
function ListNode(val) {
  this.val = val
  this.next = null
}

function mergeSortedListsIterative(l1, l2) {
  let curr = new ListNode()
  let head = curr

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }

    curr = curr.next
  }

  if (l1 !== null) {
    curr.next = l1
  } else {
    curr.next = l2
  }

  return head.next
}

module.exports = { mergeSortedListsIterative }
