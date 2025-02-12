/**
 * Leetcode #3168
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const minimumChairs = function (s) {
  let current = 0;
  let max = 0;

  for (const c of s) {
    const value = c === 'E' ? 1 : -1;
    current += value;
    max = Math.max(max, current);
  }

  return max;
};
