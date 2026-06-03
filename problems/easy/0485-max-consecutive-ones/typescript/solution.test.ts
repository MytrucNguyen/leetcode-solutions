import { findMaxConsecutiveOnes } from "./solution";

describe("485. Max Consecutive Ones", () => {
  test("Example 1: [1,1,0,1,1,1]", () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
  });

  test("Example 2: [1,0,1,1,0,1]", () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
  });

  test("All ones", () => {
    expect(findMaxConsecutiveOnes([1, 1, 1, 1])).toBe(4);
  });

  test("All zeros", () => {
    expect(findMaxConsecutiveOnes([0, 0, 0])).toBe(0);
  });

  test("Single one", () => {
    expect(findMaxConsecutiveOnes([1])).toBe(1);
  });

  test("Single zero", () => {
    expect(findMaxConsecutiveOnes([0])).toBe(0);
  });

  test("Ones at the start", () => {
    expect(findMaxConsecutiveOnes([1, 1, 1, 0, 1])).toBe(3);
  });

  test("Alternating", () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 0, 1])).toBe(1);
  });
});
