import { countPartitions } from './count-partitions-with-even-sum-difference';

describe('countPartitions', () => {
  test('Example 1', () => {
    expect(countPartitions([10, 10, 3, 7, 6])).toBe(4);
  });

  test('Example 2', () => {
    expect(countPartitions([1, 2, 2])).toBe(0);
  });

  test('Example 3', () => {
    expect(countPartitions([2, 4, 6, 8])).toBe(3);
  });
});
