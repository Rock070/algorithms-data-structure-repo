/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @param {TreeNode} rootsss
 * @return {boolean}
 */

var isValidBST = function(root, max = null, min = null) {
  if (!root) return true
  if (max && root.val >= max.val) return false
  if (min && root.val <= min.val) return false
  return isValidBST(root.left, root, min) && isValidBST(root.right, max, root);
};

const tree = {
  val: 5,
  left: {
    val: 4,
    left: null,
    right: null,
  },
  right: {
    val: 6,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
}
// [(5, 1, 4, null, null, 3, 6)];
isValidBST(tree);
// @lc code=end

