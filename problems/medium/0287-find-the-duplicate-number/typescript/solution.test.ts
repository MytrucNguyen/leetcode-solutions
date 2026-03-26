import { findDuplicate } from "./solution";

describe("287. Find the Duplicate Number", () => {
  test("Example 1: [1,3,4,2,2]", () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });

  test("Example 2: [3,1,3,4,2]", () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
  });

  test("Example 3: [3,3,3,3,3]", () => {
    expect(findDuplicate([3, 3, 3, 3, 3])).toBe(3);
  });

  test("Two elements", () => {
    expect(findDuplicate([1, 1])).toBe(1);
  });

  test("Duplicate at the end", () => {
    expect(findDuplicate([2, 1, 3, 4, 4])).toBe(4);
  });

  test("Duplicate at the start", () => {
    expect(findDuplicate([1, 1, 2, 3, 4])).toBe(1);
  });

  test("Larger array", () => {
    expect(findDuplicate([1, 4, 6, 3, 2, 5, 7, 3])).toBe(3);
  });

  test("Duplicate appears many times", () => {
    expect(findDuplicate([2, 2, 2, 2, 1])).toBe(2);
  });
});
