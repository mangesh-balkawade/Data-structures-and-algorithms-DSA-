/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;
  let slowCount = 1;
  let fastCount = 1;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    slowCount++;
    fastCount++;
    if (fast) {
      fastCount++;
    }
  }

  let distanceFromLast = fastCount - n;
  let distanceFromMid = distanceFromLast - slowCount;
  if (distanceFromMid < 0) {
    let sentinent = new ListNode();
    sentinent.next = head;
    let temp = sentinent;
    while(distanceFromLast){
        temp=temp.next;
        distanceFromLast--;
    }
    temp.next=temp.next.next;
    head=sentinent.next;
  } else {
    while (slowCount != distanceFromLast) {
      slow = slow.next;
      slowCount++;
    }
    slow.next = slow.next?.next || null;
  }
};
