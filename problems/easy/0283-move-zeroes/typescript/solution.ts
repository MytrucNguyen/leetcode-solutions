export function moveZeroes(nums: number[]): void {
  let leftPointer = 0;

  // Move all non-zeros to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[leftPointer] = nums[i];
      leftPointer++;
    }
  }

  // Fill remaining positions with zeros
  for (let i = leftPointer; i < nums.length; i++) {
    nums[i] = 0;
  }
}
