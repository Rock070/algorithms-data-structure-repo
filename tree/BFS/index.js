const tree = {
  value: 2,
  children: [
    { 
      value: 7,
      children: [
        { value: 2, children: null },
        { value: 10, children: null },
        {
          value: 6,
          children: [
            { value: 5, children: null },
            { value: 11, children: null },
          ],
        },
      ],
    },
    {
      value: 5,
      children: [
        {
          value: 9,
          children: [
            { value: 4, children: null }
          ],
        },
      ],
    },
  ],
};

const BFTT = (root) => {
  let result = [];
  let queue = [];

  queue.push(root);

  let traversal = (tree) => {
    result.push(tree.value);
    let subTree = tree.children;
    if (subTree) {
      for (let i = 0; i < subTree.length; i++) {
        queue.push(subTree[i]);
      }
    }
  };

  while (queue.length !== 0) {
    traversal(queue[0]);
    queue.shift();
  }

  return result;
};
let result = BFTT(tree);
console.log(result);
// [2, 7, 5, 2, 10, 6, 9, 2, 11, 4];

