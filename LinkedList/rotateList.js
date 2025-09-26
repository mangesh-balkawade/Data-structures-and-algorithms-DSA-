var rotateRight = function (head, k) {
  if (!head || !head.next) {
    return head;
  }
  let length = 1;
  let temp = head;
  let lastElement = null;
  while (temp) {
    length++;
    lastElement = temp;
    temp = temp.next;
  }

  if (length < k) {
    k = k % length;
  } else {
    k = length - k;
  }

  if (k == 0) {
    return head;
  }

  lastElement.next = head;

  let temp2 = head;
  let cnt = 1;
  while (k != cnt) {
    temp2 = temp2.next;
    cnt++;
  }

  head = temp2.next;
  temp2.next = null;

  return head;
};
