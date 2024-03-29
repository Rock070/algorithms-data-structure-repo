## **題目**

>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
>
>You may assume that each input would have exactly one solution, and you may not use the same element twice.


## **翻譯**

給一個整數陣列跟整數 target，請找出陣列中哪兩個元素相加會等於 target 且為唯一組合，並返回該組合各自的 index。

Example:

```js
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## **思路**

#### **一、極限值/特殊狀況**

- 負數情況
- target 為 0 的情況

#### **二、哪種資料結構解**

counter + hash table

#### **三、大概會怎麼解**

- 用 counter 記錄尚未匹配的值與 index
- 匹配則返回

## **型別**

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
```

## **解題**

```js
var twoSum = function(nums, target) {
  const counter = new Map()

  for (index in nums) {
    let num = nums[index]

    // 匹配
    let pairKey = target - num;
    let pairIndex = counter.get(pairKey)
    if (pairIndex) return [pairIndex, index];
    // 未匹配則計入 counter 內
    counter.set(num, index);
  }
};
```