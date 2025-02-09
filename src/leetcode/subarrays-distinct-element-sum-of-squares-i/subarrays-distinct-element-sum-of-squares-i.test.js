import { sumCounts } from './subarrays-distinct-element-sum-of-squares-i';

describe('sumCounts', () => {
  test('Example 1', () => {
    expect(sumCounts([1, 2, 1])).toBe(15);
  });

  test('Example 2', () => {
    expect(sumCounts([1, 1])).toBe(3);
  });
});
