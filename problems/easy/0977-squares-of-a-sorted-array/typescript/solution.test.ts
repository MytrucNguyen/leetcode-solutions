import { sortedSquares } from "./solution";

describe("977. Squares of a Sorted Array", () => {
  test("Example 1: [-4,-1,0,3,10]", () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  });

  test("Example 2: [-7,-3,2,3,11]", () => {
    expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });

  test("All positive", () => {
    expect(sortedSquares([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
  });

  test("All negative", () => {
    expect(sortedSquares([-4, -3, -2, -1])).toEqual([1, 4, 9, 16]);
  });

  test("Single element", () => {
    expect(sortedSquares([-5])).toEqual([25]);
  });

  test("All zeros", () => {
    expect(sortedSquares([0, 0, 0])).toEqual([0, 0, 0]);
  });

  test("Symmetric around zero", () => {
    expect(sortedSquares([-3, -1, 0, 1, 3])).toEqual([0, 1, 1, 9, 9]);
  });
});
