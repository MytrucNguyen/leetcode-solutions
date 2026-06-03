import { longestCommonPrefix } from "./solution";

describe("14. Longest Common Prefix", () => {
  test('Example 1: ["flower","flow","flight"]', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  test('Example 2: ["dog","racecar","car"]', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  test("Single string", () => {
    expect(longestCommonPrefix(["hello"])).toBe("hello");
  });

  test("All identical strings", () => {
    expect(longestCommonPrefix(["abc", "abc", "abc"])).toBe("abc");
  });

  test("Empty string in array", () => {
    expect(longestCommonPrefix(["", "abc", "abd"])).toBe("");
  });

  test("Single character prefix", () => {
    expect(longestCommonPrefix(["apple", "ape", "art"])).toBe("a");
  });

  test("Full match with shorter string", () => {
    expect(longestCommonPrefix(["ab", "abc", "abcd"])).toBe("ab");
  });
});
