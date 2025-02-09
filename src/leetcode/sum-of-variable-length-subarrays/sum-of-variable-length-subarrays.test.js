import { subarraySum } from './sum-of-variable-length-subarrays';

describe('subarraySum', () => {
  test('Example 1', () => {
    expect(subarraySum([2, 3, 1])).toBe(11);
  });

  test('Example 2', () => {
    expect(subarraySum([3, 1, 1, 2])).toBe(13);
  });
});
