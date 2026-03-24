export function maxProduct(nums: number[]): number {
  let curMax = nums[0];
  let curMin = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const tempMax = curMax;

    curMax = Math.max(num, num * curMax, num * curMin);
    curMin = Math.min(num, num * tempMax, num * curMin);

    result = Math.max(result, curMax);
  }

  return result;
}
