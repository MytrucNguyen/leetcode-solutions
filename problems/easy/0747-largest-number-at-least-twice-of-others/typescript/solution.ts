export function dominantIndex(nums: number[]): number {
  let largest = -1;
  let secondLargest = -1;
  let largestIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
      largestIndex = i;
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  return largest >= 2 * secondLargest ? largestIndex : -1;
}
