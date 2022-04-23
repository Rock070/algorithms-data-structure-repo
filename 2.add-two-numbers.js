/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 每個節點相加，若大於 10 則用 carry 記錄，下個節點要一起計算

var addTwoNumbers = function(l1, l2) {
  // 先建立一個 list 連接串列
  let list = new ListNode(0)
  // 再建立一個 head 指向 list 的頭，也是要輸出的結果
  let head = list

  // 每個
  let sum = 0
  let carry = 0

  while (l1 !== null || l2 !== null) {
    if (carry !== 0) {
      sum += carry;
      carry = 0;
    }

    if (l1 !== null) sum += l1.val;
    if (l2 !== null) sum += l2.val;

    carry = sum >= 10 ? Math.floor(sum / 10) : 0;
    list.val = sum - carry * 10;
    

    // 為下次迴圈做準備

    // l1, l2 指向下一個節點
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;

    /* 
      若要繼續迴圈，則先建立 list 的下一個節點，值預設為 0。
      然後把 list 指向建好的新節點
    */
    if (l1 !== null | l2 !== null) {
      list.next = new ListNode(0);
      list = list.next;
    }
    // 把 sum 歸零
    sum = 0;
  }

  return head;
};
// @lc code=end