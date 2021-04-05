/**
Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */
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
 */
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    [l1, l2, current.next, current] = nextValue1(l1, l2)
  }
  // Merge after one list finished traversing
  while (l1 !== null || l2 !== null) {
    [l1, l2, current.next, current] = nextValue2(l1, l2)
  }
  return dummy.next;
};

function nextValue1(l1, l2) {
  if (l1.val < l2.val) return [l1.next, l2, l1, l1]
  return [l1, l2.next, l2, l2]
}

function nextValue2(l1, l2) {
  if (l1 !== null) return [l1.next, l2, l1, l1]
  return [l1, l2.next, l2, l2]
}