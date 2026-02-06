import { generate } from "./solution";

describe("Pascal's Triangle", () => {
  test("Example 1: numRows = 5", () => {
    const numRows = 5;
    const result = generate(numRows);
    const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

    console.log(`Test 1 - Input: ${numRows}`);
    console.log(`  Output: ${JSON.stringify(result)}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);

    expect(result).toEqual(expected);
  });

  test("Example 2: numRows = 1", () => {
    const numRows = 1;
    const result = generate(numRows);
    const expected = [[1]];

    console.log(`Test 2 - Input: ${numRows}`);
    console.log(`  Output: ${JSON.stringify(result)}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);

    expect(result).toEqual(expected);
  });

  test("numRows = 2", () => {
    const numRows = 2;
    const result = generate(numRows);
    const expected = [[1], [1, 1]];

    console.log(`Test 3 - Input: ${numRows}`);
    console.log(`  Output: ${JSON.stringify(result)}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);

    expect(result).toEqual(expected);
  });

  test("numRows = 3", () => {
    const numRows = 3;
    const result = generate(numRows);
    const expected = [[1], [1, 1], [1, 2, 1]];

    console.log(`Test 4 - Input: ${numRows}`);
    console.log(`  Output: ${JSON.stringify(result)}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);

    expect(result).toEqual(expected);
  });

  test("numRows = 4", () => {
    const numRows = 4;
    const result = generate(numRows);
    const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];

    console.log(`Test 5 - Input: ${numRows}`);
    console.log(`  Output: ${JSON.stringify(result)}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);

    expect(result).toEqual(expected);
  });

  test("numRows = 6", () => {
    const numRows = 6;
    const result = generate(numRows);
    const expected = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
    ];

    console.log(`Test 6 - Input: ${numRows}`);
    console.log(`  Output: ${JSON.stringify(result)}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);

    expect(result).toEqual(expected);
  });

  test("numRows = 7", () => {
    const numRows = 7;
    const result = generate(numRows);
    const expected = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
    ];

    console.log(`Test 7 - Input: ${numRows}`);
    console.log(`  Output: ${JSON.stringify(result)}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);

    expect(result).toEqual(expected);
  });

  test("numRows = 8", () => {
    const numRows = 8;
    const result = generate(numRows);
    const expected = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
    ];

    console.log(`Test 8 - Input: ${numRows}`);
    console.log(`  Output: ${JSON.stringify(result)}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);

    expect(result).toEqual(expected);
  });

  test("numRows = 10", () => {
    const numRows = 10;
    const result = generate(numRows);
    const expected = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
      [1, 8, 28, 56, 70, 56, 28, 8, 1],
      [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
    ];

    console.log(`Test 9 - Input: ${numRows}`);
    console.log(`  Output: ${JSON.stringify(result)}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);

    expect(result).toEqual(expected);
  });

  test("Verify each row length", () => {
    const numRows = 5;
    const result = generate(numRows);

    console.log(`Test 10 - Verifying row lengths for numRows = ${numRows}`);

    for (let i = 0; i < result.length; i++) {
      console.log(
        `  Row ${i} has length ${result[i].length}, Expected: ${i + 1}`,
      );
      expect(result[i].length).toBe(i + 1);
    }
  });
});
