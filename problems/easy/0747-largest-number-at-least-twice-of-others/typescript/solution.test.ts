import { dominantIndex } from "./solution";

describe("747. Largest Number At Least Twice of Others", () => {
  test("Example 1: [3,6,1,0]", () => {
    expect(dominantIndex([3, 6, 1, 0])).toBe(1);
  });

  test("Example 2: [1,2,3,4]", () => {
    expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
  });

  test("Two elements, dominant", () => {
    expect(dominantIndex([0, 10])).toBe(1);
  });

  test("Two elements, not dominant", () => {
    expect(dominantIndex([3, 5])).toBe(-1);
  });

  test("Largest at the start", () => {
    expect(dominantIndex([10, 2, 3, 1])).toBe(0);
  });

  test("Exactly twice", () => {
    expect(dominantIndex([1, 0, 0, 2])).toBe(3);
  });

  test("Contains zeros", () => {
    expect(dominantIndex([0, 0, 3, 0])).toBe(2);
  });

  test("All zeros except one", () => {
    expect(dominantIndex([0, 0, 0, 1])).toBe(3);
  });
});
