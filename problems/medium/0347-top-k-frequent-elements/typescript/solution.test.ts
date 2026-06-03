import { topKFrequent } from "./solution";

describe("347. Top K Frequent Elements", () => {
  test("Example 1: [1,1,1,2,2,3], k=2", () => {
    const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
    expect(result.sort()).toEqual([1, 2]);
  });

  test("Example 2: [1], k=1", () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  test("All same frequency, k=2", () => {
    const result = topKFrequent([1, 2, 3], 2);
    expect(result.length).toBe(2);
  });

  test("k equals unique count", () => {
    const result = topKFrequent([1, 1, 2, 2, 3], 3);
    expect(result.sort()).toEqual([1, 2, 3]);
  });

  test("Single dominant element", () => {
    expect(topKFrequent([1, 1, 1, 1, 2, 3], 1)).toEqual([1]);
  });

  test("Negative numbers", () => {
    const result = topKFrequent([-1, -1, 2, 2, 3], 2);
    expect(result.sort()).toEqual([-1, 2]);
  });

  test("Large k", () => {
    const result = topKFrequent([4, 4, 4, 1, 1, 2, 2, 3], 3);
    expect(result.length).toBe(3);
    expect(result).toContain(4);
  });
});
