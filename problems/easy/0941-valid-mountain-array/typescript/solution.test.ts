import { validMountainArray } from "./solution";

describe("941. Valid Mountain Array", () => {
  test("Example 1: [2,1]", () => {
    expect(validMountainArray([2, 1])).toBe(false);
  });

  test("Example 2: [3,5,5]", () => {
    expect(validMountainArray([3, 5, 5])).toBe(false);
  });

  test("Example 3: [0,3,2,1]", () => {
    expect(validMountainArray([0, 3, 2, 1])).toBe(true);
  });

  test("Only increasing", () => {
    expect(validMountainArray([0, 1, 2, 3])).toBe(false);
  });

  test("Only decreasing", () => {
    expect(validMountainArray([3, 2, 1, 0])).toBe(false);
  });

  test("Single element", () => {
    expect(validMountainArray([1])).toBe(false);
  });

  test("Valid longer mountain", () => {
    expect(validMountainArray([1, 3, 5, 4, 2])).toBe(true);
  });

  test("Plateau at peak", () => {
    expect(validMountainArray([1, 3, 3, 2])).toBe(false);
  });

  test("Plateau going down", () => {
    expect(validMountainArray([1, 3, 2, 2])).toBe(false);
  });

  test("Minimum valid mountain", () => {
    expect(validMountainArray([1, 2, 1])).toBe(true);
  });
});
