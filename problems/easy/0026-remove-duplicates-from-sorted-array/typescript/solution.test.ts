import { removeDuplicates } from "./solution";

describe("Remove Duplicates from Sorted Array", () => {
  test("Example 1: [1,1,2]", () => {
    const nums = [1, 1, 2];
    const result = removeDuplicates(nums);
    const expectedLength = 2;
    const expectedNums = [1, 2];

    console.log(`Test 1 - Input: [1,1,2]`);
    console.log(`  Output length: ${result}, Expected: ${expectedLength}`);
    console.log(
      `  Modified array (first ${result} elements): [${nums.slice(0, result)}]`,
    );
    console.log(`  Expected: [${expectedNums}]`);

    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test("Example 2: [0,0,1,1,1,2,2,3,3,4]", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const result = removeDuplicates(nums);
    const expectedLength = 5;
    const expectedNums = [0, 1, 2, 3, 4];

    console.log(`Test 2 - Input: [0,0,1,1,1,2,2,3,3,4]`);
    console.log(`  Output length: ${result}, Expected: ${expectedLength}`);
    console.log(
      `  Modified array (first ${result} elements): [${nums.slice(0, result)}]`,
    );
    console.log(`  Expected: [${expectedNums}]`);

    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test("Single element [1]", () => {
    const nums = [1];
    const result = removeDuplicates(nums);
    const expectedLength = 1;
    const expectedNums = [1];

    console.log(`Test 3 - Input: [1]`);
    console.log(`  Output length: ${result}, Expected: ${expectedLength}`);

    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test("No duplicates [1,2,3,4,5]", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = removeDuplicates(nums);
    const expectedLength = 5;
    const expectedNums = [1, 2, 3, 4, 5];

    console.log(`Test 4 - Input: [1,2,3,4,5]`);
    console.log(`  Output length: ${result}, Expected: ${expectedLength}`);

    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test("All same elements [2,2,2,2,2]", () => {
    const nums = [2, 2, 2, 2, 2];
    const result = removeDuplicates(nums);
    const expectedLength = 1;
    const expectedNums = [2];

    console.log(`Test 5 - Input: [2,2,2,2,2]`);
    console.log(`  Output length: ${result}, Expected: ${expectedLength}`);

    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test("Two elements, same [1,1]", () => {
    const nums = [1, 1];
    const result = removeDuplicates(nums);
    const expectedLength = 1;
    const expectedNums = [1];

    console.log(`Test 6 - Input: [1,1]`);
    console.log(`  Output length: ${result}, Expected: ${expectedLength}`);

    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test("Two elements, different [1,2]", () => {
    const nums = [1, 2];
    const result = removeDuplicates(nums);
    const expectedLength = 2;
    const expectedNums = [1, 2];

    console.log(`Test 7 - Input: [1,2]`);
    console.log(`  Output length: ${result}, Expected: ${expectedLength}`);

    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test("Negative numbers [-3,-3,-1,0,0,0,1,1]", () => {
    const nums = [-3, -3, -1, 0, 0, 0, 1, 1];
    const result = removeDuplicates(nums);
    const expectedLength = 4;
    const expectedNums = [-3, -1, 0, 1];

    console.log(`Test 8 - Input: [-3,-3,-1,0,0,0,1,1]`);
    console.log(`  Output length: ${result}, Expected: ${expectedLength}`);

    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test("Large duplicates at start [1,1,1,1,1,2,3]", () => {
    const nums = [1, 1, 1, 1, 1, 2, 3];
    const result = removeDuplicates(nums);
    const expectedLength = 3;
    const expectedNums = [1, 2, 3];

    console.log(`Test 9 - Input: [1,1,1,1,1,2,3]`);
    console.log(`  Output length: ${result}, Expected: ${expectedLength}`);

    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  test("Large duplicates at end [1,2,3,3,3,3,3]", () => {
    const nums = [1, 2, 3, 3, 3, 3, 3];
    const result = removeDuplicates(nums);
    const expectedLength = 3;
    const expectedNums = [1, 2, 3];

    console.log(`Test 10 - Input: [1,2,3,3,3,3,3]`);
    console.log(`  Output length: ${result}, Expected: ${expectedLength}`);

    expect(result).toBe(expectedLength);
    for (let i = 0; i < expectedLength; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });
});
