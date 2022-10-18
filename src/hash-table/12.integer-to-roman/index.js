/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */

let keys = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
let values = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
var intToRoman = function(num) {
  let result = ""

  for (let i = 0; i < keys.length; i++) {
    result += keys[i].repeat(Math.floor(num / values[i]))
    num = num % values[i]
    if (num === 0) break
  }

  return result
};
// @lc code=end

