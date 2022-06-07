# **題目**

>The Tribonacci sequence Tn is defined as follows:
>
>T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
>
>Given n, return the value of Tn.
>

## **翻譯**

Tribonacci 數列是費氏數列的變形，規則如下：

`T0 = 0`, `T1 = 1`, `T2 = 1`, `Tn+3 = Tn + Tn+1 + Tn+2`

input n, 要輸出 Tn

Example:

```js
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
```

Example2:

```js
Input: n = 25
Output: 1389537
```

## **思路**

### **一、極限值/特殊狀況**

無

### **二、哪種資料結構解**

dynamic programming

### **三、大概會怎麼解**

- 儲存每次計算的結果
- 計算 n 次，回傳結果

## **型別**

```js
/**
 * @param {number} n
 * @return {number}
 */
```

## **解題**

```js
var tribonacci = function(n) {
  let table = [0, 1, 1]
  
  for (let i = 3; i <= n; i++) {
      table[i] = table[i - 1] + table[i - 2] + table[i - 3]
  }

  return table[n]
};
```
