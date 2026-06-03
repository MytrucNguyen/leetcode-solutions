import { romanToInt } from "./solution";

describe("13. Roman to Integer", () => {
  test('Example 1: "III"', () => {
    expect(romanToInt("III")).toBe(3);
  });

  test('Example 2: "LVIII"', () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  test('Example 3: "MCMXCIV"', () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  test('Single character: "V"', () => {
    expect(romanToInt("V")).toBe(5);
  });

  test("Subtraction case IV", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  test("Subtraction case IX", () => {
    expect(romanToInt("IX")).toBe(9);
  });

  test("Subtraction case XL", () => {
    expect(romanToInt("XL")).toBe(40);
  });

  test('All subtraction cases: "CDXLIV"', () => {
    expect(romanToInt("CDXLIV")).toBe(444);
  });

  test('Maximum value: "MMMCMXCIX"', () => {
    expect(romanToInt("MMMCMXCIX")).toBe(3999);
  });
});
