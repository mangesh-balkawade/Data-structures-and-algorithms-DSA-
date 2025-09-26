class NodeX {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  insertStart(value) {
    let newNode = new NodeX(value, null);
    if (this.head == null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  insertLast(value) {
    let newNode = new NodeX(value, null);
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  getSize() {
    return this.size;
  }

  printList() {
    let temp = this.head;
    let str = "";
    while (temp != null) {
      str += temp.value + "->";
      temp = temp.next;
    }
    console.log(str);
  }

  insertAtPos(pos, value) {
    let temp = this.head;
    let newNode = new NodeX(value, null);
    let cnt = 1;
    while (cnt != pos - 1) {
      temp = temp.next;
      cnt++;
      if (cnt != pos - 1 && temp == null) {
        console.log("invalid pos");
        return;
      }
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }
}

let list = new LinkedList();
list.insertStart(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertAtPos(2, 11);
list.printList();
