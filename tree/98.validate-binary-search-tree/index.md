## **題目**

>Given the root of a binary tree, determine if it is a valid binary search tree (BST).


>A valid BST is defined as follows:
>
>1. The left subtree of a node contains only nodes with keys less than the node's key.
>2. The right subtree of a node contains only nodes with keys greater than the node's key.
>3. Both the left and right subtrees must also be binary search trees.


## **翻譯**

會給一個二元樹，然後檢查是不是一個合格的「二元搜尋樹」。

二元搜尋樹的規則：

1. 左邊子樹的節點都必須小於根節點
2. 右邊子樹的節點都必須大於根節點
3. 所有的子樹都必須符合以上兩點

Example1:

```js
/*
    2
  /   \
 1     3
*/
Input: root = [2, 1, 3]
Output: true
```

Example2:

```js
/*
          5
       /     \
     1         4
   /   \     /   \
 null null  3     6
*/
Input: root = [5, 1, 4, null, null, 3, 6]
Output: false
// 因為 4 的節點值必須比根節點 5 大
```

## **思路**

#### **一、極限值/特殊狀況**

要注意二元搜尋樹與二元樹定義不一樣

1. 右邊所有節點都必須比 root 大
2. 左邊所有節點都必須比 root 小
3. 所有子樹都必須符合上述兩點

下面這個樹就不符合，因為 3 的節點數字應該要比根節點 5 還要大。

```js
/*
          5
       /     \
     4         6
   /   \     /   \
 null null  3     7
*/
```

#### **二、哪種資料結構解**

- Tree + 深度優先搜尋法

#### **三、大概會怎麼解**

- 使用遞迴
- 根據二元搜尋樹定義，每個節點都有最大、最小值區間
- 檢查每個節點是否符上述第二點

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
 * @param {TreeNode} root
 * @return {boolean}
 */
```

## **解題**

```js
var isValidBST = function(root, max = null, min = null) {
  if (!root) return true
  if (max && root.val >= max.val) return false
  if (min && root.val <= min.val) return false
  return isValidBST(root.left, root, min) && isValidBST(root.right, max, root);
};
```
這一題本來沒有想到可以用最大最小值來判斷，也沒有注意到二元搜尋樹的定義，只是想用 DFS 來跑每個節點，並判斷是否比自己的根節點大，所以測試沒有過。

後來參考了最佳解之一，瞭解可以在遞迴的時候，傳入該節點應符合的最大最小值，並在錯誤的時候 return false 結束函式。
