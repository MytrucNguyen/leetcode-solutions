import { numIdenticalPairs } from "./solution";

describe("1512. Number of Good Pairs", () => {
  test("Example 1: [1,2,3,1,1,3]", () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
  });

  test("Example 2: [1,1,1,1]", () => {
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
  });

  test("Example 3: [1,2,3]", () => {
    expect(numIdenticalPairs([1, 2, 3])).toBe(0);
  });

  test("Single element", () => {
    expect(numIdenticalPairs([1])).toBe(0);
  });

  test("Two same elements", () => {
    expect(numIdenticalPairs([1, 1])).toBe(1);
  });

  test("Two different elements", () => {
    expect(numIdenticalPairs([1, 2])).toBe(0);
  });

  test("Multiple groups", () => {
    expect(numIdenticalPairs([1, 1, 2, 2, 3, 3])).toBe(3);
  });

  test("All same", () => {
    expect(numIdenticalPairs([5, 5, 5, 5, 5])).toBe(10);
  });
});
