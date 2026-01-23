import { spiralOrder } from "./solution";

describe("Spiral Matrix", () => {
  test("Example 1: 3x3 matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = spiralOrder(matrix);
    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];

    console.log(`Test 1 - Input: ${JSON.stringify(matrix)}`);
    console.log(`Output: [${result}], Expected: [${expected}]`);

    expect(result).toEqual(expected);
  });

  test("Example 2: 3x4 matrix", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    const result = spiralOrder(matrix);
    const expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];

    console.log(`Test 2 - Input: ${JSON.stringify(matrix)}`);
    console.log(`Output: [${result}], Expected: [${expected}]`);

    expect(result).toEqual(expected);
  });

  test("Single element", () => {
    const matrix = [[1]];
    const result = spiralOrder(matrix);
    const expected = [1];

    console.log(
      `Test 3 - Input: ${JSON.stringify(matrix)} → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("Single row", () => {
    const matrix = [[1, 2, 3, 4]];
    const result = spiralOrder(matrix);
    const expected = [1, 2, 3, 4];

    console.log(
      `Test 4 - Input: ${JSON.stringify(matrix)} → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("Single column", () => {
    const matrix = [[1], [2], [3], [4]];
    const result = spiralOrder(matrix);
    const expected = [1, 2, 3, 4];

    console.log(
      `Test 5 - Input: ${JSON.stringify(matrix)} → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("2x2 matrix", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const result = spiralOrder(matrix);
    const expected = [1, 2, 4, 3];

    console.log(
      `Test 6 - Input: ${JSON.stringify(matrix)} → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("4x4 matrix", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const result = spiralOrder(matrix);
    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

    console.log(`Test 7 - 4x4 matrix spiral order successful`);

    expect(result).toEqual(expected);
  });

  test("2x3 matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const result = spiralOrder(matrix);
    const expected = [1, 2, 3, 6, 5, 4];

    console.log(
      `Test 8 - Input: ${JSON.stringify(matrix)} → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });
});
