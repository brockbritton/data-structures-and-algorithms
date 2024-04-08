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

  // traverse() {
  //   let currentNode = this.head;
  //   while (currentNode) {
  //     currentNode = currentNode.next;
  //   }
  // }

  insert(value) {
    let node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  // append(value) {
  //   let node = new Node(value);
  //   let current = this.head;
  //   while (current.next) {
  //     current = current.next;
  //   }
  //   current.next = node;
  // }

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

// let list = new LinkedList();

module.exports = LinkedList;
