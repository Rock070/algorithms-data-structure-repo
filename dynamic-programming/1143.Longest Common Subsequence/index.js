var longestCommonSubsequence = function (str1, str2) {
  let m = str1.length;
  let n = str2.length;
  // 建立一個 n+1 * m+1 的二維陣列
  const table = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // 判斷是否欄與列相等，並存下結果
  for (i = 1; i <= m; i++) {
    for (j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) table[i][j] = table[i - 1][j - 1] + 1;
      else table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
    }
  }

  return table[m][n];
};