import { numIslands } from "./solution";

describe("Number of Islands", () => {
  test("Example 1: Single large island", () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    const result = numIslands(grid);
    const expected = 1;

    console.log(`Test 1 - Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Example 2: Three islands", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    const result = numIslands(grid);
    const expected = 3;

    console.log(`Test 2 - Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Empty grid", () => {
    const grid: string[][] = [];
    const result = numIslands(grid);
    const expected = 0;

    console.log(
      `Test 3 - Empty grid → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("All water", () => {
    const grid = [
      ["0", "0", "0"],
      ["0", "0", "0"],
    ];
    const result = numIslands(grid);
    const expected = 0;

    console.log(
      `Test 4 - All water → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("All land (one big island)", () => {
    const grid = [
      ["1", "1", "1"],
      ["1", "1", "1"],
    ];
    const result = numIslands(grid);
    const expected = 1;

    console.log(`Test 5 - All land → Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Single cell island", () => {
    const grid = [["1"]];
    const result = numIslands(grid);
    const expected = 1;

    console.log(
      `Test 6 - Single cell → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Multiple small islands", () => {
    const grid = [
      ["1", "0", "1", "0", "1"],
      ["0", "0", "0", "0", "0"],
      ["1", "0", "1", "0", "1"],
    ];
    const result = numIslands(grid);
    const expected = 6;

    console.log(
      `Test 7 - Multiple small islands → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Complex shape", () => {
    const grid = [
      ["1", "1", "0", "0", "1"],
      ["1", "0", "0", "1", "1"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    const result = numIslands(grid);
    const expected = 4;

    console.log(
      `Test 8 - Complex shape → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });
});
