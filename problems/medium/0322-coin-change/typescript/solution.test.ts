import { coinChange } from "./solution";

describe("322. Coin Change", () => {
  test("Example 1: coins=[1,5,11], amount=15", () => {
    expect(coinChange([1, 5, 11], 15)).toBe(3);
  });

  test("Example 2: coins=[2], amount=3", () => {
    expect(coinChange([2], 3)).toBe(-1);
  });

  test("Example 3: amount=0", () => {
    expect(coinChange([1], 0)).toBe(0);
  });

  test("Standard coins: amount=11", () => {
    expect(coinChange([1, 5, 10, 25], 11)).toBe(2);
  });

  test("Single coin exact", () => {
    expect(coinChange([5], 10)).toBe(2);
  });

  test("Greedy fails case", () => {
    expect(coinChange([1, 3, 4], 6)).toBe(2);
  });

  test("Large amount", () => {
    expect(coinChange([1, 5, 10], 100)).toBe(10);
  });

  test("Only ones", () => {
    expect(coinChange([1], 5)).toBe(5);
  });

  test("Cannot make amount", () => {
    expect(coinChange([3, 7], 5)).toBe(-1);
  });
});
