import { merge } from "./solution";

describe("Merge Intervals", () => {
  test("Example 1: [[1,3],[2,6],[8,10],[15,18]]", () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const result = merge(intervals);
    const expected = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];

    console.log(
      `Test 1 - Input: ${JSON.stringify(intervals)} → Output: ${JSON.stringify(result)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(result).toEqual(expected);
  });

  test("Example 2: [[1,4],[4,5]]", () => {
    const intervals = [
      [1, 4],
      [4, 5],
    ];
    const result = merge(intervals);
    const expected = [[1, 5]];

    console.log(
      `Test 2 - Input: ${JSON.stringify(intervals)} → Output: ${JSON.stringify(result)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(result).toEqual(expected);
  });

  test("Single interval", () => {
    const intervals = [[1, 5]];
    const result = merge(intervals);
    const expected = [[1, 5]];

    console.log(
      `Test 3 - Input: ${JSON.stringify(intervals)} → Output: ${JSON.stringify(result)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(result).toEqual(expected);
  });

  test("No overlaps", () => {
    const intervals = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const result = merge(intervals);
    const expected = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    console.log(
      `Test 4 - Input: ${JSON.stringify(intervals)} → Output: ${JSON.stringify(result)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(result).toEqual(expected);
  });

  test("All merge into one", () => {
    const intervals = [
      [1, 4],
      [2, 5],
      [3, 6],
    ];
    const result = merge(intervals);
    const expected = [[1, 6]];

    console.log(
      `Test 5 - Input: ${JSON.stringify(intervals)} → Output: ${JSON.stringify(result)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(result).toEqual(expected);
  });

  test("Unsorted intervals", () => {
    const intervals = [
      [2, 6],
      [1, 3],
      [8, 10],
      [15, 18],
    ];
    const result = merge(intervals);
    const expected = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];

    console.log(
      `Test 6 - Input: ${JSON.stringify(intervals)} → Output: ${JSON.stringify(result)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(result).toEqual(expected);
  });

  test("Intervals with same start", () => {
    const intervals = [
      [1, 4],
      [1, 5],
    ];
    const result = merge(intervals);
    const expected = [[1, 5]];

    console.log(
      `Test 7 - Input: ${JSON.stringify(intervals)} → Output: ${JSON.stringify(result)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(result).toEqual(expected);
  });

  test("Complex overlapping", () => {
    const intervals = [
      [1, 10],
      [2, 6],
      [8, 9],
      [15, 18],
    ];
    const result = merge(intervals);
    const expected = [
      [1, 10],
      [15, 18],
    ];

    console.log(
      `Test 8 - Input: ${JSON.stringify(intervals)} → Output: ${JSON.stringify(result)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(result).toEqual(expected);
  });
});
