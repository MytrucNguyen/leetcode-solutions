import { search } from "./solution";

describe("33. Search in Rotated Sorted Array", () => {
  test("Example 1: [4,5,6,7,0,1,2], target 0", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  test("Example 2: [4,5,6,7,0,1,2], target 3", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  test("Example 3: [1], target 0", () => {
    expect(search([1], 0)).toBe(-1);
  });

  test("Target at the start", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0);
  });

  test("Target at the end", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6);
  });

  test("Not rotated", () => {
    expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test("Rotated by one", () => {
    expect(search([5, 1, 2, 3, 4], 5)).toBe(0);
  });

  test("Two elements rotated", () => {
    expect(search([2, 1], 1)).toBe(1);
  });

  test("Target at pivot point", () => {
    expect(search([6, 7, 0, 1, 2, 3, 4, 5], 0)).toBe(2);
  });
});
