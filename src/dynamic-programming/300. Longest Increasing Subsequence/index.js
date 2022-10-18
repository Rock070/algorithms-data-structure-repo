/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  const LIS = Array(nums.length).fill(1)
  let MAX = 1
   const len = nums.length
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
        if (nums[i] < nums[j]) {
            LIS[i] = Math.max(LIS[i], 1 + LIS[j])
            if (LIS[i] > MAX) MAX = LIS[i]
        }
    }
  }

   return MAX
};