import { runningSum } from "./solution";

describe("1480. Running Sum of 1d Array", () => {
  test("Example 1: [1,2,3,4]", () => {
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  test("Example 2: [1,1,1,1,1]", () => {
    expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Example 3: [3,1,2,10,1]", () => {
    expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
  });

  test("Single element", () => {
    expect(runningSum([5])).toEqual([5]);
  });

  test("Two elements", () => {
    expect(runningSum([1, 2])).toEqual([1, 3]);
  });

  test("Negative numbers", () => {
    expect(runningSum([1, -1, 2, -2])).toEqual([1, 0, 2, 0]);
  });

  test("All zeros", () => {
    expect(runningSum([0, 0, 0])).toEqual([0, 0, 0]);
  });
});
