# 746. Min Cost Climbing Stairs

**Difficulty:** Easy  
**Topics:** Array, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/min-cost-climbing-stairs/)

## Problem Description

You are given an integer array `cost` where `cost[i]` is the cost of `ith` step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index `0`, or the step with index `1`.

Return the minimum cost to reach the top of the floor.

### Examples

**Example 1:**

    Input: cost = [10, 15, 20]
    Output: 15
    Explanation: Start at index 1 (pay 15), climb two steps to the top.

**Example 2:**

    Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
    Output: 6
    Explanation: Pay 1, skip 100, pay 1, pay 1, skip 100, pay 1, pay 1, skip 100, pay 1.

### Constraints

- `2 <= cost.length <= 1000`
- `0 <= cost[i] <= 999`

## Approach

### Two-Variable DP

Same pattern as Climbing Stairs (#70) but with costs. At each step, you arrived from either one step back or two steps back — take the cheaper path.

**Key Insight:** The minimum cost to reach step `i` is `cost[i] + min(dp[i-1], dp[i-2])`. The top of the floor is one step beyond the last index — you can reach it from the last or second-to-last step.

**Comparison with Climbing Stairs (#70):**

- #70: `dp[i] = dp[i-1] + dp[i-2]` (count all ways)
- #746: `dp[i] = cost[i] + min(dp[i-1], dp[i-2])` (cheapest way)
- Same structure, different operation (sum vs min)

**Recurrence:**

    dp[i] = cost[i] + min(dp[i-1], dp[i-2])
    answer = min(dp[n-1], dp[n-2])  (reach top from last or second-to-last)

**Algorithm:**

1. Set `prev2 = cost[0]`, `prev1 = cost[1]`
2. For each step from 2 to end:
    - `current = cost[i] + min(prev1, prev2)`
    - Shift: `prev2 = prev1`, `prev1 = current`
3. Return `min(prev1, prev2)` — top is one beyond the last step

**Walkthrough:**

    cost = [10, 15, 20]

    prev2 = 10 (cost to stand on step 0)
    prev1 = 15 (cost to stand on step 1)

    i=2: current = 20 + min(15, 10) = 30
      prev2=15, prev1=30

    Top = min(prev1, prev2) = min(30, 15) = 15 ✓
    (Start at step 1, pay 15, jump to top)

    cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

    prev2=1, prev1=100

    i=2: 1 + min(100, 1) = 2.    prev2=100, prev1=2
    i=3: 1 + min(2, 100) = 3.    prev2=2, prev1=3
    i=4: 1 + min(3, 2) = 3.      prev2=3, prev1=3
    i=5: 100 + min(3, 3) = 103.  prev2=3, prev1=103
    i=6: 1 + min(103, 3) = 4.    prev2=103, prev1=4
    i=7: 1 + min(4, 103) = 5.    prev2=4, prev1=5
    i=8: 100 + min(5, 4) = 104.  prev2=5, prev1=104
    i=9: 1 + min(104, 5) = 6.    prev2=104, prev1=6

    Top = min(6, 104) = 6 ✓

**The Climbing Stairs DP family:**

- Climbing Stairs (#70): Count ways to reach top
- House Robber (#198): Max value without adjacent
- House Robber II (#213): Circular version
- Min Cost Climbing Stairs (#746): Cheapest path to top

**Time Complexity:** O(n) — single pass  
**Space Complexity:** O(1) — two variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same two-variable DP as Climbing Stairs, House Robber — just min instead of sum/max
- The top is one beyond the last step — can reach from last or second-to-last
- Can start at step 0 OR step 1 — handled by initializing both
- Simplest "min cost path" DP problem
