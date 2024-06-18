
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Adding the breadthFirst method to the BinaryTree class
  breadthFirst() {
    if (!this.root) {
      return [];
    }

    const queue = [this.root];
    const result = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
}

// Example usage:
const bt = new BinaryTree();
bt.root = new Node(2);
bt.root.left = new Node(7);
bt.root.right = new Node(5);
bt.root.left.left = new Node(2);
bt.root.left.right = new Node(6);
bt.root.left.right.left = new Node(5);
bt.root.left.right.right = new Node(11);
bt.root.right.right = new Node(9);
bt.root.right.right.left = new Node(4);

console.log(bt.breadthFirst());
