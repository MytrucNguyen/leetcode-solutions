import { rotate } from "./solution";

describe("Rotate Image", () => {
  test("Example 1: 3x3 matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotate(matrix);
    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];

    console.log(
      `Test 1 - Output: ${JSON.stringify(matrix)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(matrix).toEqual(expected);
  });

  test("Example 2: 4x4 matrix", () => {
    const matrix = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    rotate(matrix);
    const expected = [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ];

    console.log(
      `Test 2 - Output: ${JSON.stringify(matrix)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(matrix).toEqual(expected);
  });

  test("1x1 matrix", () => {
    const matrix = [[1]];
    rotate(matrix);
    const expected = [[1]];

    console.log(
      `Test 3 - Output: ${JSON.stringify(matrix)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(matrix).toEqual(expected);
  });

  test("2x2 matrix", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    rotate(matrix);
    const expected = [
      [3, 1],
      [4, 2],
    ];

    console.log(
      `Test 4 - Output: ${JSON.stringify(matrix)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(matrix).toEqual(expected);
  });

  test("5x5 matrix", () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    rotate(matrix);
    const expected = [
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5],
    ];

    console.log(`Test 5 - 5x5 matrix rotated successfully`);

    expect(matrix).toEqual(expected);
  });

  test("Matrix with negative numbers", () => {
    const matrix = [
      [-1, -2],
      [-3, -4],
    ];
    rotate(matrix);
    const expected = [
      [-3, -1],
      [-4, -2],
    ];

    console.log(
      `Test 6 - Output: ${JSON.stringify(matrix)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(matrix).toEqual(expected);
  });

  test("Matrix with zeros", () => {
    const matrix = [
      [0, 1],
      [2, 0],
    ];
    rotate(matrix);
    const expected = [
      [2, 0],
      [0, 1],
    ];

    console.log(
      `Test 7 - Output: ${JSON.stringify(matrix)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(matrix).toEqual(expected);
  });
});
