import { longestConsecutive } from "./solution";

describe("128. Longest Consecutive Sequence", () => {
  test("Example 1: [100, 4, 200, 1, 3, 2]", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  test("Example 2: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]", () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });

  test("Empty array", () => {
    expect(longestConsecutive([])).toBe(0);
  });

  test("Single element", () => {
    expect(longestConsecutive([1])).toBe(1);
  });

  test("No consecutive numbers", () => {
    expect(longestConsecutive([10, 30, 50])).toBe(1);
  });

  test("All same numbers", () => {
    expect(longestConsecutive([1, 1, 1, 1])).toBe(1);
  });

  test("Negative numbers", () => {
    expect(longestConsecutive([-3, -2, -1, 0, 1])).toBe(5);
  });
});
