'use strict';

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

  size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode) {
      size += 1;
      currentNode = currentNode.next;
    }
    return size;
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
    }
  }

  insert(value) {
    let node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let fullString = '';
    let currentNode = this.head;
    while (currentNode) {
      fullString += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    fullString += 'NULL';
    return fullString;
  }

  kthFromEnd(k) {
    if (k < 0) {
      return 'Exception';
    }

    let length = this.size();
    if (k > length || length === 0) {
      return 'Exception';
    }

    let forwardIndex = length - k - 1;
    let currentNode = this.head;

    for (let i = 0; i < forwardIndex; i++) {
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.kthFromEnd(-3)); //null


module.exports = LinkedList;
