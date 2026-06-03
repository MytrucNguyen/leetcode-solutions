import { canPlaceFlowers } from "./solution";

describe("605. Can Place Flowers", () => {
  test("Example 1: [1,0,0,0,1], n = 1", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  });

  test("Example 2: [1,0,0,0,1], n = 2", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });

  test("All empty: [0,0,0,0,0], n = 3", () => {
    expect(canPlaceFlowers([0, 0, 0, 0, 0], 3)).toBe(true);
  });

  test("Single empty plot: [0], n = 1", () => {
    expect(canPlaceFlowers([0], 1)).toBe(true);
  });

  test("Single planted plot: [1], n = 1", () => {
    expect(canPlaceFlowers([1], 1)).toBe(false);
  });

  test("n is zero", () => {
    expect(canPlaceFlowers([1, 0, 1], 0)).toBe(true);
  });

  test("No room to plant", () => {
    expect(canPlaceFlowers([1, 0, 1, 0, 1], 1)).toBe(false);
  });

  test("Plant at edges", () => {
    expect(canPlaceFlowers([0, 0, 1, 0, 0], 2)).toBe(true);
  });
});
