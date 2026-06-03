import { containsNearbyDuplicate } from "./solution";

describe("219. Contains Duplicate II", () => {
  test("Example 1: [1,2,3,1], k = 3", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  });

  test("Example 2: [1,0,1,1], k = 1", () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
  });

  test("Example 3: [1,2,3,1,2,3], k = 2", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });

  test("No duplicates", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4], 2)).toBe(false);
  });

  test("Duplicate but k = 0", () => {
    expect(containsNearbyDuplicate([1, 2, 1], 0)).toBe(false);
  });

  test("Adjacent duplicates", () => {
    expect(containsNearbyDuplicate([1, 1], 1)).toBe(true);
  });

  test("Single element", () => {
    expect(containsNearbyDuplicate([1], 1)).toBe(false);
  });

  test("Exact distance equals k", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4, 1], 4)).toBe(true);
  });
});
