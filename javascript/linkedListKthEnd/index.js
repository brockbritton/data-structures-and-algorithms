class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  findKthFromEnd(k) {
    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return null;
      }
      fast = fast.next;
    }

    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.value;
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

const k = 2;
const kthFromEnd = linkedList.findKthFromEnd(k);
console.log(`The ${k}th element from the end is: ${kthFromEnd}`);
