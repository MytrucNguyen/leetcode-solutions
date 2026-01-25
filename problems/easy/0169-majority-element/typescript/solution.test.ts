import {
  majorityElement,
  majorityElementHashMap,
  majorityElementSorting,
} from "./solution";

describe("Majority Element - Boyer-Moore (Main Solution)", () => {
  test("Example 1: [3,2,3]", () => {
    const nums = [3, 2, 3];
    const result = majorityElement(nums);
    const expected = 3;

    console.log(
      `Test 1 (Boyer-Moore) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Example 2: [2,2,1,1,1,2,2]", () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    const result = majorityElement(nums);
    const expected = 2;

    console.log(
      `Test 2 (Boyer-Moore) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Single element", () => {
    const nums = [1];
    const result = majorityElement(nums);
    const expected = 1;

    console.log(
      `Test 3 (Boyer-Moore) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("All same elements", () => {
    const nums = [5, 5, 5, 5, 5];
    const result = majorityElement(nums);
    const expected = 5;

    console.log(
      `Test 4 (Boyer-Moore) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Majority at beginning", () => {
    const nums = [1, 1, 1, 2, 2];
    const result = majorityElement(nums);
    const expected = 1;

    console.log(
      `Test 5 (Boyer-Moore) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Majority at end", () => {
    const nums = [1, 2, 2, 2, 2];
    const result = majorityElement(nums);
    const expected = 2;

    console.log(
      `Test 6 (Boyer-Moore) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("With negative numbers", () => {
    const nums = [-1, 1, 1, 1, 1, -1, -1];
    const result = majorityElement(nums);
    const expected = 1;

    console.log(
      `Test 7 (Boyer-Moore) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });
});

describe("Majority Element - Hash Map Approach", () => {
  test("Example 1: [3,2,3]", () => {
    const nums = [3, 2, 3];
    const result = majorityElementHashMap(nums);
    const expected = 3;

    console.log(
      `Test 1 (Hash Map) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Example 2: [2,2,1,1,1,2,2]", () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    const result = majorityElementHashMap(nums);
    const expected = 2;

    console.log(
      `Test 2 (Hash Map) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Single element", () => {
    const nums = [1];
    const result = majorityElementHashMap(nums);
    const expected = 1;

    console.log(
      `Test 3 (Hash Map) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });
});

describe("Majority Element - Sorting Approach", () => {
  test("Example 1: [3,2,3]", () => {
    const nums = [3, 2, 3];
    const result = majorityElementSorting(nums);
    const expected = 3;

    console.log(
      `Test 1 (Sorting) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Example 2: [2,2,1,1,1,2,2]", () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    const result = majorityElementSorting(nums);
    const expected = 2;

    console.log(
      `Test 2 (Sorting) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Single element", () => {
    const nums = [1];
    const result = majorityElementSorting(nums);
    const expected = 1;

    console.log(
      `Test 3 (Sorting) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("All same elements", () => {
    const nums = [5, 5, 5, 5, 5];
    const result = majorityElementSorting(nums);
    const expected = 5;

    console.log(
      `Test 4 (Sorting) - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });
});
