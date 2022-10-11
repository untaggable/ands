import { pivotIndex } from './find-pivot-index';

describe('[Leetcode] pivotIndex', () => {
  test('example #1', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  });

  test('example #2', () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1);
  });

  test('example #3', () => {
    expect(pivotIndex([2, 1, -1])).toBe(0);
  });
});
