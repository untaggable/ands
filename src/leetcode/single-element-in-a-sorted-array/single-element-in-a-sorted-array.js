/**
 * Leetcode #540
 * Difficulty: Medium
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNonDuplicate = nums => {
  const map = {};

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    map[num] = map[num] === undefined;
  }

  return Number(Object.keys(map).find(key => map[key] === true));
};
