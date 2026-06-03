import { findDisappearedNumbers } from "./solution";

describe("448. Find All Numbers Disappeared in an Array", () => {
  test("Example 1: [4,3,2,7,8,2,3,1]", () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });

  test("Example 2: [1,1]", () => {
    expect(findDisappearedNumbers([1, 1])).toEqual([2]);
  });

  test("No missing numbers", () => {
    expect(findDisappearedNumbers([1, 2, 3])).toEqual([]);
  });

  test("All same number", () => {
    expect(findDisappearedNumbers([1, 1, 1, 1])).toEqual([2, 3, 4]);
  });

  test("Single element present", () => {
    expect(findDisappearedNumbers([1])).toEqual([]);
  });

  test("Single element missing", () => {
    expect(findDisappearedNumbers([2, 2])).toEqual([1]);
  });

  test("Multiple missing numbers", () => {
    expect(findDisappearedNumbers([2, 3, 3, 2])).toEqual([1, 4]);
  });
});
