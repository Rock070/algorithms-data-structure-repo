const bubbleSort = A => {
  // 一共要跑 i 輪
  for (let i = 0; i < A.length; i++) {
    // 從第一個元素開始不斷跑到 A.length - 1 - i
    // 原本要跑到 A.length - 1
    // 但因為後面的都排序好了，所以每輪再 - i 個，只要跑道 A.length - 1 - i 個就好 
    for (let j = 0; j < A.length - 1 - i; j++) {
      if (A[j] > A[j + 1]) {
        [A[j], A[j + 1]] = [A[j + 1], A[j]]
      }
    }
  }
  return A
}
const A = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70];

console.log(bubbleSort(A))