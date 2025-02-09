/**
 * Leetcode
 * Difficulty: Easy
 * https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const sumCounts = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const seen = new Set();

    for (let j = i; j < nums.length; j += 1) {
      seen.add(nums[j]);
      result += seen.size ** 2;
    }
  }

  return result;
};
