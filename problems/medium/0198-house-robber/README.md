# 198. House Robber

**Difficulty:** Medium  
**Topics:** Array, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/house-robber/)

## Problem Description

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. The only constraint stopping you is that adjacent houses have security systems connected — **if two adjacent houses are broken into on the same night, the police will be contacted.**

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight **without alerting the police**.

### Examples

**Example 1:**
```
Input: nums = [1, 2, 3, 1]
Output: 4
Explanation: Rob house 1 ($1) + house 3 ($3) = $4.
```

**Example 2:**
```
Input: nums = [2, 7, 9, 3, 1]
Output: 12
Explanation: Rob house 1 ($2) + house 3 ($9) + house 5 ($1) = $12.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

## Approach

### Dynamic Programming — Two Variables

At each house, you have two choices: rob it (add its value to the best from two houses back) or skip it (keep the best from the previous house). Track just two values — no need for a full DP array.

**Key Insight:** This is the same pattern as Climbing Stairs (#70). At each step, the answer depends only on the previous two values. So we can use two variables instead of an array, giving O(1) space.

**Recurrence:**
```
dp[i] = max(dp[i-1], dp[i-2] + nums[i])
         ↑ skip       ↑ rob this house
```

**Algorithm:**
1. Initialize `prev2 = 0` (best from two houses back) and `prev1 = 0` (best from previous house)
2. For each house:
   - `current = max(prev1, prev2 + nums[i])`
   - Shift: `prev2 = prev1`, `prev1 = current`
3. Return `prev1`

**Walkthrough:**
```
nums = [2, 7, 9, 3, 1]
prev2 = 0, prev1 = 0

i=0: num=2
  current = max(0, 0+2) = 2
  prev2=0, prev1=2

i=1: num=7
  current = max(2, 0+7) = 7
  prev2=2, prev1=7

i=2: num=9
  current = max(7, 2+9) = 11
  prev2=7, prev1=11

i=3: num=3
  current = max(11, 7+3) = 11
  prev2=11, prev1=11

i=4: num=1
  current = max(11, 11+1) = 12
  prev2=11, prev1=12

Return 12 ✓
```
```
nums = [1, 2, 3, 1]
prev2 = 0, prev1 = 0

i=0: current = max(0, 0+1) = 1 → prev2=0, prev1=1
i=1: current = max(1, 0+2) = 2 → prev2=1, prev1=2
i=2: current = max(2, 1+3) = 4 → prev2=2, prev1=4
i=3: current = max(4, 2+1) = 4 → prev2=4, prev1=4

Return 4 ✓
```

**Comparison with Climbing Stairs (#70):**
- #70: `dp[i] = dp[i-1] + dp[i-2]` (sum of two previous)
- #198: `dp[i] = max(dp[i-1], dp[i-2] + nums[i])` (max of skip vs rob)
- Same two-variable sliding window DP pattern

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Only two variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- At each step, the choice is: take current + best from two back, OR keep the previous best
- Only need two variables because each state depends on just the previous two
- Same DP pattern as Climbing Stairs (#70) — the gateway DP problem
- This is the foundation for House Robber II (#213) and House Robber III (#337)
- One of the most commonly asked DP interview questions