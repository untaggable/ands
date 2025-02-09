/**
 * Leetcode
 * Difficulty: Medium
 * https://leetcode.com/problems/sum-of-variable-length-subarrays/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const subarraySum = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const start = Math.max(0, i - nums[i]);

    for (let j = start; j <= i; j += 1) {
      sum += nums[j];
    }
  }

  return sum;
};
