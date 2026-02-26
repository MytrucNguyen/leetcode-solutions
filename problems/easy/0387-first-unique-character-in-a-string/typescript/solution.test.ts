import { firstUniqChar } from "./solution";

describe("387. First Unique Character in a String", () => {
  test('Example 1: "leetcode"', () => {
    expect(firstUniqChar("leetcode")).toBe(0);
  });

  test('Example 2: "loveleetcode"', () => {
    expect(firstUniqChar("loveleetcode")).toBe(2);
  });

  test('Example 3: "aabb"', () => {
    expect(firstUniqChar("aabb")).toBe(-1);
  });

  test("Single character", () => {
    expect(firstUniqChar("a")).toBe(0);
  });

  test("Unique at the end", () => {
    expect(firstUniqChar("aabbc")).toBe(4);
  });

  test("All same characters", () => {
    expect(firstUniqChar("aaaa")).toBe(-1);
  });

  test("All unique characters", () => {
    expect(firstUniqChar("abcdef")).toBe(0);
  });
});
