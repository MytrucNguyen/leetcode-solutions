export function findLengthOfLCIS(nums: number[]): number {
  let currentStreak = 1;
  let maxStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }

    maxStreak = Math.max(maxStreak, currentStreak);
  }

  return maxStreak;
}
