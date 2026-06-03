export function canPartition(nums: number[]): boolean {
    const total = nums.reduce((sum, n) => sum + n, 0);

    if (total % 2 !== 0) return false;

    const target = total / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }

        if (dp[target]) return true;
    }

    return dp[target];
}
