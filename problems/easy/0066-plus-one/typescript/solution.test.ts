import { plusOne } from "./solution";

describe("Plus One", () => {
  test("Example 1: [1,2,3]", () => {
    const digits = [1, 2, 3];
    const result = plusOne(digits);
    const expected = [1, 2, 4];

    console.log(
      `Test 1 - Input: [${digits}] → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("Example 2: [4,3,2,1]", () => {
    const digits = [4, 3, 2, 1];
    const result = plusOne(digits);
    const expected = [4, 3, 2, 2];

    console.log(
      `Test 2 - Input: [${digits}] → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("Example 3: [9]", () => {
    const digits = [9];
    const result = plusOne(digits);
    const expected = [1, 0];

    console.log(
      `Test 3 - Input: [${digits}] → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("Single digit - no carry: [5]", () => {
    const digits = [5];
    const result = plusOne(digits);
    const expected = [6];

    console.log(
      `Test 4 - Input: [${digits}] → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("No trailing 9s: [1,2,3]", () => {
    const digits = [1, 2, 3];
    const result = plusOne(digits);
    const expected = [1, 2, 4];

    console.log(
      `Test 5 - Input: [${digits}] → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("Some trailing 9s: [1,9,9]", () => {
    const digits = [1, 9, 9];
    const result = plusOne(digits);
    const expected = [2, 0, 0];

    console.log(
      `Test 6 - Input: [${digits}] → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("All 9s: [9,9,9]", () => {
    const digits = [9, 9, 9];
    const result = plusOne(digits);
    const expected = [1, 0, 0, 0];

    console.log(
      `Test 7 - Input: [${digits}] → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("Leading non-9 with trailing 9s: [8,9,9,9]", () => {
    const digits = [8, 9, 9, 9];
    const result = plusOne(digits);
    const expected = [9, 0, 0, 0];

    console.log(
      `Test 8 - Input: [${digits}] → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("Multiple trailing 9s: [1,2,9,9]", () => {
    const digits = [1, 2, 9, 9];
    const result = plusOne(digits);
    const expected = [1, 3, 0, 0];

    console.log(
      `Test 9 - Input: [${digits}] → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });

  test("Zero in middle: [1,0,9]", () => {
    const digits = [1, 0, 9];
    const result = plusOne(digits);
    const expected = [1, 1, 0];

    console.log(
      `Test 10 - Input: [${digits}] → Output: [${result}], Expected: [${expected}]`,
    );

    expect(result).toEqual(expected);
  });
});
