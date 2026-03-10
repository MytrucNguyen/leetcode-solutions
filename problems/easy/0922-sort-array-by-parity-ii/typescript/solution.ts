export function sortArrayByParityII(nums: number[]): number[] {
  let even = 0;
  let odd = 1;

  while (even < nums.length) {
    if (nums[even] % 2 === 0) {
      even += 2;
    } else {
      while (nums[odd] % 2 !== 0) {
        odd += 2;
      }

      [nums[even], nums[odd]] = [nums[odd], nums[even]];
      even += 2;
      odd += 2;
    }
  }

  return nums;
}
