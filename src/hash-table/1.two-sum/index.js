/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const counter = new Map()

  for (index in nums) {
    let num = nums[index]

    // 匹配
    let pairKey = target - num;
    let pairIndex = counter.get(pairKey)
    if (pairIndex) return [pairIndex, index];
    // 未匹配則計入 counter 內
    counter.set(num, index);
  }
};
// @lc code=end
