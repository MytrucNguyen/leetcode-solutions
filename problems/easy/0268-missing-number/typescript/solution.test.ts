import { missingNumber } from "./solution";

describe("Missing Number", () => {
  test("Example 1: [3,0,1]", () => {
    const nums = [3, 0, 1];
    const result = missingNumber(nums);
    const expected = 2;

    console.log(
      `Test 1 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Example 2: [0,1]", () => {
    const nums = [0, 1];
    const result = missingNumber(nums);
    const expected = 2;

    console.log(
      `Test 2 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Example 3: [9,6,4,2,3,5,7,0,1]", () => {
    const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
    const result = missingNumber(nums);
    const expected = 8;

    console.log(
      `Test 3 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Missing 0", () => {
    const nums = [1, 2, 3];
    const result = missingNumber(nums);
    const expected = 0;

    console.log(
      `Test 4 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Missing last number", () => {
    const nums = [0, 1, 2, 3, 4];
    const result = missingNumber(nums);
    const expected = 5;

    console.log(
      `Test 5 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Single element [0]", () => {
    const nums = [0];
    const result = missingNumber(nums);
    const expected = 1;

    console.log(
      `Test 6 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Single element [1]", () => {
    const nums = [1];
    const result = missingNumber(nums);
    const expected = 0;

    console.log(
      `Test 7 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });
});
