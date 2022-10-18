## 題目

>You are given two non-empty linked lists representing two non-negative integers.
>
>Add the two numbers and return the sum as a linked list.

```js
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

## 思路

1. 用一個新的 linked list 來儲存相加後的結果。
2. 要注意 list1 跟 list2 長度可能不一樣。
3. 一個節點一節點相加。
4. 相加後可能比 9 還大，需要考慮進位的情況。

## 輸入輸出型別

題目提供的 class，`new ListNode(Number)` 可以創建一個新的實體。
```
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
```

## 解題
```js
// 每個節點相加，若大於 10 則用 carry 記錄，下個節點要一起計算

var addTwoNumbers = function (l1, l2) {
  // 先建立一個 list 連接串列
  let list = new ListNode(0);
  // 再建立一個 head 指向 list 的頭，也是要輸出的結果
  let head = list;
  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    // 把進位的值先加進去 sum，順便初始化 sum
    sum = carry;

    for (let i in arguments) {
      if (arguments[i] !== null) {
        sum += arguments[i].val;
        arguments[i] = arguments[i].next;
      }
    }

    carry = Math.floor(sum / 10);

    // list 的下個節點值為 sum 的個位數，並把 list 指向下一個節點
    list.next = new ListNode(sum % 10);
    list = list.next;
  }

  return head.next;
};
```