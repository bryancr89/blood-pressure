
import MockDate from 'mockdate';

describe('Store', () => {
  beforeAll(() => {
    // hardcoded date for consistency in tests and snapshots on all machines
    MockDate.set(new Date("1/31 23:14:01"));
  });
  afterAll(() => MockDate.reset());

  it('should display results when necessary data is provided', () => {
  });
});