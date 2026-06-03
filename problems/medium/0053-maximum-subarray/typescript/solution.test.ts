import { maxSubArray } from "./solution";

describe("Maximum Subarray", () => {
  test("Example 1: [-2,1,-3,4,-1,2,1,-5,4]", () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const result = maxSubArray(nums);
    const expected = 6;

    console.log(
      `Test 1 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Example 2: [1]", () => {
    const nums = [1];
    const result = maxSubArray(nums);
    const expected = 1;

    console.log(
      `Test 2 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Example 3: [5,4,-1,7,8]", () => {
    const nums = [5, 4, -1, 7, 8];
    const result = maxSubArray(nums);
    const expected = 23;

    console.log(
      `Test 3 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("All negative numbers", () => {
    const nums = [-2, -1, -3, -4, -1, -2];
    const result = maxSubArray(nums);
    const expected = -1;

    console.log(
      `Test 4 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("All positive numbers", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = maxSubArray(nums);
    const expected = 15;

    console.log(
      `Test 5 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Mixed with zeros", () => {
    const nums = [0, -3, 1, 1, 0, -5, 4];
    const result = maxSubArray(nums);
    const expected = 4;

    console.log(
      `Test 6 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Single negative number", () => {
    const nums = [-1];
    const result = maxSubArray(nums);
    const expected = -1;

    console.log(
      `Test 7 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Large positive at end", () => {
    const nums = [-2, -3, -1, 100];
    const result = maxSubArray(nums);
    const expected = 100;

    console.log(
      `Test 8 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Alternating positive and negative", () => {
    const nums = [1, -1, 1, -1, 1, -1, 1];
    const result = maxSubArray(nums);
    const expected = 1;

    console.log(
      `Test 9 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });

  test("Large numbers", () => {
    const nums = [100, -50, 200, -100, 150];
    const result = maxSubArray(nums);
    const expected = 300;

    console.log(
      `Test 10 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`,
    );

    expect(result).toBe(expected);
  });
});
