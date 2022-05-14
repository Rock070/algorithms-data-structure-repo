/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q)  return true
  if (p?.val !== q?.val)  return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const A = undefined
const B = 
  {
    val: 0,
    left: null,
    right: null,
  }



isSameTree(A, B)
// @lc code=end

