import { lengthOfLongestSubstring } from "./solution";

describe("Longest Substring Without Repeating Characters", () => {
  test("Example 1: abcabcbb", () => {
    const s = "abcabcbb";
    const result = lengthOfLongestSubstring(s);
    const expected = 3;

    console.log(
      `Test 1 - Input: "${s}" → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Example 2: bbbbb", () => {
    const s = "bbbbb";
    const result = lengthOfLongestSubstring(s);
    const expected = 1;

    console.log(
      `Test 2 - Input: "${s}" → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Example 3: pwwkew", () => {
    const s = "pwwkew";
    const result = lengthOfLongestSubstring(s);
    const expected = 3;

    console.log(
      `Test 3 - Input: "${s}" → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Empty string", () => {
    const s = "";
    const result = lengthOfLongestSubstring(s);
    const expected = 0;

    console.log(
      `Test 4 - Input: "${s}" → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Single character", () => {
    const s = "a";
    const result = lengthOfLongestSubstring(s);
    const expected = 1;

    console.log(
      `Test 5 - Input: "${s}" → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("All unique characters", () => {
    const s = "abcdef";
    const result = lengthOfLongestSubstring(s);
    const expected = 6;

    console.log(
      `Test 6 - Input: "${s}" → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Long string with repeats", () => {
    const s = "dvdf";
    const result = lengthOfLongestSubstring(s);
    const expected = 3;

    console.log(
      `Test 7 - Input: "${s}" → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });
});
