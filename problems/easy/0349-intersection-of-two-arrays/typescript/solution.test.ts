import { intersection } from "./solution";

describe("Intersection of Two Arrays", () => {
  test("Example 1: nums1=[1,2,2,1], nums2=[2,2]", () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    const result = intersection(nums1, nums2);
    const expected = [2];

    console.log(`Test 1 - Input: nums1=[${nums1}], nums2=[${nums2}]`);
    console.log(`  Output: [${result}]`);
    console.log(`  Expected: [${expected}]`);

    expect(result).toEqual(expected);
  });

  test("Example 2: nums1=[4,9,5], nums2=[9,4,9,8,4]", () => {
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    const result = intersection(nums1, nums2);

    console.log(`Test 2 - Input: nums1=[${nums1}], nums2=[${nums2}]`);
    console.log(`  Output: [${result}]`);
    console.log(`  Explanation: [4,9] or [9,4] are both valid`);

    // Sort both arrays for comparison since order doesn't matter
    const sortedResult = result.sort((a, b) => a - b);
    const expected = [4, 9];

    expect(sortedResult).toEqual(expected);
  });

  test("No intersection: nums1=[1,2], nums2=[3,4]", () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const result = intersection(nums1, nums2);
    const expected: number[] = [];

    console.log(`Test 3 - Input: nums1=[${nums1}], nums2=[${nums2}]`);
    console.log(`  Output: [${result}]`);
    console.log(`  Expected: [${expected}]`);

    expect(result).toEqual(expected);
  });

  test("All elements intersect: nums1=[1,2,3], nums2=[1,2,3]", () => {
    const nums1 = [1, 2, 3];
    const nums2 = [1, 2, 3];
    const result = intersection(nums1, nums2);

    console.log(`Test 4 - Input: nums1=[${nums1}], nums2=[${nums2}]`);
    console.log(`  Output: [${result}]`);

    const sortedResult = result.sort((a, b) => a - b);
    const expected = [1, 2, 3];

    expect(sortedResult).toEqual(expected);
  });

  test("Single element arrays: nums1=[1], nums2=[1]", () => {
    const nums1 = [1];
    const nums2 = [1];
    const result = intersection(nums1, nums2);
    const expected = [1];

    console.log(`Test 5 - Input: nums1=[${nums1}], nums2=[${nums2}]`);
    console.log(`  Output: [${result}]`);
    console.log(`  Expected: [${expected}]`);

    expect(result).toEqual(expected);
  });

  test("Single element no match: nums1=[1], nums2=[2]", () => {
    const nums1 = [1];
    const nums2 = [2];
    const result = intersection(nums1, nums2);
    const expected: number[] = [];

    console.log(`Test 6 - Input: nums1=[${nums1}], nums2=[${nums2}]`);
    console.log(`  Output: [${result}]`);
    console.log(`  Expected: [${expected}]`);

    expect(result).toEqual(expected);
  });

  test("Multiple duplicates: nums1=[1,1,1,2,2], nums2=[1,2,2,2]", () => {
    const nums1 = [1, 1, 1, 2, 2];
    const nums2 = [1, 2, 2, 2];
    const result = intersection(nums1, nums2);

    console.log(`Test 7 - Input: nums1=[${nums1}], nums2=[${nums2}]`);
    console.log(`  Output: [${result}]`);

    const sortedResult = result.sort((a, b) => a - b);
    const expected = [1, 2];

    expect(sortedResult).toEqual(expected);
  });

  test("One array subset of other: nums1=[1,2,3,4], nums2=[2,3]", () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [2, 3];
    const result = intersection(nums1, nums2);

    console.log(`Test 8 - Input: nums1=[${nums1}], nums2=[${nums2}]`);
    console.log(`  Output: [${result}]`);

    const sortedResult = result.sort((a, b) => a - b);
    const expected = [2, 3];

    expect(sortedResult).toEqual(expected);
  });

  test("Larger arrays: nums1=[3,1,2,4,5], nums2=[1,2,3,4,5,6]", () => {
    const nums1 = [3, 1, 2, 4, 5];
    const nums2 = [1, 2, 3, 4, 5, 6];
    const result = intersection(nums1, nums2);

    console.log(`Test 9 - Input: nums1=[${nums1}], nums2=[${nums2}]`);
    console.log(`  Output: [${result}]`);

    const sortedResult = result.sort((a, b) => a - b);
    const expected = [1, 2, 3, 4, 5];

    expect(sortedResult).toEqual(expected);
  });

  test("With zeros: nums1=[0,1,2], nums2=[0,2,3]", () => {
    const nums1 = [0, 1, 2];
    const nums2 = [0, 2, 3];
    const result = intersection(nums1, nums2);

    console.log(`Test 10 - Input: nums1=[${nums1}], nums2=[${nums2}]`);
    console.log(`  Output: [${result}]`);

    const sortedResult = result.sort((a, b) => a - b);
    const expected = [0, 2];

    expect(sortedResult).toEqual(expected);
  });
});
