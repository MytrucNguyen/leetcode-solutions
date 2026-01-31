import { search } from "./solution";

describe("Binary Search", () => {
  test("Example 1: target = 9", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    const result = search(nums, target);
    const expected = 4;

    console.log(
      `Test 1 - Input: [${nums}], target: ${target} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Example 2: target = 2 (not found)", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 2;
    const result = search(nums, target);
    const expected = -1;

    console.log(
      `Test 2 - Input: [${nums}], target: ${target} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Single element - found", () => {
    const nums = [5];
    const target = 5;
    const result = search(nums, target);
    const expected = 0;

    console.log(
      `Test 3 - Input: [${nums}], target: ${target} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Single element - not found", () => {
    const nums = [5];
    const target = 3;
    const result = search(nums, target);
    const expected = -1;

    console.log(
      `Test 4 - Input: [${nums}], target: ${target} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Target is first element", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = -1;
    const result = search(nums, target);
    const expected = 0;

    console.log(
      `Test 5 - Input: [${nums}], target: ${target} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Target is last element", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 12;
    const result = search(nums, target);
    const expected = 5;

    console.log(
      `Test 6 - Input: [${nums}], target: ${target} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Target is middle element", () => {
    const nums = [1, 3, 5, 7, 9];
    const target = 5;
    const result = search(nums, target);
    const expected = 2;

    console.log(
      `Test 7 - Input: [${nums}], target: ${target} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Two elements - found first", () => {
    const nums = [3, 5];
    const target = 3;
    const result = search(nums, target);
    const expected = 0;

    console.log(
      `Test 8 - Input: [${nums}], target: ${target} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Two elements - found second", () => {
    const nums = [3, 5];
    const target = 5;
    const result = search(nums, target);
    const expected = 1;

    console.log(
      `Test 9 - Input: [${nums}], target: ${target} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Negative numbers", () => {
    const nums = [-10, -5, -3, -1, 0, 2];
    const target = -5;
    const result = search(nums, target);
    const expected = 1;

    console.log(
      `Test 10 - Input: [${nums}], target: ${target} → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });
});
