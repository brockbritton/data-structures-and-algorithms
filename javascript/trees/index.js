
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

  preOrder() {
    const result = [];
    function traverse(node) {
      if (!node) return;
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  inOrder() {
    const result = [];
    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  postOrder() {
    const result = [];
    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    bst.add(12);
    bst.add(18);
  });

  test('should contain value 7', () => {
    expect(bst.contains(7)).toBe(true);
  });

  test('should not contain value 20', () => {
    expect(bst.contains(20)).toBe(false);
  });

  test('should return correct pre-order traversal', () => {
    expect(bst.preOrder()).toEqual([10, 5, 3, 7, 15, 12, 18]);
  });

  test('should return correct in-order traversal', () => {
    expect(bst.inOrder()).toEqual([3, 5, 7, 10, 12, 15, 18]);
  });

  test('should return correct post-order traversal', () => {
    expect(bst.postOrder()).toEqual([3, 7, 5, 12, 18, 15, 10]);
  });
});
