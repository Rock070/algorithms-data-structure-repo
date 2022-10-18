[LeetCode 題目](https://leetcode.com/problems/greatest-common-divisor-of-strings/submissions/)

[LeetCode 解題連結](https://leetcode.com/submissions/detail/824839099/)

# **題目**

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

## **翻譯**

求 str1 & str2 的最大公因數 x

Example:

```js
Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:
```

Example2:

```js
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
```

## **思路**

### **一、極限值/特殊狀況**

- 無

### **二、哪種資料結構解**

數學題

### **三、大概會怎麼解**

[歐幾里德演算法](https://en.wikipedia.org/wiki/Euclidean_algorithm)

兩個有最大公因數的數字，大的一方減去小的，仍然可以被最大公因數整除。基於這個原理，持續相減直到兩個數字變成最大公因數。

如 252, 105 的最大公因數為 21，

1. 252 - 105 = 147, 147 可以被 21 整除 

`147 105`

2. 147 - 105 = 42, 41 可以被 21 整除

`42 105`

3. 105 - 42 = 63, 63 可以被 21 整除

`42 63`

4. 63 - 42 = 21, 21 可以被 21 整除

`42 21`

5 42 - 21 = 21, 21 可以被 21 整除

`21 21`

```
252 105
147 105
42  105
42  63
42  21
21  21
```

由上述的公式去計算，如果減到最後兩個數字都變成 1，則代表沒有最大公因數。

同樣的邏輯用在尋找最大公因數的字串上，有最大公因數的兩個數字，相加也會可被整除。

```js
if str1 + str2 !== str2 + str1，代表兩者沒有最大公因數
else if str1 === str2 代表 str1 為最大公因數
else if 遞迴相減，直到兩個字串為同樣的或沒有最大公因數
```

## **時間複雜度**

0(n)

## **解題**

```js
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return ''
    else if (str1 === str2) return str1
    else if (str1.length > str2.length) return gcdOfStrings(str1.slice(str2.length), str2)
    else return gcdOfStrings(str2.slice(str1.length), str1)
};
```
