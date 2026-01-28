import { mySqrt } from "./solution";

describe("Sqrt(x)", () => {
  test("Example 1: 4", () => {
    const x = 4;
    const result = mySqrt(x);
    const expected = 2;

    console.log(
      `Test 1 - Input: ${x} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Example 2: 8", () => {
    const x = 8;
    const result = mySqrt(x);
    const expected = 2;

    console.log(
      `Test 2 - Input: ${x} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Edge case: 0", () => {
    const x = 0;
    const result = mySqrt(x);
    const expected = 0;

    console.log(
      `Test 3 - Input: ${x} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Edge case: 1", () => {
    const x = 1;
    const result = mySqrt(x);
    const expected = 1;

    console.log(
      `Test 4 - Input: ${x} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Perfect square: 16", () => {
    const x = 16;
    const result = mySqrt(x);
    const expected = 4;

    console.log(
      `Test 5 - Input: ${x} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Perfect square: 25", () => {
    const x = 25;
    const result = mySqrt(x);
    const expected = 5;

    console.log(
      `Test 6 - Input: ${x} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Not perfect square: 10", () => {
    const x = 10;
    const result = mySqrt(x);
    const expected = 3;

    console.log(
      `Test 7 - Input: ${x} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Large number: 100", () => {
    const x = 100;
    const result = mySqrt(x);
    const expected = 10;

    console.log(
      `Test 8 - Input: ${x} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Large non-perfect square: 2147395599", () => {
    const x = 2147395599;
    const result = mySqrt(x);
    const expected = 46339;

    console.log(
      `Test 9 - Input: ${x} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Small non-perfect square: 2", () => {
    const x = 2;
    const result = mySqrt(x);
    const expected = 1;

    console.log(
      `Test 10 - Input: ${x} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });
});
