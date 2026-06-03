import { maxArea } from "./solution";

describe("Container With Most Water", () => {
  test("Example 1: [1,8,6,2,5,4,8,3,7]", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = maxArea(height);
    const expected = 49;

    console.log(
      `Test 1 - Input: [${height}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Example 2: [1,1]", () => {
    const height = [1, 1];
    const result = maxArea(height);
    const expected = 1;

    console.log(
      `Test 2 - Input: [${height}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Two lines with different heights", () => {
    const height = [1, 2];
    const result = maxArea(height);
    const expected = 1;

    console.log(
      `Test 3 - Input: [${height}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Increasing heights", () => {
    const height = [1, 2, 3, 4, 5];
    const result = maxArea(height);
    const expected = 6;

    console.log(
      `Test 4 - Input: [${height}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Decreasing heights", () => {
    const height = [5, 4, 3, 2, 1];
    const result = maxArea(height);
    const expected = 6;

    console.log(
      `Test 5 - Input: [${height}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("All same height", () => {
    const height = [3, 3, 3, 3];
    const result = maxArea(height);
    const expected = 9;

    console.log(
      `Test 6 - Input: [${height}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Large container in middle", () => {
    const height = [1, 3, 2, 5, 25, 24, 5];
    const result = maxArea(height);
    const expected = 24;

    console.log(
      `Test 7 - Input: [${height}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Tall lines at edges", () => {
    const height = [8, 1, 1, 1, 1, 1, 8];
    const result = maxArea(height);
    const expected = 48;

    console.log(
      `Test 8 - Input: [${height}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });
});
