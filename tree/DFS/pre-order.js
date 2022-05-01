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
let deepCopy = value => JSON.parse(JSON.stringify(value))

const preOrder = (root) => {
  let queue = []

  const traversal = node => {
    queue.push(node.value)
    if (node.children !== null) {
      for (let i = 0; i < node.children.length; i++) {
        traversal(node.children[i]);
      }
    }
  }

  traversal(root);

  return queue
}

let preResult = preOrder(tree)
console.log('PreOrder Result', preResult);
// [10, 9, 8, 6, 5, 11, 7, 1, 4, 2, 3]