import { rotate } from "./solution";

describe("189. Rotate Array", () => {
  test("Example 1: [1,2,3,4,5,6,7], k = 3", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 3);
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  test("Example 2: [-1,-100,3,99], k = 2", () => {
    const nums = [-1, -100, 3, 99];
    rotate(nums, 2);
    expect(nums).toEqual([3, 99, -1, -100]);
  });

  test("k = 0, no rotation", () => {
    const nums = [1, 2, 3];
    rotate(nums, 0);
    expect(nums).toEqual([1, 2, 3]);
  });

  test("k equals array length", () => {
    const nums = [1, 2, 3];
    rotate(nums, 3);
    expect(nums).toEqual([1, 2, 3]);
  });

  test("k greater than array length", () => {
    const nums = [1, 2, 3];
    rotate(nums, 5);
    expect(nums).toEqual([2, 3, 1]);
  });

  test("Single element", () => {
    const nums = [1];
    rotate(nums, 1);
    expect(nums).toEqual([1]);
  });

  test("Two elements", () => {
    const nums = [1, 2];
    rotate(nums, 1);
    expect(nums).toEqual([2, 1]);
  });

  test("Rotate by 1", () => {
    const nums = [1, 2, 3, 4];
    rotate(nums, 1);
    expect(nums).toEqual([4, 1, 2, 3]);
  });
});
