import { twoSum } from "./solution";

describe("167. Two Sum II - Input Array Is Sorted", () => {
  test("Example 1: [2,7,11,15], target 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test("Example 2: [2,3,4], target 6", () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });

  test("Example 3: [-1,0], target -1", () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });

  test("Answer at both ends", () => {
    expect(twoSum([1, 3, 5, 8], 9)).toEqual([1, 4]);
  });

  test("Answer in the middle", () => {
    expect(twoSum([1, 3, 5, 8], 8)).toEqual([2, 3]);
  });

  test("Negative numbers", () => {
    expect(twoSum([-5, -3, 0, 2, 7], -8)).toEqual([1, 2]);
  });

  test("Duplicates in array", () => {
    expect(twoSum([1, 2, 2, 4], 4)).toEqual([2, 3]);
  });
});
