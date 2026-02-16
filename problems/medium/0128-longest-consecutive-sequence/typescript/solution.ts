export function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let maxStreak = 0;

  for (const num of numSet) {
    // Only start counting if this is the START of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let streak = 1;

      // Count how far the sequence goes
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        streak++;
      }

      maxStreak = Math.max(maxStreak, streak);
    }
  }

  return maxStreak;
}
