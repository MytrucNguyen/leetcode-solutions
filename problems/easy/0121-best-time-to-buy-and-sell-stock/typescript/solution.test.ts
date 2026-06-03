import { maxProfit } from "./solution";

describe("Best Time to Buy and Sell Stock", () => {
  test("Example 1: [7,1,5,3,6,4]", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const result = maxProfit(prices);
    const expected = 5;

    console.log(
      `Test 1 - Input: [${prices}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Example 2: [7,6,4,3,1]", () => {
    const prices = [7, 6, 4, 3, 1];
    const result = maxProfit(prices);
    const expected = 0;

    console.log(
      `Test 2 - Input: [${prices}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Single price", () => {
    const prices = [5];
    const result = maxProfit(prices);
    const expected = 0;

    console.log(
      `Test 3 - Input: [${prices}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Two prices - profit possible", () => {
    const prices = [1, 5];
    const result = maxProfit(prices);
    const expected = 4;

    console.log(
      `Test 4 - Input: [${prices}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Two prices - no profit", () => {
    const prices = [5, 1];
    const result = maxProfit(prices);
    const expected = 0;

    console.log(
      `Test 5 - Input: [${prices}] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });
});
