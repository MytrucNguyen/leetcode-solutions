import { isPerfectSquare } from "./solution";

describe("Valid Perfect Square", () => {
  test("Example 1: num = 16", () => {
    const num = 16;
    const result = isPerfectSquare(num);
    const expected = true;

    console.log(`Test 1 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 4 * 4 = 16`);

    expect(result).toBe(expected);
  });

  test("Example 2: num = 14", () => {
    const num = 14;
    const result = isPerfectSquare(num);
    const expected = false;

    console.log(`Test 2 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: No integer squared equals 14`);

    expect(result).toBe(expected);
  });

  test("num = 1", () => {
    const num = 1;
    const result = isPerfectSquare(num);
    const expected = true;

    console.log(`Test 3 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 1 * 1 = 1`);

    expect(result).toBe(expected);
  });

  test("num = 4", () => {
    const num = 4;
    const result = isPerfectSquare(num);
    const expected = true;

    console.log(`Test 4 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 2 * 2 = 4`);

    expect(result).toBe(expected);
  });

  test("num = 9", () => {
    const num = 9;
    const result = isPerfectSquare(num);
    const expected = true;

    console.log(`Test 5 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 3 * 3 = 9`);

    expect(result).toBe(expected);
  });

  test("num = 25", () => {
    const num = 25;
    const result = isPerfectSquare(num);
    const expected = true;

    console.log(`Test 6 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 5 * 5 = 25`);

    expect(result).toBe(expected);
  });

  test("num = 2", () => {
    const num = 2;
    const result = isPerfectSquare(num);
    const expected = false;

    console.log(`Test 7 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: No integer squared equals 2`);

    expect(result).toBe(expected);
  });

  test("num = 3", () => {
    const num = 3;
    const result = isPerfectSquare(num);
    const expected = false;

    console.log(`Test 8 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: No integer squared equals 3`);

    expect(result).toBe(expected);
  });

  test("num = 100", () => {
    const num = 100;
    const result = isPerfectSquare(num);
    const expected = true;

    console.log(`Test 9 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 10 * 10 = 100`);

    expect(result).toBe(expected);
  });

  test("num = 144", () => {
    const num = 144;
    const result = isPerfectSquare(num);
    const expected = true;

    console.log(`Test 10 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 12 * 12 = 144`);

    expect(result).toBe(expected);
  });

  test("num = 150", () => {
    const num = 150;
    const result = isPerfectSquare(num);
    const expected = false;

    console.log(`Test 11 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: No integer squared equals 150`);

    expect(result).toBe(expected);
  });

  test("num = 10000", () => {
    const num = 10000;
    const result = isPerfectSquare(num);
    const expected = true;

    console.log(`Test 12 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 100 * 100 = 10000`);

    expect(result).toBe(expected);
  });

  test("num = 808201", () => {
    const num = 808201;
    const result = isPerfectSquare(num);
    const expected = true;

    console.log(`Test 13 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 899 * 899 = 808201`);

    expect(result).toBe(expected);
  });

  test("num = 999999", () => {
    const num = 999999;
    const result = isPerfectSquare(num);
    const expected = false;

    console.log(`Test 14 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: No integer squared equals 999999`);

    expect(result).toBe(expected);
  });

  test("num = 2147483647", () => {
    const num = 2147483647;
    const result = isPerfectSquare(num);
    const expected = false;

    console.log(`Test 15 - Input: ${num}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: Max constraint, not a perfect square`);

    expect(result).toBe(expected);
  });
});
