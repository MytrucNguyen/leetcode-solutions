export function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    const isLastElement = i === nums.length - 1;
    const nextIsNotConsecutive = !isLastElement && nums[i + 1] !== nums[i] + 1;

    if (isLastElement || nextIsNotConsecutive) {
      if (start === i) {
        result.push(`${nums[start]}`);
      } else {
        result.push(`${nums[start]}->${nums[i]}`);
      }

      start = i + 1;
    }
  }

  return result;
}
