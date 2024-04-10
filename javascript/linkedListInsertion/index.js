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

  append(newValue) {
    const newNode = new Node(newValue);
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

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return; // Can't insert before if the list is empty
    }
    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return; // Can't insert after if the list is empty
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
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
}

let list = new LinkedList();
list.append(1)
console.log(list.toString())

module.exports = LinkedList;
