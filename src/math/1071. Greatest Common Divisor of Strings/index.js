/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */


/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/discuss/314698/Javascript-easy-to-understand-GCD-solution-with-explanation-(beats-97)
 * 252 105
 * 147 105
 * 42  105
 * 42  63
 * 42  21
 * 21  21
 */

 var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return ''
  else if (str1 === str2) return str1
  else if (str1.length > str2.length) return gcdOfStrings(str1.slice(str2.length), str2)
  else return gcdOfStrings(str2.slice(str1.length), str1)
};