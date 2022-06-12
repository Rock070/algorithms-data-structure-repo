var numberOfWays = function(s) {
  /*
      n0 => numnber of substring of 0
      n1 => numnber of substring of 1
      n01 => numnber of substring of 01
      n10 => numnber of substring of 10
      selection must be 101 or 010
  */
  let [n0, n1, n01, n10, ans] = [0, 0, 0, 0, 0]
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '1') {
          ans += n10
          n01 += n0
          n1++
      }
      else {
          ans += n01
          n10 += n1
          n0++
      }
  }
  return ans
};