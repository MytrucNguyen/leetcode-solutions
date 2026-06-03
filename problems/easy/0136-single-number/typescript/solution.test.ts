import { singleNumber } from "./solution";

describe("Single Number", () => {
  test("Example 1: [2,2,1]", () => {
    const nums = [2, 2, 1];
    const result = singleNumber(nums);
    const expected = 1;

    console.log(`Test 1 - Input: [${nums}]`);
    console.log(`  Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Example 2: [4,1,2,1,2]", () => {
    const nums = [4, 1, 2, 1, 2];
    const result = singleNumber(nums);
    const expected = 4;

    console.log(`Test 2 - Input: [${nums}]`);
    console.log(`  Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Example 3: [1]", () => {
    const nums = [1];
    const result = singleNumber(nums);
    const expected = 1;

    console.log(`Test 3 - Input: [${nums}]`);
    console.log(`  Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Single element: [100]", () => {
    const nums = [100];
    const result = singleNumber(nums);
    const expected = 100;

    console.log(`Test 4 - Input: [${nums}]`);
    console.log(`  Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Three pairs plus one: [5,5,7,7,9,9,3]", () => {
    const nums = [5, 5, 7, 7, 9, 9, 3];
    const result = singleNumber(nums);
    const expected = 3;

    console.log(`Test 5 - Input: [${nums}]`);
    console.log(`  Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Single at beginning: [10,5,5,3,3]", () => {
    const nums = [10, 5, 5, 3, 3];
    const result = singleNumber(nums);
    const expected = 10;

    console.log(`Test 6 - Input: [${nums}]`);
    console.log(`  Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Single at end: [8,8,6,6,4,4,2]", () => {
    const nums = [8, 8, 6, 6, 4, 4, 2];
    const result = singleNumber(nums);
    const expected = 2;

    console.log(`Test 7 - Input: [${nums}]`);
    console.log(`  Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Negative numbers: [-1,-1,-2]", () => {
    const nums = [-1, -1, -2];
    const result = singleNumber(nums);
    const expected = -2;

    console.log(`Test 8 - Input: [${nums}]`);
    console.log(`  Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Mixed positive and negative: [1,1,-1]", () => {
    const nums = [1, 1, -1];
    const result = singleNumber(nums);
    const expected = -1;

    console.log(`Test 9 - Input: [${nums}]`);
    console.log(`  Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });

  test("Large numbers: [30000,30000,15000]", () => {
    const nums = [30000, 30000, 15000];
    const result = singleNumber(nums);
    const expected = 15000;

    console.log(`Test 10 - Input: [${nums}]`);
    console.log(`  Output: ${result}, Expected: ${expected}`);

    expect(result).toBe(expected);
  });
});
