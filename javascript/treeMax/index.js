
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

  traverse(node, maxValue) {
    if (!node) {
      return maxValue;
    }

    if (node.value > maxValue) {
      maxValue = node.value;
    }

    maxValue = this.traverse(node.left, maxValue);
    maxValue = this.traverse(node.right, maxValue);

    return maxValue;
  }

  findMaxValue() {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    return this.traverse(this.root, -Infinity);
  }
}

const bt = new BinaryTree();
bt.root = new Node(10);
bt.root.left = new Node(5);
bt.root.right = new Node(15);
bt.root.left.left = new Node(3);
bt.root.left.right = new Node(7);
bt.root.right.left = new Node(12);
bt.root.right.right = new Node(18);

console.log(bt.findMaxValue());
