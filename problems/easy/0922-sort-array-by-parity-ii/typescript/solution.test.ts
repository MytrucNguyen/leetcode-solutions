import { sortArrayByParityII } from "./solution";

function isValidParityII(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0 && nums[i] % 2 !== 0) return false;
    if (i % 2 === 1 && nums[i] % 2 !== 1) return false;
  }
  return true;
}

describe("922. Sort Array By Parity II", () => {
  test("Example 1: [4,2,5,7]", () => {
    const result = sortArrayByParityII([4, 2, 5, 7]);
    expect(isValidParityII(result)).toBe(true);
  });

  test("Example 2: [2,3]", () => {
    const result = sortArrayByParityII([2, 3]);
    expect(isValidParityII(result)).toBe(true);
  });

  test("Already correct", () => {
    const result = sortArrayByParityII([2, 1, 4, 3]);
    expect(isValidParityII(result)).toBe(true);
  });

  test("Completely swapped", () => {
    const result = sortArrayByParityII([3, 4, 1, 2]);
    expect(isValidParityII(result)).toBe(true);
  });

  test("Larger array", () => {
    const result = sortArrayByParityII([2, 3, 4, 1, 6, 5, 8, 7]);
    expect(isValidParityII(result)).toBe(true);
  });

  test("Contains zeros", () => {
    const result = sortArrayByParityII([0, 1, 0, 3]);
    expect(isValidParityII(result)).toBe(true);
  });
});
