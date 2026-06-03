import { reverseBits } from "./solution";

describe("Reverse Bits", () => {
  test("Example 1: n = 00000010100101000001111010011100", () => {
    const n = 0b00000010100101000001111010011100;
    const result = reverseBits(n);
    const expected = 964176192;

    console.log(`Test 1 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: Binary reversal of 43261596`);

    expect(result).toBe(expected);
  });

  test("Example 2: n = 11111111111111111111111111111101", () => {
    const n = 0b11111111111111111111111111111101;
    const result = reverseBits(n);
    const expected = 3221225471;

    console.log(`Test 2 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: Binary reversal of 4294967293`);

    expect(result).toBe(expected);
  });

  test("n = 0 (all zeros)", () => {
    const n = 0b00000000000000000000000000000000;
    const result = reverseBits(n);
    const expected = 0;

    console.log(`Test 3 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: All zeros reversed is still all zeros`);

    expect(result).toBe(expected);
  });

  test("n = 1 (only rightmost bit set)", () => {
    const n = 0b00000000000000000000000000000001;
    const result = reverseBits(n);
    const expected = 2147483648; // 0b10000000000000000000000000000000

    console.log(`Test 4 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: Rightmost bit becomes leftmost`);

    expect(result).toBe(expected);
  });

  test("n = 2147483648 (only leftmost bit set)", () => {
    const n = 0b10000000000000000000000000000000;
    const result = reverseBits(n);
    const expected = 1;

    console.log(`Test 5 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: Leftmost bit becomes rightmost`);

    expect(result).toBe(expected);
  });

  test("n = 4294967295 (all ones)", () => {
    const n = 0b11111111111111111111111111111111;
    const result = reverseBits(n);
    const expected = 4294967295;

    console.log(`Test 6 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: All ones reversed is still all ones`);

    expect(result).toBe(expected);
  });

  test("n = 2 (binary: 10)", () => {
    const n = 0b00000000000000000000000000000010;
    const result = reverseBits(n);
    const expected = 1073741824; // 0b01000000000000000000000000000000

    console.log(`Test 7 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: Second rightmost bit becomes second leftmost`);

    expect(result).toBe(expected);
  });

  test("n = 255 (binary: 11111111)", () => {
    const n = 0b00000000000000000000000011111111;
    const result = reverseBits(n);
    const expected = 4278190080; // 0b11111111000000000000000000000000

    console.log(`Test 8 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: Last 8 bits become first 8 bits`);

    expect(result).toBe(expected);
  });

  test("n = 858993459 (alternating bits: 01010101...)", () => {
    const n = 0b00110011001100110011001100110011;
    const result = reverseBits(n);
    const expected = 3435973836; // 0b11001100110011001100110011001100

    console.log(`Test 9 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: Pattern reversal`);

    expect(result).toBe(expected);
  });

  test("n = 1431655765 (alternating: 01010101...)", () => {
    const n = 0b01010101010101010101010101010101;
    const result = reverseBits(n);
    const expected = 2863311530; // 0b10101010101010101010101010101010

    console.log(`Test 10 - Input: ${n}`);
    console.log(`  Output: ${result}, Expected: ${expected}`);
    console.log(`  Explanation: Alternating pattern reversal`);

    expect(result).toBe(expected);
  });
});
