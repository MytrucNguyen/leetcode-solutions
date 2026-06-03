export function numSquares(n: number): number {
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let s = 1; s * s <= i; s++) {
            dp[i] = Math.min(dp[i], dp[i - s * s] + 1);
        }
    }

    return dp[n];
}