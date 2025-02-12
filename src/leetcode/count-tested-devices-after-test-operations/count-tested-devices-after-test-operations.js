/**
 * Leetcode #2960
 * Difficulty: Easy
 * https://leetcode.com/problems/count-tested-devices-after-test-operations/
 */
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
export const countTestedDevices = function (batteryPercentages) {
  const n = batteryPercentages.length;
  let answer = 0;

  for (let i = 0; i < n; i += 1) {
    if (batteryPercentages[i] === 0) {
      continue;
    }

    answer += 1;

    for (let j = i + 1; j < n; j += 1) {
      batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
    }
  }

  return answer;
};
