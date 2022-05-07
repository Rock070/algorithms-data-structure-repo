const newNode = (value, left = null, right = null) => {
  return {
    value,
    left,
    right,
  }
}
const BinarySearchTree = () => {
  let root = null;
  let path = "";
  let queue = []

  const insertion = z => {
    if (root === null) {
      root = z;
      return;
    }
    let y = null;
    let x = root;

    while (x !== null) {
      y = x;
      if (z.value > x.value) x = x.right;
      else x = x.left;
    }

    if (z.value > y.value) y.right = z;
    else y.left = z;
  };

  const preOder = n => {
    if (n !== null) {
      path += n.value + ' '
      preOder(n.left)
      preOder(n.right)
    }
  }

  const InOrder = n => {
    if (n !== null) {
      InOrder(n.left);
      path += n.value + " ";
      InOrder(n.right);
    }
  }

  const PostOrder = n => {
    if (n !== null) {
      PostOrder(n.left);
      PostOrder(n.right);
      path += n.value + " ";
    }
  };

  const bftt = n => {
    if (n !== null) {
      queue.push(n)
      for (let i = 0; i < queue.length; i++){
        let currentNode = queue[i]
        if (currentNode !== null) {
          if (currentNode.left !== null) {
            queue.push(currentNode.left)
          }
          if (currentNode.right !== null) {
            queue.push(currentNode.right)
          }
        }
      }
    }
  }

  const getRoot = () => root;
  const getPath = () => path
  const getQueue = () => queue

  return {
    insertion,
    preOder,
    InOrder,
    PostOrder,
    bftt,
    getRoot,
    getPath,
    getQueue,
  };
}

/*
                  15
               __|
              |     
              6 
            __|__
           |     |
           5     13
         __|
        |
        1  
      __|__
     |     |
    -7     3
*/
const bst = BinarySearchTree();
const arr = [15, 6, 5, 1, 13, -7, 3]

arr.forEach(node => bst.insertion(newNode(node)))
let root = bst.getRoot();
console.log(root)
// bst.preOder(root);
// 15 6 5 13 1 -7 3
// bst.InOrder(root);
// -7 1 3 5 6 13 15
bst.PostOrder(root);
// -7 3 1 5 13 6 15
let path = bst.getPath();
console.log(path)


bst.bftt(root)
let queue = bst.getQueue()
console.log(queue);
// 15 6 5 13 1 -7 3