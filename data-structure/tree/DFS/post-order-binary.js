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

const PostOrder = (root) => {
  let queue = [];

  const traversal = (node) => {
    if (node.left) traversal(node.left);
    if (node.right) traversal(node.right);

    queue.push(node.value);
  };

  traversal(root);

  return queue;
};

let PostOrderResult = PostOrder(tree);
console.log("PostOrder Result: ", PostOrderResult);

// ['A', 'C', 'E', 'D', 'B', 'H', 'I', 'G', 'F']
