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

const PostOrder = (root) => {
  let queue = [];

  const traversal = (node) => {
    if (node.children !== null) {
      for (let i = 0; i < node.children.length; i++) {
        traversal(node.children[i]);
      }
    }

    queue.push(node.value);
  };

  traversal(root);

  return queue;
};

let PostOrderResult = PostOrder(tree);
console.log("PostOrder Result: ", PostOrderResult);

// ['A', 'C', 'E', 'D', 'B', 'H', 'I', 'G', 'F']
