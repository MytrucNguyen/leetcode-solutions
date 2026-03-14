import { canConstruct } from "./solution";

describe("383. Ransom Note", () => {
  test('Example 1: "a" from "b"', () => {
    expect(canConstruct("a", "b")).toBe(false);
  });

  test('Example 2: "aa" from "ab"', () => {
    expect(canConstruct("aa", "ab")).toBe(false);
  });

  test('Example 3: "aa" from "aab"', () => {
    expect(canConstruct("aa", "aab")).toBe(true);
  });

  test("Exact match", () => {
    expect(canConstruct("abc", "abc")).toBe(true);
  });

  test("Empty ransom note", () => {
    expect(canConstruct("", "anything")).toBe(true);
  });

  test("Magazine has extra characters", () => {
    expect(canConstruct("ab", "xyzabc")).toBe(true);
  });

  test("Same letters different counts", () => {
    expect(canConstruct("aaa", "aa")).toBe(false);
  });

  test("Single character match", () => {
    expect(canConstruct("a", "a")).toBe(true);
  });
});
