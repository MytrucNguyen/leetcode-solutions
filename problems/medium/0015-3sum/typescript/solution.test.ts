import { threeSum } from "./solution";

describe("3Sum", () => {
  test("Example 1: [-1,0,1,2,-1,-4]", () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = threeSum(nums);
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];

    console.log(
      `Test 1 - Input: [${nums}] → Output: ${JSON.stringify(
        result
      )}, Expected: ${JSON.stringify(expected)}`
    );

    expect(result).toEqual(expected);
  });

  test("Example 2: [0,1,1]", () => {
    const nums = [0, 1, 1];
    const result = threeSum(nums);
    const expected: number[][] = [];

    console.log(
      `Test 2 - Input: [${nums}] → Output: ${JSON.stringify(
        result
      )}, Expected: ${JSON.stringify(expected)}`
    );

    expect(result).toEqual(expected);
  });

  test("Example 3: [0,0,0]", () => {
    const nums = [0, 0, 0];
    const result = threeSum(nums);
    const expected = [[0, 0, 0]];

    console.log(
      `Test 3 - Input: [${nums}] → Output: ${JSON.stringify(
        result
      )}, Expected: ${JSON.stringify(expected)}`
    );

    expect(result).toEqual(expected);
  });

  test("No triplets", () => {
    const nums = [1, 2, 3];
    const result = threeSum(nums);
    const expected: number[][] = [];

    console.log(
      `Test 4 - Input: [${nums}] → Output: ${JSON.stringify(
        result
      )}, Expected: ${JSON.stringify(expected)}`
    );

    expect(result).toEqual(expected);
  });

  test("Multiple triplets", () => {
    const nums = [-2, 0, 0, 2, 2];
    const result = threeSum(nums);
    const expected = [[-2, 0, 2]];

    console.log(
      `Test 5 - Input: [${nums}] → Output: ${JSON.stringify(
        result
      )}, Expected: ${JSON.stringify(expected)}`
    );

    expect(result).toEqual(expected);
  });

  test("Negative numbers", () => {
    const nums = [-4, -1, -1, 0, 1, 2];
    const result = threeSum(nums);
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];

    console.log(
      `Test 6 - Input: [${nums}] → Output: ${JSON.stringify(
        result
      )}, Expected: ${JSON.stringify(expected)}`
    );

    expect(result).toEqual(expected);
  });

  test("All same numbers", () => {
    const nums = [1, 1, 1, 1];
    const result = threeSum(nums);
    const expected: number[][] = [];

    console.log(
      `Test 7 - Input: [${nums}] → Output: ${JSON.stringify(
        result
      )}, Expected: ${JSON.stringify(expected)}`
    );

    expect(result).toEqual(expected);
  });
});
