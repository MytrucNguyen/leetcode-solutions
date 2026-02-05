export function removeDuplicates(nums: number[]): number {
  // Edge case: empty array
  if (nums.length === 0) return 0;

  // Pointer i: where to place the next unique element
  // Start at 1 because first element is always unique
  let i = 1;

  // Pointer j: scan through array looking for unique values
  for (let j = 1; j < nums.length; j++) {
    // Compare current element with previous element
    // If different, we found a new unique value!
    if (nums[j] !== nums[j - 1]) {
      // Place the new unique value at position i
      nums[i] = nums[j];
      // Move i forward to next position
      i++;
    }
    // If nums[j] === nums[j-1], it's a duplicate, skip it
  }

  // i is now the count of unique elements
  return i;
}
