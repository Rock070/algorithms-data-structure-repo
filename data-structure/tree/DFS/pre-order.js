const tree = {
  value: "F",
  children: [
    {
      value: "B",
      children: [
        {
          value: "A",
          children: null,
        },
        {
          value: "D",
          children: [
            {
              value: "C",
              children: null,
            },
            {
              value: "E",
              children: null,
            },
          ],
        },
      ],
    },
    {
      value: "G",
      children: [
        {
          value: "I",
          children: [
            {
              value: "H",
              children: null,
            },
          ],
        },
      ],
    },
  ],
};

const preOrder = (root) => {
  let queue = [];

  const traversal = (node) => {
    queue.push(node.value);
    if (node.children !== null) {
      for (let i = 0; i < node.children.length; i++) {
        traversal(node.children[i]);
      }
    }
  };

  traversal(root);

  return queue;
};

let preResult = preOrder(tree);
console.log("PreOrder Result", preResult);
// ["F", "B", "A", "D", "C", "E", "G", "I", "H"]
