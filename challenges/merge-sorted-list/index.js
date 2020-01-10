/* eslint-disable prettier/prettier */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 */

const listOne = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 2,
      next: null
    }
  }
}

const listTwo = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}

function mergeSortedLists(l1, l2) { }

console.log(JSON.stringify(mergeSortedLists(listOne, listTwo), null, 2))

module.exports = mergeSortedLists
