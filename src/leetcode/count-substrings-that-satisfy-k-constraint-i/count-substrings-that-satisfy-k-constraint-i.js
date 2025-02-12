/**
 * Leetcode
 * Difficulty: Easy
 * https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
export const countKConstraintSubstrings = function (s, k) {
  let answer = 0;

  for (let i = 0; i < s.length; i += 1) {
    let zeros = 0;
    let ones = 0;

    for (let j = i; j < s.length; j += 1) {
      if (s[j] === '0') {
        zeros += 1;
      } else {
        ones += 1;
      }

      if (zeros > k && ones > k) {
        break;
      }

      answer += 1;
    }
  }

  return answer;
};
