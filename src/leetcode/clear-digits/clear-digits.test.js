import { clearDigits } from './clear-digits';

describe('clearDigits', () => {
  test('Example 1', () => {
    expect(clearDigits('abc')).toBe('abc');
  });

  test('Example 2', () => {
    expect(clearDigits('cb34')).toBe('');
  });
});
