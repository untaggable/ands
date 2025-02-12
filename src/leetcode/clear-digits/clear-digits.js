/**
 * Leetcode
 * Difficulty: Easy
 * https://leetcode.com/problems/clear-digits/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const clearDigits = function (s) {
  let current = s[0] ?? '';

  for (let i = 1; i < s.length; i += 1) {
    const x = isDigit(current.at(-1));
    const y = isDigit(s[i]);

    if (!x && y) {
      current = current.slice(0, -1);
      continue;
    }

    current += s[i];
  }

  return current;
};

function isDigit(c) {
  return !Number.isNaN(Number(c));
}
