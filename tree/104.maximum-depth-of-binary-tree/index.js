/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
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
// @lc code=end
