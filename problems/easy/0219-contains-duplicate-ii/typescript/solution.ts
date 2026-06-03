export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const lastSeen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (lastSeen.has(nums[i]) && i - lastSeen.get(nums[i])! <= k) {
      return true;
    }

    lastSeen.set(nums[i], i);
  }

  return false;
}
