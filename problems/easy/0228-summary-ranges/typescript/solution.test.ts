import { summaryRanges } from "./solution";

describe("228. Summary Ranges", () => {
  test("Example 1: [0,1,2,4,5,7]", () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
  });

  test("Example 2: [0,2,3,4,6,8,9]", () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual([
      "0",
      "2->4",
      "6",
      "8->9",
    ]);
  });

  test("Empty array", () => {
    expect(summaryRanges([])).toEqual([]);
  });

  test("Single element", () => {
    expect(summaryRanges([1])).toEqual(["1"]);
  });

  test("All consecutive", () => {
    expect(summaryRanges([1, 2, 3, 4, 5])).toEqual(["1->5"]);
  });

  test("No consecutive", () => {
    expect(summaryRanges([1, 3, 5, 7])).toEqual(["1", "3", "5", "7"]);
  });

  test("Negative numbers", () => {
    expect(summaryRanges([-3, -2, -1, 1, 2])).toEqual(["-3->-1", "1->2"]);
  });

  test("Two elements consecutive", () => {
    expect(summaryRanges([1, 2])).toEqual(["1->2"]);
  });
});
