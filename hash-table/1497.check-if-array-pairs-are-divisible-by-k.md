## **題目**

>Given an array of integers arr of even length n and an integer k.
>
>We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.
>
>Return true If you can find a way to do that or false otherwise.

Example:
```js
Input: arr = [1,2,3,4,5,6], k = 7
Output: true
Explanation: Pairs are (1,6),(2,5) and(3,4).
```
```js
Input: arr = [1,2,3,4,5,6], k = 10
Output: false
Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.
```

## **翻譯**

輸入會給一個長度為偶數的陣列 n 及整數 k，將陣列分為 n / 2 個組合，判斷是否每個組合的和都可以被 k 整除，是的話回傳 true，不是的話回傳 fasle。

## **思路**

#### **極限值/特殊狀況**

-  陣列元素可能會有 0 或是負數的情況。

#### **哪種資料結構解**

hash table + counter

#### **大概會怎麼解**

若可以被 k 整除，+ k 一定也可以。

把值都縮小為 ÷ k 的餘數，並把負數都 + k 轉為正整數，當作 hash table 的 key，值為出現次數。

遍歷陣列，並檢查 hash table 中是否有可以配對的數字 (k - hash 值)。

最後檢查是否有達到匹配次數 arr.length / 2。

## **型別**

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
*/
```

## **解題**

```js
var canArrange = function (arr, k) {
  // 需要被匹配陣列長度 ÷ 2 次
  let index = arr.length / 2;
  let counter = new Map();
  for (let el of arr) {
    // 將 el 都變成 ÷ k 的餘數
    el %= k;
    /*
      若小於 el < 0，則 + k，使其變為正數，
      因為若可以被 k 整除，+ k 一定也可以 
    */
    if (el < 0) el += k;

    // 檢查是否可以配對，成功就進入下一迴圈
    // if el === 0，pairKey 應為 0
    // else，pairKey 應為 k - el
    let pairKey = el === 0 ? 0 : k - el;
    let pairValue = counter.get(pairKey);
    if (pairValue) {
      counter.set(pairKey, pairValue - 1);
      index--;
      continue;
    }

    // 把未配對所有餘數記錄起來
    let value = counter.get(el);
    if (value) counter.set(el, value + 1);
    else counter.set(el, 1);
  }

  return index === 0;
};
```