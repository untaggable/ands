import { minimumChairs } from './minimum-number-of-chairs-in-a-waiting-room';

describe('minimumChairs', () => {
  test('Example 1', () => {
    expect(minimumChairs('EEEEEEE')).toBe(7);
  });

  test('Example 2', () => {
    expect(minimumChairs('ELELEEL')).toBe(2);
  });
});
