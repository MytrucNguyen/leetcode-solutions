import { rob } from "./solution";

describe("198. House Robber", () => {
  test("Example 1: [1,2,3,1]", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  test("Example 2: [2,7,9,3,1]", () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });

  test("Single house", () => {
    expect(rob([5])).toBe(5);
  });

  test("Two houses, pick larger", () => {
    expect(rob([1, 2])).toBe(2);
  });

  test("Three houses", () => {
    expect(rob([2, 1, 3])).toBe(5);
  });

  test("All same values", () => {
    expect(rob([3, 3, 3, 3])).toBe(6);
  });

  test("Descending values", () => {
    expect(rob([4, 3, 2, 1])).toBe(6);
  });

  test("One large house in middle", () => {
    expect(rob([1, 100, 1])).toBe(100);
  });

  test("Alternating high low", () => {
    expect(rob([10, 1, 10, 1, 10])).toBe(30);
  });
});
