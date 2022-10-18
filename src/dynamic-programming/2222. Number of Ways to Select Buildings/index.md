# **題目**

>You are given a 0-indexed binary string s which represents the types of buildings along a street where:
>
>s[i] = '0' denotes that the ith building is an office and
s[i] = '1' denotes that the ith building is a restaurant.
As a city official, you would like to select 3 buildings for random inspection. However, to ensure variety, no two consecutive buildings out of the selected buildings can be of the same type.
>
>For example, given s = "001101", we cannot select the 1st, 3rd, and 5th buildings as that would form "011" which is not allowed due to having two consecutive buildings of the same type.
Return the number of valid ways to select 3 buildings.
>

## **翻譯**

街上有很多建築，0 代表這個建築物是辦公室，1 代表這個建築物是餐廳，要隨便選三間，但為了多樣性，要確保相連的兩間類型不一樣。如街上的建築物是這樣: "001101"，那選 index 第 1, 3, 5 的建築物會是 "011"，其中 "11" 重複了，這樣就不行。

Example:

```js
Input: s = "001101"
Output: 6
Explanation: 
The following sets of indices selected are valid:
- [0,2,4] from "001101" forms "010"
- [0,3,4] from "001101" forms "010"
- [1,2,4] from "001101" forms "010"
- [1,3,4] from "001101" forms "010"
- [2,4,5] from "001101" forms "101"
- [3,4,5] from "001101" forms "101"
No other selection is valid. Thus, there are 6 total ways.
```

Example2:

```js
Input: s = "11100"
Output: 0
Explanation: It can be shown that there are no valid selections.
```


## **思路**

### **一、極限值/特殊狀況**

- 無

### **二、哪種資料結構解**

- dynamic programming

### **三、大概會怎麼解**

- 只會有 "101", "010" 的答案
- 紀錄最小子字串出現的次數
  - n0 代表子字串 '0' 出現的次數
  - n1 代表子字串 '1' 出現的次數
  - n10 代表子字串 '10' 出現的次數
  - n01 代表子字串 '01' 出現的次數
  - Ans 代表 '101' & '010' 出現的總次數
- 把字串跑迴圈
  - 當前字串為 1 的時候，紀錄 n1++, n01 += n0, ans += n10
  - 當前字串為 0 的時候，紀錄 n0++, n10 += n0, ans += n01

## **型別**

```js
/**
 * @param {string} s
 * @return {number}
 */
```

## **解題**

<script src="https://gist.github.com/Rock070/d4587b05f4209867785e0c1a06f77442.js"></script>