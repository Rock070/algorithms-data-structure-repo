/*
 * @lc app=leetcode id=1497 lang=javascript
 *
 * [1497] Check If Array Pairs Are Divisible by k
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */

var canArrange = function (arr, k) {
  let index = arr.length / 2;
  let counter = new Map();
  for (let el of arr) {
    // 將 el 都變成 ÷ k 的餘數
    el %= k;
    /*
      若小於 el < 0，則 + k，使其變為正數，
      因為若可以被 k 整除，+ k 一定也可以 
    */
    if (el < 0) el += k;

    // 檢查是否可以配對，成功就進入下一迴圈
    // if el === 0，pairKey 應為 0
    // else，pairKey 應為 k - el
    let pairKey = el === 0 ? 0 : k - el;
    let pairValue = counter.get(pairKey);
    if (pairValue) {
      counter.set(pairKey, pairValue - 1);
      index--;
      continue;
    }

    // 把未配對所有餘數記錄起來
    let value = counter.get(el);
    if (value) counter.set(el, value + 1);
    else counter.set(el, 1);
  }

  return index === 0;
};
// @lc code=end

