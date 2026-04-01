import { subsets } from "./solution";

describe("78. Subsets", () => {
  test("Example 1: [1,2,3]", () => {
    const result = subsets([1, 2, 3]);
    expect(result.length).toBe(8);
    expect(result.map((s) => JSON.stringify(s.sort())).sort()).toEqual(
      [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
        .map((s) => JSON.stringify(s.sort()))
        .sort(),
    );
  });

  test("Example 2: [0]", () => {
    const result = subsets([0]);
    expect(result.length).toBe(2);
    expect(result.map((s) => JSON.stringify(s)).sort()).toEqual(
      [JSON.stringify([]), JSON.stringify([0])].sort(),
    );
  });

  test("Two elements", () => {
    const result = subsets([1, 2]);
    expect(result.length).toBe(4);
  });

  test("Single negative", () => {
    const result = subsets([-1]);
    expect(result.length).toBe(2);
  });

  test("Four elements", () => {
    const result = subsets([1, 2, 3, 4]);
    expect(result.length).toBe(16);
  });

  test("Contains empty subset", () => {
    const result = subsets([1, 2, 3]);
    const hasEmpty = result.some((s) => s.length === 0);
    expect(hasEmpty).toBe(true);
  });

  test("Contains full set", () => {
    const result = subsets([1, 2, 3]);
    const hasFull = result.some((s) => s.length === 3);
    expect(hasFull).toBe(true);
  });
});
