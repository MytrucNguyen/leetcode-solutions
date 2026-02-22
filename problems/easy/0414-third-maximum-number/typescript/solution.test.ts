import { thirdMax } from "./solution";

describe("414. Third Maximum Number", () => {
  test("Example 1: [3, 2, 1]", () => {
    expect(thirdMax([3, 2, 1])).toBe(1);
  });

  test("Example 2: [1, 2]", () => {
    expect(thirdMax([1, 2])).toBe(2);
  });

  test("Example 3: [2, 2, 3, 1]", () => {
    expect(thirdMax([2, 2, 3, 1])).toBe(1);
  });

  test("Single element", () => {
    expect(thirdMax([1])).toBe(1);
  });

  test("All duplicates", () => {
    expect(thirdMax([5, 5, 5])).toBe(5);
  });

  test("Negative numbers", () => {
    expect(thirdMax([-1, -2, -3])).toBe(-3);
  });

  test("Mix of positive and negative", () => {
    expect(thirdMax([1, -1, 0])).toBe(-1);
  });

  test("Large array with duplicates", () => {
    expect(thirdMax([5, 2, 2, 5, 1, 3, 3])).toBe(2);
  });
});
