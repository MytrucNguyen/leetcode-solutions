import { maxProduct } from "./solution";

describe("152. Maximum Product Subarray", () => {
  test("Example 1: [2,3,-2,4]", () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6);
  });

  test("Example 2: [-2,0,-1]", () => {
    expect(maxProduct([-2, 0, -1])).toBe(0);
  });

  test("Two negatives make positive", () => {
    expect(maxProduct([-2, 3, -4])).toBe(24);
  });

  test("Single element", () => {
    expect(maxProduct([3])).toBe(3);
  });

  test("Single negative", () => {
    expect(maxProduct([-2])).toBe(-2);
  });

  test("All negative", () => {
    expect(maxProduct([-2, -3, -4])).toBe(12);
  });

  test("Contains zero in middle", () => {
    expect(maxProduct([-2, 0, -3, -4])).toBe(12);
  });

  test("All positive", () => {
    expect(maxProduct([1, 2, 3, 4])).toBe(24);
  });

  test("Negative at start and end", () => {
    expect(maxProduct([-3, 2, -4])).toBe(24);
  });
});
