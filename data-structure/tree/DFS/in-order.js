const tree = {
  value: 10,
  children: [
    {
      value: 9,
      children: [
        {
          value: 8,
          children: [
            {
              value: 6,
              children: null,
            },
          ],
        },
        {
          value: 5,
          children: null,
        },
        {
          value: 11,
          children: null,
        },
      ],
    },
    {
      value: 7,
      children: [
        {
          value: 1,
          children: [
            {
              value: 4,
              children: null,
            },
            {
              value: 2,
              children: null,
            },
          ],
        },
        {
          value: 3,
          children: null,
        },
      ],
    },
  ],
};
let deepCopy = (value) => JSON.parse(JSON.stringify(value));

const InOrder = (root) => {
  let queue = [];

  const traversal = (node) => {
    if (node.children !== null) {
      traversal(deepCopy(node.children[0]));
      queue.push(node.value);
      for (let i = 1; i < node.children.length; i++) {
        let temp = deepCopy(node.children[i]);
        traversal(temp);
      }
      return;
    }

    queue.push(node.value);
  };

  traversal(root);

  return queue;
};

let InOrderResult = InOrder(tree);
console.log("InOrder Result: ", InOrderResult);
// [2, 7, 10, 5, 6, 11, 2, 4, 9, 5];
