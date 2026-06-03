export function findDisappearedNumbers(nums: number[]): number[] {
  // Mark indices
  for (const num of nums) {
    const index = Math.abs(num) - 1;

    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  // Collect missing numbers
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}
