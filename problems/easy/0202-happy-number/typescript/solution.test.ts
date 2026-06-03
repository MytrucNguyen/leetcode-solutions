import { isHappy } from "./solution";

describe("Happy Number", () => {
  test("Example 1: n = 19", () => {
    const n = 19;
    const result = isHappy(n);
    const expected = true;

    console.log(`Test 1 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 19 → 82 → 68 → 100 → 1`);

    expect(result).toBe(expected);
  });

  test("Example 2: n = 2", () => {
    const n = 2;
    const result = isHappy(n);
    const expected = false;

    console.log(`Test 2 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 2 enters a cycle and never reaches 1`);

    expect(result).toBe(expected);
  });

  test("n = 1", () => {
    const n = 1;
    const result = isHappy(n);
    const expected = true;

    console.log(`Test 3 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 1 is already 1`);

    expect(result).toBe(expected);
  });

  test("n = 7", () => {
    const n = 7;
    const result = isHappy(n);
    const expected = true;

    console.log(`Test 4 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 7 → 49 → 97 → 130 → 10 → 1`);

    expect(result).toBe(expected);
  });

  test("n = 10", () => {
    const n = 10;
    const result = isHappy(n);
    const expected = true;

    console.log(`Test 5 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 10 → 1`);

    expect(result).toBe(expected);
  });

  test("n = 100", () => {
    const n = 100;
    const result = isHappy(n);
    const expected = true;

    console.log(`Test 6 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 100 → 1`);

    expect(result).toBe(expected);
  });

  test("n = 3", () => {
    const n = 3;
    const result = isHappy(n);
    const expected = false;

    console.log(`Test 7 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 3 enters a cycle`);

    expect(result).toBe(expected);
  });

  test("n = 4", () => {
    const n = 4;
    const result = isHappy(n);
    const expected = false;

    console.log(`Test 8 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 4 → 16 → ... → cycle`);

    expect(result).toBe(expected);
  });

  test("n = 23", () => {
    const n = 23;
    const result = isHappy(n);
    const expected = true;

    console.log(`Test 9 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 23 is a happy number`);

    expect(result).toBe(expected);
  });

  test("n = 28", () => {
    const n = 28;
    const result = isHappy(n);
    const expected = true;

    console.log(`Test 10 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 28 → 68 → 100 → 1`);

    expect(result).toBe(expected);
  });

  test("n = 31", () => {
    const n = 31;
    const result = isHappy(n);
    const expected = true;

    console.log(`Test 11 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 31 is a happy number`);

    expect(result).toBe(expected);
  });

  test("n = 32", () => {
    const n = 32;
    const result = isHappy(n);
    const expected = true;

    console.log(`Test 12 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 32 → 13 → 10 → 1`);

    expect(result).toBe(expected);
  });

  test("n = 68", () => {
    const n = 68;
    const result = isHappy(n);
    const expected = true;

    console.log(`Test 13 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 68 → 100 → 1`);

    expect(result).toBe(expected);
  });

  test("n = 82", () => {
    const n = 82;
    const result = isHappy(n);
    const expected = true;

    console.log(`Test 14 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 82 → 68 → 100 → 1`);

    expect(result).toBe(expected);
  });

  test("n = 116", () => {
    const n = 116;
    const result = isHappy(n);
    const expected = false;

    console.log(`Test 15 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: 116 enters a cycle`);

    expect(result).toBe(expected);
  });
});
