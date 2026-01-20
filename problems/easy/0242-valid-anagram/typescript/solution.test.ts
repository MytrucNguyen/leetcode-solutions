import { isAnagram } from "./solution";
import { isAnagramWithMapping } from "./soltionWithMapping";

describe("Valid Anagram - Sorting Approach", () => {
  test("Example 1: 'anagram' and 'nagaram'", () => {
    const s = "anagram";
    const t = "nagaram";
    const result = isAnagram(s, t);

    console.log(
      `Test 1 (Sorting) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Example 2: 'rat' and 'car'", () => {
    const s = "rat";
    const t = "car";
    const result = isAnagram(s, t);

    console.log(
      `Test 2 (Sorting) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Different lengths", () => {
    const s = "a";
    const t = "ab";
    const result = isAnagram(s, t);

    console.log(
      `Test 3 (Sorting) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Empty strings", () => {
    const s = "";
    const t = "";
    const result = isAnagram(s, t);

    console.log(
      `Test 4 (Sorting) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Same string", () => {
    const s = "abc";
    const t = "abc";
    const result = isAnagram(s, t);

    console.log(
      `Test 5 (Sorting) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Single character - match", () => {
    const s = "a";
    const t = "a";
    const result = isAnagram(s, t);

    console.log(
      `Test 6 (Sorting) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Single character - no match", () => {
    const s = "a";
    const t = "b";
    const result = isAnagram(s, t);

    console.log(
      `Test 7 (Sorting) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });
});

describe("Valid Anagram - Hash Map Approach", () => {
  test("Example 1: 'anagram' and 'nagaram'", () => {
    const s = "anagram";
    const t = "nagaram";
    const result = isAnagramWithMapping(s, t);

    console.log(
      `Test 1 (Map) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Example 2: 'rat' and 'car'", () => {
    const s = "rat";
    const t = "car";
    const result = isAnagramWithMapping(s, t);

    console.log(
      `Test 2 (Map) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Different lengths", () => {
    const s = "a";
    const t = "ab";
    const result = isAnagramWithMapping(s, t);

    console.log(
      `Test 3 (Map) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Empty strings", () => {
    const s = "";
    const t = "";
    const result = isAnagramWithMapping(s, t);

    console.log(
      `Test 4 (Map) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Same string", () => {
    const s = "abc";
    const t = "abc";
    const result = isAnagramWithMapping(s, t);

    console.log(
      `Test 5 (Map) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("More of one character in t", () => {
    const s = "ab";
    const t = "aab";
    const result = isAnagramWithMapping(s, t);

    console.log(
      `Test 6 (Map) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Character in t not in s", () => {
    const s = "abc";
    const t = "abz";
    const result = isAnagramWithMapping(s, t);

    console.log(
      `Test 7 (Map) - Input: s="${s}", t="${t}" → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });
});
