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

const InOrder = root => {
  let result = [];

  const traversal = node => {
    if (node.left) traversal(node.left)
    result.push(node.value)
    if (node.right) traversal(node.right)
  }

  traversal(root)
  return result
};

let PostOrderResult = InOrder(tree);
console.log("InOrder Result: ", PostOrderResult);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
