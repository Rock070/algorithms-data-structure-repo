## **題目**

>A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## **翻譯**

尋找樹最大的深度是多少，如下圖就是 3。

![](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

Example1:

```js
Input: root = [3,9,20,null,null,15,7]
Output: 3
```
Example2:

```js
Input: root = [1,null,2]
Output: 2
```

## **思路**

#### **一、極限值/特殊狀況**

- 無

#### **二、哪種資料結構解**

- 樹狀

#### **三、大概會怎麼解**

- 利用 max 紀錄最大深度
- 使用遞迴
- 遞迴函式內 count 記錄目前深度
- 若 count > max 就取代為最新的 max 

## **型別**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
```

## **解題**

```js
var maxDepth = function (root) {
  let max = 0;
  const traversal = (node, count = 0) => {
    if (node === null) return;
    count++;
    if (count > max) max = count;
    if (node?.left) traversal(node.left, count);
    if (node?.right) traversal(node.right, count);
  };
  traversal(root);
  return max;
};
```