export function containsDuplicate(nums: number[]): boolean {
  const seenNumbers = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (seenNumbers.has(nums[i])) {
      return true;
    } else {
      seenNumbers.add(nums[i]);
    }
  }

  return false;
}
