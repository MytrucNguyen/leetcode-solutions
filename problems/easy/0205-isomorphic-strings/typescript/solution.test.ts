import { isIsomorphic } from "./solution";

describe("205. Isomorphic Strings", () => {
  test('Example 1: "egg" and "add"', () => {
    expect(isIsomorphic("egg", "add")).toBe(true);
  });

  test('Example 2: "foo" and "bar"', () => {
    expect(isIsomorphic("foo", "bar")).toBe(false);
  });

  test('Example 3: "paper" and "title"', () => {
    expect(isIsomorphic("paper", "title")).toBe(true);
  });

  test("Same strings", () => {
    expect(isIsomorphic("abc", "abc")).toBe(true);
  });

  test("Single characters", () => {
    expect(isIsomorphic("a", "b")).toBe(true);
  });

  test("Two chars map to same (reverse check)", () => {
    expect(isIsomorphic("badc", "baba")).toBe(false);
  });

  test("All same character", () => {
    expect(isIsomorphic("aaa", "bbb")).toBe(true);
  });

  test("Character maps to itself", () => {
    expect(isIsomorphic("ab", "ab")).toBe(true);
  });
});
