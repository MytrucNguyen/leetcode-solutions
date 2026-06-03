export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(index: number, current: number[]): void {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }

    current.push(nums[index]);
    backtrack(index + 1, current);

    current.pop();
    backtrack(index + 1, current);
  }

  backtrack(0, []);
  return result;
}
