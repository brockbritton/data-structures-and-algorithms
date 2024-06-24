
//this class is from ../trees/index.js. Testing is in that file.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Helper method to add nodes to the tree for testing
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

//this class is from ../hashTable/index.js. Testing is in that file.
class Hashtable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  has(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  keys() {
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArray.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArray;
  }
}

function tree_intersection(tree1, tree2) {
  const values1 = new Hashtable();
  const intersection = new Set();

  function traverseAndStore(node) {
    if (!node) return;
    values1.set(node.value.toString(), true);
    traverseAndStore(node.left);
    traverseAndStore(node.right);
  }

  function traverseAndCheck(node) {
    if (!node) return;
    if (values1.has(node.value.toString())) {
      intersection.add(node.value);
    }
    traverseAndCheck(node.left);
    traverseAndCheck(node.right);
  }

  traverseAndStore(tree1.root);
  traverseAndCheck(tree2.root);

  return intersection;
}


describe('tree_intersection', () => {
  let tree1;
  let tree2;

  beforeEach(() => {
    tree1 = new BinaryTree();
    tree2 = new BinaryTree();
  });

  test('should return common values in both trees', () => {
    // Tree 1
    tree1.root = new TreeNode(10);
    tree1.root.left = new TreeNode(5);
    tree1.root.right = new TreeNode(15);
    tree1.root.left.left = new TreeNode(3);
    tree1.root.left.right = new TreeNode(7);

    // Tree 2
    tree2.root = new TreeNode(10);
    tree2.root.left = new TreeNode(5);
    tree2.root.right = new TreeNode(20);
    tree2.root.left.left = new TreeNode(3);
    tree2.root.left.right = new TreeNode(8);

    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual(new Set([10, 5, 3]));
  });

  test('should return empty set when there are no common values', () => {
    // Tree 1
    tree1.root = new TreeNode(1);
    tree1.root.left = new TreeNode(2);
    tree1.root.right = new TreeNode(3);

    // Tree 2
    tree2.root = new TreeNode(4);
    tree2.root.left = new TreeNode(5);
    tree2.root.right = new TreeNode(6);

    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual(new Set());
  });

  test('should return empty set when one tree is empty', () => {
    // Tree 1
    tree1.root = new TreeNode(1);
    tree1.root.left = new TreeNode(2);
    tree1.root.right = new TreeNode(3);

    // Tree 2 is empty

    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual(new Set());
  });

  test('should return empty set when both trees are empty', () => {
    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual(new Set());
  });

  test('should return common values in trees with different structures', () => {
    // Tree 1
    tree1.root = new TreeNode(10);
    tree1.root.left = new TreeNode(5);
    tree1.root.right = new TreeNode(15);
    tree1.root.left.left = new TreeNode(3);
    tree1.root.left.right = new TreeNode(7);

    // Tree 2
    tree2.root = new TreeNode(10);
    tree2.root.left = new TreeNode(7);
    tree2.root.right = new TreeNode(20);
    tree2.root.right.left = new TreeNode(15);
    tree2.root.right.right = new TreeNode(25);

    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual(new Set([10, 15, 7]));
  });
});
