import { merge } from "./solution";

describe("Merge Sorted Array", () => {
  test("Example 1: [1,2,3,0,0,0] and [2,5,6]", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    merge(nums1, m, nums2, n);
    const expected = [1, 2, 2, 3, 5, 6];

    console.log(`Test 1 - Output: [${nums1}], Expected: [${expected}]`);

    expect(nums1).toEqual(expected);
  });

  test("Example 2: [1] and []", () => {
    const nums1 = [1];
    const m = 1;
    const nums2: number[] = [];
    const n = 0;

    merge(nums1, m, nums2, n);
    const expected = [1];

    console.log(`Test 2 - Output: [${nums1}], Expected: [${expected}]`);

    expect(nums1).toEqual(expected);
  });

  test("Example 3: [0] and [1]", () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;

    merge(nums1, m, nums2, n);
    const expected = [1];

    console.log(`Test 3 - Output: [${nums1}], Expected: [${expected}]`);

    expect(nums1).toEqual(expected);
  });

  test("All nums2 elements smaller: [4,5,6,0,0,0] and [1,2,3]", () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    const m = 3;
    const nums2 = [1, 2, 3];
    const n = 3;

    merge(nums1, m, nums2, n);
    const expected = [1, 2, 3, 4, 5, 6];

    console.log(`Test 4 - Output: [${nums1}], Expected: [${expected}]`);

    expect(nums1).toEqual(expected);
  });

  test("All nums2 elements larger: [1,2,3,0,0,0] and [4,5,6]", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [4, 5, 6];
    const n = 3;

    merge(nums1, m, nums2, n);
    const expected = [1, 2, 3, 4, 5, 6];

    console.log(`Test 5 - Output: [${nums1}], Expected: [${expected}]`);

    expect(nums1).toEqual(expected);
  });

  test("Interleaved: [1,3,5,0,0,0] and [2,4,6]", () => {
    const nums1 = [1, 3, 5, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 4, 6];
    const n = 3;

    merge(nums1, m, nums2, n);
    const expected = [1, 2, 3, 4, 5, 6];

    console.log(`Test 6 - Output: [${nums1}], Expected: [${expected}]`);

    expect(nums1).toEqual(expected);
  });

  test("Duplicates: [1,2,2,0,0,0] and [2,2,3]", () => {
    const nums1 = [1, 2, 2, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 2, 3];
    const n = 3;

    merge(nums1, m, nums2, n);
    const expected = [1, 2, 2, 2, 2, 3];

    console.log(`Test 7 - Output: [${nums1}], Expected: [${expected}]`);

    expect(nums1).toEqual(expected);
  });

  test("Single element each: [2,0] and [1]", () => {
    const nums1 = [2, 0];
    const m = 1;
    const nums2 = [1];
    const n = 1;

    merge(nums1, m, nums2, n);
    const expected = [1, 2];

    console.log(`Test 8 - Output: [${nums1}], Expected: [${expected}]`);

    expect(nums1).toEqual(expected);
  });

  test("nums1 empty: [0,0,0] and [1,2,3]", () => {
    const nums1 = [0, 0, 0];
    const m = 0;
    const nums2 = [1, 2, 3];
    const n = 3;

    merge(nums1, m, nums2, n);
    const expected = [1, 2, 3];

    console.log(`Test 9 - Output: [${nums1}], Expected: [${expected}]`);

    expect(nums1).toEqual(expected);
  });

  test("Negative numbers: [-3,-1,0,0,0] and [-2,5,6]", () => {
    const nums1 = [-3, -1, 0, 0, 0];
    const m = 2;
    const nums2 = [-2, 5, 6];
    const n = 3;

    merge(nums1, m, nums2, n);
    const expected = [-3, -2, -1, 5, 6];

    console.log(`Test 10 - Output: [${nums1}], Expected: [${expected}]`);

    expect(nums1).toEqual(expected);
  });
});
