## **題目**

>Given the roots of two binary trees p and q, write a function to check if they are the same or not.

## **翻譯**

有兩個二元樹，請比較兩個是否結構、節點值皆相同

Example:

```js
    1       1 
   /  \    /  \
  2    3  2    3

input: p = [1, 2, 3], q = [1, 2, 3]
Output: true
```
```js
    1    1 
   /      \
  2        2

input: p = [1, 2], q = [1, null, 2]
Output: false
```

## **思路**

#### **一、極限值/特殊狀況**

- [], [0] => 是 false，因為第一個樹沒有節點，第二個樹只有一個節點。

#### **二、哪種資料結構解**

- Tree + DFS

#### **三、大概會怎麼解**

- 使用遞迴
- 判斷每個節點的是否相同

## **型別**

```js
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
```

## **解題**

```js
var isSameTree = function(p, q) {
  if (!p && !q)  return true
  if (p?.val !== q?.val)  return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```