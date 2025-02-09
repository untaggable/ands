import { isArraySpecial } from './special-array-i';

describe('isArraySpecial', () => {
  test('Example 1', () => {
    expect(isArraySpecial([2, 3, 4, 5])).toBe(true);
  });

  test('Example 2', () => {
    expect(isArraySpecial([1, 2, 3, 4])).toBe(true);
  });

  test('Example 3', () => {
    expect(isArraySpecial([2, 2, 3, 4])).toBe(false);
  });
});
