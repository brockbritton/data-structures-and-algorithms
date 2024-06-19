class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function fizzBuzzTree(karyTreeNode) {
  if (!karyTreeNode) {
    return null;
  }

  const root = new TreeNode(convertValue(karyTreeNode.value));

  for (let child of karyTreeNode.children) {
    root.children.push(fizzBuzzTree(child));
  }

  return root;
}

function convertValue(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return "FizzBuzz";
  } else if (value % 3 === 0) {
    return "Fizz";
  } else if (value % 5 === 0) {
    return "Buzz";
  } else {
    return String(value);
  }
}

