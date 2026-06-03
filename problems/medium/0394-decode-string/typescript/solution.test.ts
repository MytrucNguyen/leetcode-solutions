import { decodeString } from "./solution";

describe("394. Decode String", () => {
  test('Example 1: "3[a]2[bc]"', () => {
    expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
  });

  test('Example 2: "3[a2[c]]"', () => {
    expect(decodeString("3[a2[c]]")).toBe("accaccacc");
  });

  test('Example 3: "2[abc]3[cd]ef"', () => {
    expect(decodeString("2[abc]3[cd]ef")).toBe("abcabccdcdcdef");
  });

  test("No brackets", () => {
    expect(decodeString("abc")).toBe("abc");
  });

  test("Single repeat", () => {
    expect(decodeString("1[a]")).toBe("a");
  });

  test("Multi-digit number", () => {
    expect(decodeString("10[a]")).toBe("aaaaaaaaaa");
  });

  test("Triple nested", () => {
    expect(decodeString("2[a2[b3[c]]]")).toBe("abcccbcccabcccbccc");
  });

  test("Letters between brackets", () => {
    expect(decodeString("abc3[d]xyz")).toBe("abcdddxyz");
  });
});
