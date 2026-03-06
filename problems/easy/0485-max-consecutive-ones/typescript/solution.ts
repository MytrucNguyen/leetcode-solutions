export function findMaxConsecutiveOnes(nums: number[]): number {
  let currentStreak = 0;
  let maxStreak = 0;

  for (const num of nums) {
    if (num === 1) {
      currentStreak++;
    } else {
      currentStreak = 0;
    }

    maxStreak = Math.max(maxStreak, currentStreak);
  }

  return maxStreak;
}
