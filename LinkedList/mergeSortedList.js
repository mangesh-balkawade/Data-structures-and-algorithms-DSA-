/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let retList = new ListNode();
  let ansList = retList;
  while (l1 && l2) {
    let newNode = new ListNode();
    if (l1.val < l2.val) {
      newNode.val = l1.val;
      ansList.next = newNode;
      l1 = l1.next;
    } else {
      newNode.val = l2.val;
      ansList.next = newNode;
      l2 = l2.next;
    }
    ansList = ansList.next;
  }
  while (l1) {
    let newNode = new ListNode();
    newNode.val = l1.val;
    ansList.next = newNode;
    ansList.next = l1;
    l1 = l1.next;
    ansList = ansList.next;
  }
  while (l2) {
    let newNode = new ListNode();
    newNode.val = l2.val;
    ansList.next = newNode;
    l2 = l2.next;
    ansList = ansList.next;
  }
  return retList.next;
};
