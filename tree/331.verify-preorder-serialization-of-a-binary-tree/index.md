## **題目**

![](https://assets.leetcode.com/uploads/2021/03/12/pre-tree.jpg)

>One way to serialize a binary tree is to use preorder traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as '#'.
>
>For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where '#' represents a null node.
>
>Given a string of comma-separated values preorder, return true if it is a correct preorder traversal serialization of a binary tree.

## **翻譯**

給一個字串，null 用 # 表示，判斷是不是 PreOrder 序列的 Binary Tree。

Example1:

```js
Input: preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true
```

Example2:

```js
Input: preorder = "1,#"
Output: false
```

Example3:

```js
Input: preorder = "9,#,#,1"
Output: false
```

## **思路**

#### **一、極限值/特殊狀況**

- 無

#### **二、哪種資料結構解**

- Tree

#### **三、大概會怎麼解**

- 每個父節點會有兩個子節點
- 利用 count 計算節點
  - 遇到節點就 -1 
  - 遇到非 # 節點就 + 2，代表他會有兩個子節點
- 最後 count === 0 即為 Binary Tree

## **型別**

```js
/**
 * @param {string} preorder
 * @return {boolean}
 */
```

## **解題**

```js
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
```