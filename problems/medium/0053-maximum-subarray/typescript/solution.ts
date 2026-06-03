export function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let maxSum = nums[0];

  // Loop through array starting from index 1
  for (let i = 1; i < nums.length; i++) {
    // Decide: add to current sum OR start fresh
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update max if current is better
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
