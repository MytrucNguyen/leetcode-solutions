import { canJump } from "./solution";

describe("55. Jump Game", () => {
  test("Example 1: [2,3,1,1,4]", () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  test("Example 2: [3,2,1,0,4]", () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });

  test("Single element", () => {
    expect(canJump([0])).toBe(true);
  });

  test("All zeros except first", () => {
    expect(canJump([5, 0, 0, 0, 0])).toBe(true);
  });

  test("Zero at start with more elements", () => {
    expect(canJump([0, 1])).toBe(false);
  });

  test("All ones", () => {
    expect(canJump([1, 1, 1, 1])).toBe(true);
  });

  test("Large first jump", () => {
    expect(canJump([10, 0, 0, 0, 1])).toBe(true);
  });

  test("Stuck in the middle", () => {
    expect(canJump([1, 2, 0, 0, 4])).toBe(false);
  });

  test("Two elements reachable", () => {
    expect(canJump([1, 0])).toBe(true);
  });
});
