/**
 * Leetcode #2553
 * Difficulty: Easy
 * https://leetcode.com/problems/separate-the-digits-in-an-array/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const separateDigits = function (nums) {
  const answer = [];

  for (const num of nums) {
    const digits = String(num).split('');

    for (const digit of digits) {
      answer.push(Number(digit));
    }
  }

  return answer;
};
