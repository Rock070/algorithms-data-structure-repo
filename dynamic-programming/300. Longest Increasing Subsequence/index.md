[LeetCode 題目](https://leetcode.com/problems/longest-increasing-subsequence/submissions/)

[LeetCode 解題連結](https://leetcode.com/submissions/detail/738236000/)

# **題目**

>Given an integer array nums, return the length of the longest strictly increasing subsequence.
>
>A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

## **翻譯**

給一個數字陣列，要輸出最長的嚴格遞增子序列的長度。
子序列就是在不影響順序的情況下，把原序列中的某些數字刪除，如 [3, 6, 2, 7] 就是 [0,3,1,6,2,2,7] 的子序列。

這邊特別要求了 **嚴格遞增子序列**，代表子序列的順序必須是遞增的。

Example:

```js
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```

Example2:

```js
Input: nums = [0,1,0,3,2,3]
Output: 4
```

## **思路**

### **一、極限值/特殊狀況**

- 長度為 1 的時候

### **二、哪種資料結構解**

動態規劃 dynamic programming

### **三、大概會怎麼解**

- 用一個陣列紀錄每個 index 所累積的最長嚴格遞增子序列 => LIS
- 從數列的最後開始迴圈 i = 陣列長度 -> 0
- 在每個 index 再進入一個迴圈 j =  i+1 -> 陣列長度
- 判斷當前 index 的數字若小於 nums[j] 就進入比較
- 比較 當前 index 的序列長度與 LIS[j] + 1 誰比較大。
- 比較大的長度就取代目前 LIS[index] 的值

## **型別**

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
```
## **時間複雜度**

0(n^2)

## **解題**

```js
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
```

參考影片

- [Longest Increasing Subsequence - Dynamic Programming - Leetcode 300](https://www.youtube.com/watch?v=cjWnW0hdF1Y)