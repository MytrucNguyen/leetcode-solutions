import { pivotIndex } from "./solution";

describe("724. Find Pivot Index", () => {
  test("Example 1: [1,7,3,6,5,6]", () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  });

  test("Example 2: [1,2,3]", () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1);
  });

  test("Example 3: [2,1,-1]", () => {
    expect(pivotIndex([2, 1, -1])).toBe(0);
  });

  test("Pivot at the end", () => {
    expect(pivotIndex([-1, 1, 0])).toBe(2);
  });

  test("Single element", () => {
    expect(pivotIndex([1])).toBe(0);
  });

  test("All zeros", () => {
    expect(pivotIndex([0, 0, 0])).toBe(0);
  });

  test("Negative numbers", () => {
    expect(pivotIndex([-1, -1, -1, -1, 0, 1])).toBe(1);
  });

  test("No pivot exists", () => {
    expect(pivotIndex([1, 2, 4, 8])).toBe(-1);
  });
});
