import { containsDuplicate } from "./solution";

describe("Contains Duplicate", () => {
  test("Example 1: [1,2,3,1]", () => {
    const nums = [1, 2, 3, 1];
    const result = containsDuplicate(nums);
    const expected = true;

    console.log(
      `Test 1 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Example 2: [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = containsDuplicate(nums);
    const expected = false;

    console.log(
      `Test 2 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Example 3: [1,1,1,3,3,4,3,2,4,2]", () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const result = containsDuplicate(nums);
    const expected = true;

    console.log(
      `Test 3 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Single element", () => {
    const nums = [1];
    const result = containsDuplicate(nums);
    const expected = false;

    console.log(
      `Test 4 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Two same elements", () => {
    const nums = [1, 1];
    const result = containsDuplicate(nums);
    const expected = true;

    console.log(
      `Test 5 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Large array with duplicate at end", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    const result = containsDuplicate(nums);
    const expected = true;

    console.log(
      `Test 6 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("All unique elements", () => {
    const nums = [10, 20, 30, 40, 50];
    const result = containsDuplicate(nums);
    const expected = false;

    console.log(
      `Test 7 - Input: [${nums}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });
});
