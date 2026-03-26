export function subarraySum(nums: number[], k: number): number {
  const prefixCount = new Map<number, number>();
  prefixCount.set(0, 1);

  let currentSum = 0;
  let count = 0;

  for (const num of nums) {
    currentSum += num;

    const target = currentSum - k;
    if (prefixCount.has(target)) {
      count += prefixCount.get(target)!;
    }

    prefixCount.set(currentSum, (prefixCount.get(currentSum) || 0) + 1);
  }

  return count;
}
