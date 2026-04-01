import { setZeroes } from "./solution";

describe("73. Set Matrix Zeroes", () => {
  test("Example 1: 3x3 with center zero", () => {
    const matrix = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
  });

  test("Example 2: zeros in corners", () => {
    const matrix = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ]);
  });

  test("No zeros", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test("All zeros", () => {
    const matrix = [
      [0, 0],
      [0, 0],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [0, 0],
      [0, 0],
    ]);
  });

  test("Single row", () => {
    const matrix = [[1, 0, 3]];
    setZeroes(matrix);
    expect(matrix).toEqual([[0, 0, 0]]);
  });

  test("Single column", () => {
    const matrix = [[1], [0], [3]];
    setZeroes(matrix);
    expect(matrix).toEqual([[0], [0], [0]]);
  });

  test("Zero in first cell", () => {
    const matrix = [
      [0, 1],
      [1, 1],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [0, 0],
      [0, 1],
    ]);
  });

  test("Multiple zeros", () => {
    const matrix = [
      [1, 0, 3],
      [0, 5, 6],
      [7, 8, 9],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 9],
    ]);
  });
});
