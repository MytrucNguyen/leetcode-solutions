import { isSubsequence } from "./solution";

describe("392. Is Subsequence", () => {
  test('Example 1: "abc" in "ahbgdc"', () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  });

  test('Example 2: "axc" in "ahbgdc"', () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false);
  });

  test("Empty s", () => {
    expect(isSubsequence("", "ahbgdc")).toBe(true);
  });

  test("Empty t", () => {
    expect(isSubsequence("abc", "")).toBe(false);
  });

  test("Both empty", () => {
    expect(isSubsequence("", "")).toBe(true);
  });

  test("Same string", () => {
    expect(isSubsequence("abc", "abc")).toBe(true);
  });

  test("Single character match", () => {
    expect(isSubsequence("a", "abcde")).toBe(true);
  });

  test("Single character no match", () => {
    expect(isSubsequence("z", "abcde")).toBe(false);
  });

  test("Subsequence at the end", () => {
    expect(isSubsequence("de", "abcde")).toBe(true);
  });
});
