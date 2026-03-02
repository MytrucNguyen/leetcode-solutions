import { removeElement } from "./solution";

describe("27. Remove Element", () => {
  test("Example 1: [3,2,2,3], val = 3", () => {
    const nums = [3, 2, 2, 3];
    const k = removeElement(nums, 3);
    expect(k).toBe(2);
    expect(nums.slice(0, k).sort()).toEqual([2, 2]);
  });

  test("Example 2: [0,1,2,2,3,0,4,2], val = 2", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const k = removeElement(nums, 2);
    expect(k).toBe(5);
    expect(nums.slice(0, k).sort()).toEqual([0, 0, 1, 3, 4]);
  });

  test("Empty array", () => {
    const nums: number[] = [];
    expect(removeElement(nums, 1)).toBe(0);
  });

  test("All elements match val", () => {
    const nums = [3, 3, 3];
    expect(removeElement(nums, 3)).toBe(0);
  });

  test("No elements match val", () => {
    const nums = [1, 2, 3];
    const k = removeElement(nums, 4);
    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });

  test("Single element kept", () => {
    const nums = [1];
    const k = removeElement(nums, 2);
    expect(k).toBe(1);
    expect(nums[0]).toBe(1);
  });

  test("Single element removed", () => {
    const nums = [1];
    expect(removeElement(nums, 1)).toBe(0);
  });
});
