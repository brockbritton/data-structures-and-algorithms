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

  append(value) {
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
}

function zipLinkedLists(list1, list2) {
  const zippedList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 || current2) {
    if (current1) {
      zippedList.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      zippedList.append(current2.value);
      current2 = current2.next;
    }
  }

  return zippedList;
}

// Example usage:
const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

const list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);

const zippedList = zipLinkedLists(list1, list2);
console.log(zippedList);
