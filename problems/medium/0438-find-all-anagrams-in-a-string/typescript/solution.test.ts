import { findAnagrams } from "./solution";

describe("438. Find All Anagrams in a String", () => {
  test('Example 1: "cbaebabacd", "abc"', () => {
    expect(findAnagrams("cbaebabacd", "abc")).toEqual([0, 6]);
  });

  test('Example 2: "abab", "ab"', () => {
    expect(findAnagrams("abab", "ab")).toEqual([0, 1, 2]);
  });

  test("No anagrams found", () => {
    expect(findAnagrams("hello", "xyz")).toEqual([]);
  });

  test("p longer than s", () => {
    expect(findAnagrams("ab", "abc")).toEqual([]);
  });

  test("Entire string is anagram", () => {
    expect(findAnagrams("abc", "cba")).toEqual([0]);
  });

  test("Single character match", () => {
    expect(findAnagrams("aaaa", "a")).toEqual([0, 1, 2, 3]);
  });

  test("Same string", () => {
    expect(findAnagrams("abc", "abc")).toEqual([0]);
  });

  test("Repeated pattern", () => {
    expect(findAnagrams("abcabc", "abc")).toEqual([0, 1, 2, 3]);
  });
});
