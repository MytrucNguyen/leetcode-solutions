export function missingNumber(nums: number[]): number {
  const lengthOfArray = nums.length;
  const expectedSum = (lengthOfArray * (lengthOfArray + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}
