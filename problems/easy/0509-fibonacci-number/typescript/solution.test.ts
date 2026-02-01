import { fib } from "./solution";

describe("Fibonacci Number", () => {
  test("Example 1: n = 2", () => {
    const n = 2;
    const result = fib(n);
    const expected = 1;

    console.log(
      `Test 1 - Input: ${n} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Example 2: n = 3", () => {
    const n = 3;
    const result = fib(n);
    const expected = 2;

    console.log(
      `Test 2 - Input: ${n} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Example 3: n = 4", () => {
    const n = 4;
    const result = fib(n);
    const expected = 3;

    console.log(
      `Test 3 - Input: ${n} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Base case: n = 0", () => {
    const n = 0;
    const result = fib(n);
    const expected = 0;

    console.log(
      `Test 4 - Input: ${n} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Base case: n = 1", () => {
    const n = 1;
    const result = fib(n);
    const expected = 1;

    console.log(
      `Test 5 - Input: ${n} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("n = 5", () => {
    const n = 5;
    const result = fib(n);
    const expected = 5;

    console.log(
      `Test 6 - Input: ${n} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("n = 6", () => {
    const n = 6;
    const result = fib(n);
    const expected = 8;

    console.log(
      `Test 7 - Input: ${n} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("n = 10", () => {
    const n = 10;
    const result = fib(n);
    const expected = 55;

    console.log(
      `Test 8 - Input: ${n} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("n = 20", () => {
    const n = 20;
    const result = fib(n);
    const expected = 6765;

    console.log(
      `Test 9 - Input: ${n} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Max constraint: n = 30", () => {
    const n = 30;
    const result = fib(n);
    const expected = 832040;

    console.log(
      `Test 10 - Input: ${n} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });
});
