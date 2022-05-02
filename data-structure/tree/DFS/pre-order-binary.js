const tree = {
  value: "F",
  left: {
    value: "B",
    left: {
      value: "A",
      left: null,
      right: null,
    },
    right: {
      value: "D",
      left: {
        value: "C",
        left: null,
        right: null,
      },
      right: {
        value: "E",
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: "G",
    left: null,
    right: {
      value: "I",
      left: {
        value: "H",
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

const preOrder = (root) => {
  let result = [];

  const traversal = (node) => {
    result.push(node.value);
    if (node.left) traversal(node.left)
    if (node.right) traversal(node.right);
  };

  traversal(root);

  return result;
};

let preResult = preOrder(tree);
console.log("PreOrder Result", preResult);
// ["F", "B", "A", "D", "C", "E", "G", "I", "H"]
