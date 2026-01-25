// Approach 1: Hash Map (Counting)
export function majorityElementHashMap(nums: number[]): number {
  const counts = new Map<number, number>();

  // Count occurrences
  for (const num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  // Find majority
  const majority = Math.floor(nums.length / 2);
  for (const [num, count] of counts) {
    if (count > majority) {
      return num;
    }
  }

  return -1; // Never reached (majority always exists)
}

// Approach 2: Sorting (Middle Element)
export function majorityElementSorting(nums: number[]): number {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}

// Approach 3: Boyer-Moore Voting Algorithm (Optimal)
export function majorityElement(nums: number[]): number {
  let candidate = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}
