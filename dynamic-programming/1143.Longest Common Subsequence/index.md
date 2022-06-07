# **題目**

>Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
>
>A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
>
>For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

## **翻譯**

有兩個字串 text1, text2，求最長共同子序列的長度。

子序列的意思是一個字串 B 是根據另一個字串 A 產生的，不改變順序的情況下，取 A 中的某些字元組成新的字串 B。

舉例來說， "ace" 就是 "abcde" 的其中一個子序列，共同子序列就是兩個字串同時都擁有的子序列。

Example:

```js
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
```

Example2:

```js
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
```

## **思路**

### **一、極限值/特殊狀況**

- 若沒有共同子序列則回傳 0

### **二、哪種資料結構解**

dynamic programmer 動態規劃

### **三、大概會怎麼解**

- 若不懂動態規劃請先去了解，可參考這兩篇文章:
  - [dynamic-programming - programiz](https://www.programiz.com/dsa/dynamic-programming)
  - [longest-common-subsequence - programiz](https://www.programiz.com/dsa/longest-common-subsequence)
  
- 根據動態規劃的規則，逐字比較。
- 用二維陣列儲存比較後的結果。

## **型別**

```js
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
```

## **解題**

```js
var longestCommonSubsequence = function (str1, str2) {
  let m = str1.length;
  let n = str2.length;
  // 建立一個 n+1 * m+1 的二維陣列
  const table = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // 判斷是否欄與列相等，並存下結果
  for (i = 1; i <= m; i++) {
    for (j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1])
        table[i][j] = table[i - 1][j - 1] + 1;
      else table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
    }
  }

  return table[m][n];
};
```
