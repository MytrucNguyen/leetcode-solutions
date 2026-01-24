import { moveZeroes } from "./solution";

describe("Move Zeroes", () => {
  test("Example 1: [0,1,0,3,12]", () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    const expected = [1, 3, 12, 0, 0];

    console.log(`Test 1 - Output: [${nums}], Expected: [${expected}]`);

    expect(nums).toEqual(expected);
  });

  test("Example 2: [0]", () => {
    const nums = [0];
    moveZeroes(nums);
    const expected = [0];

    console.log(`Test 2 - Output: [${nums}], Expected: [${expected}]`);

    expect(nums).toEqual(expected);
  });

  test("All zeros", () => {
    const nums = [0, 0, 0, 0];
    moveZeroes(nums);
    const expected = [0, 0, 0, 0];

    console.log(`Test 3 - Output: [${nums}], Expected: [${expected}]`);

    expect(nums).toEqual(expected);
  });

  test("No zeros", () => {
    const nums = [1, 2, 3, 4];
    moveZeroes(nums);
    const expected = [1, 2, 3, 4];

    console.log(`Test 4 - Output: [${nums}], Expected: [${expected}]`);

    expect(nums).toEqual(expected);
  });

  test("Zeros at beginning", () => {
    const nums = [0, 0, 1, 2, 3];
    moveZeroes(nums);
    const expected = [1, 2, 3, 0, 0];

    console.log(`Test 5 - Output: [${nums}], Expected: [${expected}]`);

    expect(nums).toEqual(expected);
  });

  test("Zeros at end", () => {
    const nums = [1, 2, 3, 0, 0];
    moveZeroes(nums);
    const expected = [1, 2, 3, 0, 0];

    console.log(`Test 6 - Output: [${nums}], Expected: [${expected}]`);

    expect(nums).toEqual(expected);
  });

  test("Single non-zero", () => {
    const nums = [1];
    moveZeroes(nums);
    const expected = [1];

    console.log(`Test 7 - Output: [${nums}], Expected: [${expected}]`);

    expect(nums).toEqual(expected);
  });

  test("Alternating zeros and non-zeros", () => {
    const nums = [0, 1, 0, 2, 0, 3];
    moveZeroes(nums);
    const expected = [1, 2, 3, 0, 0, 0];

    console.log(`Test 8 - Output: [${nums}], Expected: [${expected}]`);

    expect(nums).toEqual(expected);
  });

  test("With negative numbers", () => {
    const nums = [0, -1, 0, 3, -2];
    moveZeroes(nums);
    const expected = [-1, 3, -2, 0, 0];

    console.log(`Test 9 - Output: [${nums}], Expected: [${expected}]`);

    expect(nums).toEqual(expected);
  });

  test("Large numbers", () => {
    const nums = [0, 100, 0, 200, 300];
    moveZeroes(nums);
    const expected = [100, 200, 300, 0, 0];

    console.log(`Test 10 - Output: [${nums}], Expected: [${expected}]`);

    expect(nums).toEqual(expected);
  });
});
