function robRange(nums: number[], start: number, end: number): number {
    let prev2 = 0;
    let prev1 = 0;

    for (let i = start; i <= end; i++) {
        const current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

export function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];

    return Math.max(robRange(nums, 0, nums.length - 2), robRange(nums, 1, nums.length - 1));
}
