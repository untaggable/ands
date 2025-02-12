/**
 * Leetcode #3432
 * Difficulty: Easy
 * https://leetcode.com/problems/count-partitions-with-even-sum-difference/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const countPartitions = function (nums) {
  const total = nums.reduce((acc, num) => acc + num, 0);
  let left = 0;
  let answer = 0;

  for (let i = 0; i < nums.length - 1; i += 1) {
    left += nums[i];
    const sum = left - (total - left);

    if (sum % 2 === 0) {
      answer += 1;
    }
  }

  return answer;
};
