import { hammingWeight } from "./solution";

describe("191. Number of 1 Bits", () => {
  test("Example 1: n = 11", () => {
    expect(hammingWeight(11)).toBe(3);
  });

  test("Example 2: n = 128", () => {
    expect(hammingWeight(128)).toBe(1);
  });

  test("Example 3: n = 2147483645", () => {
    expect(hammingWeight(2147483645)).toBe(30);
  });

  test("n = 1 (single bit)", () => {
    expect(hammingWeight(1)).toBe(1);
  });

  test("n = 7 (all lower bits set)", () => {
    expect(hammingWeight(7)).toBe(3);
  });

  test("n = 255 (8 bits all set)", () => {
    expect(hammingWeight(255)).toBe(8);
  });

  test("Power of two: n = 1024", () => {
    expect(hammingWeight(1024)).toBe(1);
  });
});
