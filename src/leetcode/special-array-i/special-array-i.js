/**
 * Leetcode
 * Difficulty: Easy
 * https://leetcode.com/problems/special-array-i/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const isArraySpecial = function (nums) {
  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] % 2 === nums[i + 1] % 2) {
      return false;
    }
  }

  return true;
};
