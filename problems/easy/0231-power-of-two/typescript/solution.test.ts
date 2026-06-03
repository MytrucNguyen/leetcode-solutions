import { isPowerOfTwo } from "./solution";

describe("Power of Two", () => {
  test("Example 1: n = 1", () => {
    const n = 1;
    const result = isPowerOfTwo(n);
    const expected = true;

    console.log(`Test 1 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 2^0 = 1`);

    expect(result).toBe(expected);
  });

  test("Example 2: n = 16", () => {
    const n = 16;
    const result = isPowerOfTwo(n);
    const expected = true;

    console.log(`Test 2 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 2^4 = 16`);

    expect(result).toBe(expected);
  });

  test("Example 3: n = 3", () => {
    const n = 3;
    const result = isPowerOfTwo(n);
    const expected = false;

    console.log(`Test 3 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 3 is not a power of 2`);

    expect(result).toBe(expected);
  });

  test("n = 2", () => {
    const n = 2;
    const result = isPowerOfTwo(n);
    const expected = true;

    console.log(`Test 4 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 2^1 = 2`);

    expect(result).toBe(expected);
  });

  test("n = 4", () => {
    const n = 4;
    const result = isPowerOfTwo(n);
    const expected = true;

    console.log(`Test 5 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 2^2 = 4`);

    expect(result).toBe(expected);
  });

  test("n = 5", () => {
    const n = 5;
    const result = isPowerOfTwo(n);
    const expected = false;

    console.log(`Test 6 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 5 is not a power of 2`);

    expect(result).toBe(expected);
  });

  test("n = 0", () => {
    const n = 0;
    const result = isPowerOfTwo(n);
    const expected = false;

    console.log(`Test 7 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 0 is not a power of 2`);

    expect(result).toBe(expected);
  });

  test("n = -16", () => {
    const n = -16;
    const result = isPowerOfTwo(n);
    const expected = false;

    console.log(`Test 8 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: Negative numbers are not powers of 2`);

    expect(result).toBe(expected);
  });

  test("n = 8", () => {
    const n = 8;
    const result = isPowerOfTwo(n);
    const expected = true;

    console.log(`Test 9 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 2^3 = 8`);

    expect(result).toBe(expected);
  });

  test("n = 32", () => {
    const n = 32;
    const result = isPowerOfTwo(n);
    const expected = true;

    console.log(`Test 10 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 2^5 = 32`);

    expect(result).toBe(expected);
  });

  test("n = 64", () => {
    const n = 64;
    const result = isPowerOfTwo(n);
    const expected = true;

    console.log(`Test 11 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 2^6 = 64`);

    expect(result).toBe(expected);
  });

  test("n = 128", () => {
    const n = 128;
    const result = isPowerOfTwo(n);
    const expected = true;

    console.log(`Test 12 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 2^7 = 128`);

    expect(result).toBe(expected);
  });

  test("n = 6", () => {
    const n = 6;
    const result = isPowerOfTwo(n);
    const expected = false;

    console.log(`Test 13 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 6 is not a power of 2`);

    expect(result).toBe(expected);
  });

  test("n = 1024", () => {
    const n = 1024;
    const result = isPowerOfTwo(n);
    const expected = true;

    console.log(`Test 14 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 2^10 = 1024`);

    expect(result).toBe(expected);
  });

  test("n = 1000", () => {
    const n = 1000;
    const result = isPowerOfTwo(n);
    const expected = false;

    console.log(`Test 15 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 1000 is not a power of 2`);

    expect(result).toBe(expected);
  });
});
