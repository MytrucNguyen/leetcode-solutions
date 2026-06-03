import { sortColors } from "./solution";

describe("75. Sort Colors", () => {
  test("Example 1: [2,0,2,1,1,0]", () => {
    const nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test("Example 2: [2,0,1]", () => {
    const nums = [2, 0, 1];
    sortColors(nums);
    expect(nums).toEqual([0, 1, 2]);
  });

  test("Already sorted", () => {
    const nums = [0, 0, 1, 1, 2, 2];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test("Reverse sorted", () => {
    const nums = [2, 2, 1, 1, 0, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test("All same - zeros", () => {
    const nums = [0, 0, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 0]);
  });

  test("All same - twos", () => {
    const nums = [2, 2, 2];
    sortColors(nums);
    expect(nums).toEqual([2, 2, 2]);
  });

  test("Single element", () => {
    const nums = [1];
    sortColors(nums);
    expect(nums).toEqual([1]);
  });

  test("Only zeros and twos", () => {
    const nums = [2, 0, 2, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 2, 2]);
  });

  test("Two elements", () => {
    const nums = [1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 1]);
  });
});
