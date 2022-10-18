/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */

var isValidSerialization = function (preorder) {
  /*  
      一個父一定要有兩個子，count === parent * 2 - children
      父的數量會是子的兩倍，故：
        if node !== null，就 +2
        else node === null 就不加
    
    count 最後要等於 0，中途如果 count < 0 就 fasle
    */
  const newOrder = preorder.split(",");
  let count = 1;
  for (item of newOrder) {
    if (--count < 0) return false;
    if (item !== "#") count += 2;
  }

  return count === 0;
};
// @lc code=end
