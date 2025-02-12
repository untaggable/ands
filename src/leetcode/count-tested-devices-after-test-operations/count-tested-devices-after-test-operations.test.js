import { countTestedDevices } from './count-tested-devices-after-test-operations';

describe('countTestedDevices', () => {
  test('Example 1', () => {
    expect(countTestedDevices([1, 1, 2, 1, 3])).toBe(3);
  });

  test('Example 2', () => {
    expect(countTestedDevices([0, 1, 2])).toBe(2);
  });
});
