import { searchInsert } from "./solution";

describe("35. Search Insert Position", () => {
  test("Example 1: target found", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  test("Example 2: insert in middle", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  test("Example 3: insert at end", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  test("Example 4: insert at beginning", () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });

  test("Single element, target found", () => {
    expect(searchInsert([1], 1)).toBe(0);
  });

  test("Single element, insert before", () => {
    expect(searchInsert([3], 1)).toBe(0);
  });

  test("Single element, insert after", () => {
    expect(searchInsert([3], 5)).toBe(1);
  });

  test("Target is first element", () => {
    expect(searchInsert([1, 3, 5, 6], 1)).toBe(0);
  });

  test("Target is last element", () => {
    expect(searchInsert([1, 3, 5, 6], 6)).toBe(3);
  });
});
