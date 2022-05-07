## **題目**

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

## **翻譯**

把純數字翻譯成羅馬數字符號，2 可以表示為 II；12 可以表示為 XII；27 為 XXVII。
羅馬符號通常跟由大到小排序，但是小的數字可以排在大的數字左邊，當作減項，像數字 4 的符號不是 IIII，而是 IV，數字 9 不是 VIIII，而是 IX，數字 40 為 XL、數字 90 為 XC。

Example:

```js
Input: num = 3
Output: "III"
```

```js
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
```

```js
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

## **思路**

#### **一、極限值/特殊狀況**

1. 4 跟 9 開頭的數字表示規則跟一般的不一樣

#### **二、哪種資料結構解**

Hash Table

#### **三、大概會怎麼解**

把所有的符號跟相對應的數字對照列出來，input 的 num 除以對照表每個數字，得出符號跟餘數。

## **型別**

```js
/**
 * @param {number} num
 * @return {string}
 */
```

## **解題**

```js
let keys = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
let values = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
var intToRoman = function(num) {
  let result = ""

  for (let i = 0; i < keys.length; i++) {
    result += keys[i].repeat(Math.floor(num / values[i]))
    num = num % values[i]
    if (num === 0) break
  }

  return result
};
```


其實上面是我寫了兩個下午後，參考別人解法再寫出來的第二個解法，原本自己第一個解法很複雜，但其實時間跟空間並沒有好很多，易讀性也低，記錄一下:

```js
// 對照表
let DICTIONARY_LIST = [
  { key: "M", value: 1000 },
  { key: "D", value: 500 },
  { key: "C", value: 100 },
  { key: "L", value: 50 },
  { key: "X", value: 10 },
  { key: "V", value: 5 },
  { key: "I", value: 1 },
];

// findProp：根據現在的 key 去找到 index + num 的屬性
const findProp = (key, num) => {
  let index = DICTIONARY_LIST.findIndex((prop) => prop.key === key);
  let targetprop = DICTIONARY_LIST[index + num];
  return targetprop;
 };
// eliminateNumber： 刪除第一個數字，並排除 0 開頭的情況
 const eliminateNumber = (num) => {
   let str = num.toString();
   // 切割第一個數字
   str = str.slice(1, str.length);
   // 排除 0 為開頭的情況
   const reg = new RegExp("(0*)([1-9]+[0-9]+)", "g");
   return Number(str.replace(reg, "$2"));
 };

// 主程式
var intToRoman = function(num) {
  let result = ""

  /* 
    遍歷對照表，將 num 除以每個數字，除完之後，去判斷餘數是否在當前 index 與下個 index 的 value 之間，若是的話去判斷開頭是 4 還是 9，分別去抓對應的羅馬符號，並刪除第一個數字。
  */
  for ({ key, value} of DICTIONARY_LIST) {
    let quotient = parseInt(num / value);
    let remainder = num % value;
    result += key.repeat(quotient);
    num = remainder;

    if (num === 0) break;
    let targetProp = findProp(key, 1);
    if (targetProp !== undefined) {
      if (remainder < value && remainder > targetProp.value) {
        const firstNumber = remainder.toString()[0];
        switch (firstNumber) {
          case "9": 
            targetProp = findProp(key, 2);
          case "4": {
            if (targetProp !== undefined) {
              result += targetProp.key + key;
              num = eliminateNumber(num);
            }
            break;
          }
        }
      }
    }
    if (num === 0) break;
  }

  return result
};
```

