export function minCostClimbingStairs(cost: number[]): number {
    let prev2 = cost[0];
    let prev1 = cost[1];

    for (let i = 2; i < cost.length; i++) {
        const current = cost[i] + Math.min(prev1, prev2);
        prev2 = prev1;
        prev1 = current;
    }

    return Math.min(prev1, prev2);
}
