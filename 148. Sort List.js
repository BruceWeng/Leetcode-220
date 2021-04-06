/**
Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
 */
/**
 * Note:
 * 1. merge function
 * 2. use fast and slow pointer finding middle Node
 * 3. sort right half ListNode them set mid.next = null for left ListNode
 * 
 * T: O(nlogn)
 * S: O(1)
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (head===null || head.next===null) {
        return head;
    }

    let mid = findMiddle(head);
    let right = sortList(mid.next);
    mid.next = null;
    let left = sortList(head);
    return merge(left, right);
}

/**
 * @param {ListNode} head
 * @return {ListNode} mid
 */
function findMiddle(head) {
    let slow = head;
    let fast = head.next;
    while (fast!==null && fast.next!==null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @reurn {ListNode}
 */
function merge(head1, head2) {
    let result = new ListNode(0);
    let curr = result;
    while (head1!==null && head2!==null) {
        [head1, head2, curr.next, curr] = nextValue(head1, head2)
    }
    curr.next = (head1!==null) ? head1 : head2
    return result.next;
  }
  
function nextValue(head1, head2) {
    if(head1.val < head2.val) return [head1.next, head2, head1, head1]
    return [head1, head2.next, head2, head2]
}