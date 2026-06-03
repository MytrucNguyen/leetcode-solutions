import { reverseString } from "./solution";

describe("Reverse String", () => {
  test("Example 1: ['h','e','l','l','o']", () => {
    const s = ["h", "e", "l", "l", "o"];
    reverseString(s);
    const expected = ["o", "l", "l", "e", "h"];

    console.log(`Test 1 - Input: ['h','e','l','l','o']`);
    console.log(`  Output: [${s}]`);
    console.log(`  Expected: [${expected}]`);

    expect(s).toEqual(expected);
  });

  test("Example 2: ['H','a','n','n','a','h']", () => {
    const s = ["H", "a", "n", "n", "a", "h"];
    reverseString(s);
    const expected = ["h", "a", "n", "n", "a", "H"];

    console.log(`Test 2 - Input: ['H','a','n','n','a','h']`);
    console.log(`  Output: [${s}]`);
    console.log(`  Expected: [${expected}]`);

    expect(s).toEqual(expected);
  });

  test("Single character: ['a']", () => {
    const s = ["a"];
    reverseString(s);
    const expected = ["a"];

    console.log(`Test 3 - Input: ['a']`);
    console.log(`  Output: [${s}]`);
    console.log(`  Expected: [${expected}]`);

    expect(s).toEqual(expected);
  });

  test("Two characters: ['a','b']", () => {
    const s = ["a", "b"];
    reverseString(s);
    const expected = ["b", "a"];

    console.log(`Test 4 - Input: ['a','b']`);
    console.log(`  Output: [${s}]`);
    console.log(`  Expected: [${expected}]`);

    expect(s).toEqual(expected);
  });

  test("Three characters: ['a','b','c']", () => {
    const s = ["a", "b", "c"];
    reverseString(s);
    const expected = ["c", "b", "a"];

    console.log(`Test 5 - Input: ['a','b','c']`);
    console.log(`  Output: [${s}]`);
    console.log(`  Expected: [${expected}]`);

    expect(s).toEqual(expected);
  });

  test("All same characters: ['a','a','a','a']", () => {
    const s = ["a", "a", "a", "a"];
    reverseString(s);
    const expected = ["a", "a", "a", "a"];

    console.log(`Test 6 - Input: ['a','a','a','a']`);
    console.log(`  Output: [${s}]`);
    console.log(`  Expected: [${expected}]`);

    expect(s).toEqual(expected);
  });

  test("Numbers as strings: ['1','2','3','4','5']", () => {
    const s = ["1", "2", "3", "4", "5"];
    reverseString(s);
    const expected = ["5", "4", "3", "2", "1"];

    console.log(`Test 7 - Input: ['1','2','3','4','5']`);
    console.log(`  Output: [${s}]`);
    console.log(`  Expected: [${expected}]`);

    expect(s).toEqual(expected);
  });

  test("Special characters: ['!','@','#','$']", () => {
    const s = ["!", "@", "#", "$"];
    reverseString(s);
    const expected = ["$", "#", "@", "!"];

    console.log(`Test 8 - Input: ['!','@','#','$']`);
    console.log(`  Output: [${s}]`);
    console.log(`  Expected: [${expected}]`);

    expect(s).toEqual(expected);
  });

  test("Spaces: [' ','a',' ','b',' ']", () => {
    const s = [" ", "a", " ", "b", " "];
    reverseString(s);
    const expected = [" ", "b", " ", "a", " "];

    console.log(`Test 9 - Input: [' ','a',' ','b',' ']`);
    console.log(`  Output: [${s}]`);
    console.log(`  Expected: [${expected}]`);

    expect(s).toEqual(expected);
  });

  test("Even length: ['A','B','C','D']", () => {
    const s = ["A", "B", "C", "D"];
    reverseString(s);
    const expected = ["D", "C", "B", "A"];

    console.log(`Test 10 - Input: ['A','B','C','D']`);
    console.log(`  Output: [${s}]`);
    console.log(`  Expected: [${expected}]`);

    expect(s).toEqual(expected);
  });
});
