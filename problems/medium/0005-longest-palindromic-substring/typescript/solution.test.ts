import { longestPalindrome } from "./solution";

describe("Longest Palindromic Substring", () => {
  test("Example 1: 'babad'", () => {
    const s = "babad";
    const result = longestPalindrome(s);

    console.log(`Test 1 - Input: "${s}" → Output: "${result}"`);

    // Both "bab" and "aba" are valid answers
    expect(["bab", "aba"]).toContain(result);
  });

  test("Example 2: 'cbbd'", () => {
    const s = "cbbd";
    const result = longestPalindrome(s);
    const expected = "bb";

    console.log(
      `Test 2 - Input: "${s}" → Output: "${result}", Expected: "${expected}"`,
    );

    expect(result).toBe(expected);
  });

  test("Single character", () => {
    const s = "a";
    const result = longestPalindrome(s);
    const expected = "a";

    console.log(
      `Test 3 - Input: "${s}" → Output: "${result}", Expected: "${expected}"`,
    );

    expect(result).toBe(expected);
  });

  test("All same characters", () => {
    const s = "aaaa";
    const result = longestPalindrome(s);
    const expected = "aaaa";

    console.log(
      `Test 4 - Input: "${s}" → Output: "${result}", Expected: "${expected}"`,
    );

    expect(result).toBe(expected);
  });

  test("No palindrome longer than 1", () => {
    const s = "abcdef";
    const result = longestPalindrome(s);

    console.log(
      `Test 5 - Input: "${s}" → Output: "${result}" (length: ${result.length})`,
    );

    expect(result.length).toBe(1);
  });

  test("Entire string is palindrome", () => {
    const s = "racecar";
    const result = longestPalindrome(s);
    const expected = "racecar";

    console.log(
      `Test 6 - Input: "${s}" → Output: "${result}", Expected: "${expected}"`,
    );

    expect(result).toBe(expected);
  });

  test("Even-length palindrome", () => {
    const s = "abba";
    const result = longestPalindrome(s);
    const expected = "abba";

    console.log(
      `Test 7 - Input: "${s}" → Output: "${result}", Expected: "${expected}"`,
    );

    expect(result).toBe(expected);
  });

  test("Palindrome at end", () => {
    const s = "abcdcba";
    const result = longestPalindrome(s);
    const expected = "abcdcba";

    console.log(
      `Test 8 - Input: "${s}" → Output: "${result}", Expected: "${expected}"`,
    );

    expect(result).toBe(expected);
  });

  test("Multiple palindromes", () => {
    const s = "abacd";
    const result = longestPalindrome(s);
    const expected = "aba";

    console.log(
      `Test 9 - Input: "${s}" → Output: "${result}", Expected: "${expected}"`,
    );

    expect(result).toBe(expected);
  });

  test("Two character string - same", () => {
    const s = "bb";
    const result = longestPalindrome(s);
    const expected = "bb";

    console.log(
      `Test 10 - Input: "${s}" → Output: "${result}", Expected: "${expected}"`,
    );

    expect(result).toBe(expected);
  });

  test("Two character string - different", () => {
    const s = "ab";
    const result = longestPalindrome(s);

    console.log(
      `Test 11 - Input: "${s}" → Output: "${result}" (length: ${result.length})`,
    );

    expect(result.length).toBe(1);
    expect(["a", "b"]).toContain(result);
  });
});
