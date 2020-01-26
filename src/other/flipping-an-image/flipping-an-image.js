/**
 * Leetcode #832
 * https://leetcode.com/problems/flipping-an-image/
 */
/**
 * @param {number[][]} binMatrix
 * @return {number[][]}
 */
export const flipAndInvertImage = binMatrix => binMatrix.map(arr => arr.reverse().map(bin => bin ^ 1));
