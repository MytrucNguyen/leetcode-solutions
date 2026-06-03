export function removeDuplicates(nums: number[]): number {
  // Edge case: empty array
  if (nums.length === 0) return 0;

  // Start at 1 because first element is always unique
  let i = 1;

  for (let j = 1; j < nums.length; j++) {
    // Compare current element with previous element
    // If different, we found a new unique value
    if (nums[j] !== nums[j - 1]) {
      // Place the new unique value at position i
      nums[i] = nums[j];
    
      i++;
    }
  }

  return i;
}
