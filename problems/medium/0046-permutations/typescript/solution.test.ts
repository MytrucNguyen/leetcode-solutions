import { permute } from "./solution";

describe("46. Permutations", () => {
  test("Example 1: [1,2,3]", () => {
    const result = permute([1, 2, 3]);
    expect(result.length).toBe(6);
    const sorted = result.map((p) => JSON.stringify(p)).sort();
    expect(sorted).toEqual(
      [
        JSON.stringify([1, 2, 3]),
        JSON.stringify([1, 3, 2]),
        JSON.stringify([2, 1, 3]),
        JSON.stringify([2, 3, 1]),
        JSON.stringify([3, 1, 2]),
        JSON.stringify([3, 2, 1]),
      ].sort(),
    );
  });

  test("Example 2: [0,1]", () => {
    const result = permute([0, 1]);
    expect(result.length).toBe(2);
  });

  test("Example 3: [1]", () => {
    const result = permute([1]);
    expect(result.length).toBe(1);
    expect(result[0]).toEqual([1]);
  });

  test("Four elements", () => {
    const result = permute([1, 2, 3, 4]);
    expect(result.length).toBe(24);
  });

  test("Negative numbers", () => {
    const result = permute([-1, 0, 1]);
    expect(result.length).toBe(6);
  });

  test("All permutations are unique", () => {
    const result = permute([1, 2, 3]);
    const unique = new Set(result.map((p) => JSON.stringify(p)));
    expect(unique.size).toBe(6);
  });

  test("Each permutation has all elements", () => {
    const result = permute([1, 2, 3]);
    for (const perm of result) {
      expect(perm.sort()).toEqual([1, 2, 3]);
    }
  });
});
