import { subarraySum } from "./solution";

describe("560. Subarray Sum Equals K", () => {
  test("Example 1: [1,1,1], k=2", () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2);
  });

  test("Example 2: [1,2,3], k=3", () => {
    expect(subarraySum([1, 2, 3], 3)).toBe(2);
  });

  test("Single element equals k", () => {
    expect(subarraySum([3], 3)).toBe(1);
  });

  test("Single element not k", () => {
    expect(subarraySum([1], 2)).toBe(0);
  });

  test("Negative numbers", () => {
    expect(subarraySum([1, -1, 1, -1], 0)).toBe(4);
  });

  test("Entire array sums to k", () => {
    expect(subarraySum([1, 2, 3], 6)).toBe(1);
  });

  test("Multiple overlapping subarrays", () => {
    expect(subarraySum([0, 0, 0], 0)).toBe(6);
  });

  test("k is negative", () => {
    expect(subarraySum([-1, -1, 1], -2)).toBe(1);
  });
});
