import { findLengthOfLCIS } from "./solution";

describe("674. Longest Continuous Increasing Subsequence", () => {
  test("Example 1: [1,3,5,4,7]", () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
  });

  test("Example 2: [2,2,2,2,2]", () => {
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1);
  });

  test("Single element", () => {
    expect(findLengthOfLCIS([1])).toBe(1);
  });

  test("Entire array increasing", () => {
    expect(findLengthOfLCIS([1, 2, 3, 4, 5])).toBe(5);
  });

  test("Entire array decreasing", () => {
    expect(findLengthOfLCIS([5, 4, 3, 2, 1])).toBe(1);
  });

  test("Longest streak at the end", () => {
    expect(findLengthOfLCIS([3, 1, 2, 3, 4])).toBe(4);
  });

  test("Multiple equal streaks", () => {
    expect(findLengthOfLCIS([1, 2, 3, 1, 2, 3])).toBe(3);
  });

  test("Negative numbers", () => {
    expect(findLengthOfLCIS([-3, -2, -1, 0, -5])).toBe(4);
  });
});
