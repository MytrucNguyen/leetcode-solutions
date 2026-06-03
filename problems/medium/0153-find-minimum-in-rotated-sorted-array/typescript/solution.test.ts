import { findMin } from "./solution";

describe("153. Find Minimum in Rotated Sorted Array", () => {
  test("Example 1: [3,4,5,1,2]", () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
  });

  test("Example 2: [4,5,6,7,0,1,2]", () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  });

  test("Example 3: not rotated [11,13,15,17]", () => {
    expect(findMin([11, 13, 15, 17])).toBe(11);
  });

  test("Single element", () => {
    expect(findMin([1])).toBe(1);
  });

  test("Two elements rotated", () => {
    expect(findMin([2, 1])).toBe(1);
  });

  test("Two elements not rotated", () => {
    expect(findMin([1, 2])).toBe(1);
  });

  test("Minimum at the end", () => {
    expect(findMin([2, 3, 4, 5, 1])).toBe(1);
  });

  test("Minimum at the start", () => {
    expect(findMin([1, 2, 3, 4, 5])).toBe(1);
  });

  test("Rotated by one", () => {
    expect(findMin([5, 1, 2, 3, 4])).toBe(1);
  });
});
