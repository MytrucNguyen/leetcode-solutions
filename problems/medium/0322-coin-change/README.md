# 322. Coin Change

**Difficulty:** Medium  
**Topics:** Array, Dynamic Programming, Breadth-First Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/coin-change/)

## Problem Description

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

### Examples

**Example 1:**
```
Input: coins = [1, 5, 11], amount = 15
Output: 3
Explanation: 5 + 5 + 5 = 15
```

**Example 2:**
```
Input: coins = [2], amount = 3
Output: -1
Explanation: Cannot make 3 with only 2-cent coins.
```

**Example 3:**
```
Input: coins = [1], amount = 0
Output: 0
Explanation: 0 coins needed for amount 0.
```

### Constraints

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2^31 - 1`
- `0 <= amount <= 10^4`

## Approach

### Bottom-Up Dynamic Programming

Build a DP array where `dp[i]` = minimum coins needed to make amount `i`. For each amount, try every coin and take the minimum.

**Key Insight:** For any amount `i`, if we use a coin of value `c`, we need `1 + dp[i - c]` coins (this coin plus the optimal solution for the remaining amount). Try every coin and take the minimum.

**Recurrence:**
```
dp[i] = min(dp[i - c] + 1) for each coin c where c <= i
```

**Algorithm:**
1. Create a DP array of size `amount + 1`, filled with `Infinity` (impossible)
2. Set `dp[0] = 0` (base case — 0 coins for amount 0)
3. For each amount from 1 to target:
   - For each coin:
     - If `coin <= amount` and `dp[amount - coin]` is not Infinity:
       - `dp[amount] = min(dp[amount], dp[amount - coin] + 1)`
4. Return `dp[amount]` if not Infinity, else `-1`

**Walkthrough:**
```
coins = [1, 5, 11], amount = 15

dp[0] = 0

dp[1]: try coin 1 → dp[0]+1 = 1      → dp[1] = 1
dp[2]: try coin 1 → dp[1]+1 = 2      → dp[2] = 2
dp[3]: try coin 1 → dp[2]+1 = 3      → dp[3] = 3
dp[4]: try coin 1 → dp[3]+1 = 4      → dp[4] = 4
dp[5]: try coin 1 → dp[4]+1 = 5
       try coin 5 → dp[0]+1 = 1      → dp[5] = 1
dp[6]: try coin 1 → dp[5]+1 = 2
       try coin 5 → dp[1]+1 = 2      → dp[6] = 2
...
dp[10]: try coin 1 → 10
        try coin 5 → dp[5]+1 = 2
        → dp[10] = 2
dp[11]: try coin 1 → 11
        try coin 5 → dp[6]+1 = 3
        try coin 11 → dp[0]+1 = 1
        → dp[11] = 1
...
dp[15]: try coin 1 → dp[14]+1 = 6
        try coin 5 → dp[10]+1 = 3
        try coin 11 → dp[4]+1 = 5
        → dp[15] = 3 ✓
```

**Why greedy doesn't work:**
```
coins = [1, 5, 11], amount = 15
Greedy: pick largest first → 11 + 1 + 1 + 1 + 1 = 5 coins
DP: 5 + 5 + 5 = 3 coins ← optimal!
```

**Comparison with House Robber (#198):**
- #198: `dp[i] = max(dp[i-1], dp[i-2] + nums[i])` — two choices (rob or skip)
- #322: `dp[i] = min(dp[i-c] + 1)` for each coin — multiple choices (one per coin)
- Same bottom-up DP pattern, just more options at each step

**Time Complexity:** O(amount × coins.length) - For each amount, try each coin  
**Space Complexity:** O(amount) - DP array

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Bottom-up DP builds solutions from smaller amounts up to the target
- Greedy (always pick largest coin) doesn't work — DP considers all possibilities
- Using Infinity as the default handles impossible amounts naturally
- This is one of the most classic DP problems — the "unbounded knapsack" pattern
- Foundation for Coin Change II (#518) which counts the number of ways