import { productExceptSelf } from "./solution";

describe("Product of Array Except Self", () => {
  test("Example 1: [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = productExceptSelf(nums);
    const expected = [24, 12, 8, 6];

    console.log(
      `Test 1 - Input: [${nums}] → Output: [${result}], Expected: [${expected}]`
    );

    expect(result).toEqual(expected);
  });

  test("Example 2: [-1,1,0,-3,3]", () => {
    const nums = [-1, 1, 0, -3, 3];
    const result = productExceptSelf(nums).map((x) => (x === 0 ? 0 : x)); // Convert -0 to 0
    const expected = [0, 0, 9, 0, 0];

    console.log(
      `Test 2 - Input: [${nums}] → Output: [${result}], Expected: [${expected}]`
    );

    expect(result).toEqual(expected);
  });

  test("Two elements", () => {
    const nums = [2, 3];
    const result = productExceptSelf(nums);
    const expected = [3, 2];

    console.log(
      `Test 3 - Input: [${nums}] → Output: [${result}], Expected: [${expected}]`
    );

    expect(result).toEqual(expected);
  });

  test("All ones", () => {
    const nums = [1, 1, 1, 1];
    const result = productExceptSelf(nums);
    const expected = [1, 1, 1, 1];

    console.log(
      `Test 4 - Input: [${nums}] → Output: [${result}], Expected: [${expected}]`
    );

    expect(result).toEqual(expected);
  });

  test("With negative numbers", () => {
    const nums = [-1, -2, -3, -4];
    const result = productExceptSelf(nums);
    const expected = [-24, -12, -8, -6];

    console.log(
      `Test 5 - Input: [${nums}] → Output: [${result}], Expected: [${expected}]`
    );

    expect(result).toEqual(expected);
  });

  test("Zero at beginning", () => {
    const nums = [0, 1, 2, 3];
    const result = productExceptSelf(nums);
    const expected = [6, 0, 0, 0];

    console.log(
      `Test 6 - Input: [${nums}] → Output: [${result}], Expected: [${expected}]`
    );

    expect(result).toEqual(expected);
  });

  test("Zero at end", () => {
    const nums = [1, 2, 3, 0];
    const result = productExceptSelf(nums);
    const expected = [0, 0, 0, 6];

    console.log(
      `Test 7 - Input: [${nums}] → Output: [${result}], Expected: [${expected}]`
    );

    expect(result).toEqual(expected);
  });

  test("Multiple zeros", () => {
    const nums = [0, 0, 1, 2];
    const result = productExceptSelf(nums);
    const expected = [0, 0, 0, 0];

    console.log(
      `Test 8 - Input: [${nums}] → Output: [${result}], Expected: [${expected}]`
    );

    expect(result).toEqual(expected);
  });
});
