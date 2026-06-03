# 416. Partition Equal Subset Sum

**Difficulty:** Medium  
**Topics:** Array, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/partition-equal-subset-sum/)

## Problem Description

Given an integer array `nums`, return `true` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal.

### Examples

**Example 1:**

    Input: nums = [1, 5, 11, 5]
    Output: true
    Explanation: [1, 5, 5] and [11] both sum to 11.

**Example 2:**

    Input: nums = [1, 2, 3, 5]
    Output: false
    Explanation: Total = 11 (odd), impossible to split evenly.

### Constraints

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`

## Approach

### 0/1 Knapsack DP with Boolean Set

Reduce the problem: if the total sum is odd, return false. Otherwise, find if any subset sums to `total / 2`. Use a boolean DP set where `dp[j]` means "can we make sum j using elements seen so far?"

**Key Insight:** If we can make a subset that sums to half the total, the remaining elements automatically sum to the other half. So the problem becomes: "can we reach the target sum using each number at most once?"

**Quick exit:** If total sum is odd, it's impossible to split into two equal halves.

**0/1 Knapsack vs Coin Change (#322):**

- Coin Change: Can reuse coins → iterate sums forward (small to large)
- **Partition: Each number used at most once → iterate sums backward (large to small)**

**Why iterate backward?** If we go forward, adding num=5 when j=5 sets dp[5]=true, then at j=10 we'd use that same 5 again. Going backward ensures each number is only used once per round.

**Algorithm:**

1. Calculate total sum. If odd → return false
2. Set target = total / 2
3. Create boolean array `dp[0..target]`, set `dp[0] = true`
4. For each number in nums:
    - For j from target down to num:
        - `dp[j] = dp[j] || dp[j - num]`
    - If `dp[target]` is true → return true early
5. Return `dp[target]`

**Walkthrough:**

    nums = [1, 5, 11, 5], total = 22, target = 11

    dp = [T, F, F, F, F, F, F, F, F, F, F, F]  (index 0-11)

    Process num=1 (j from 11 down to 1):
      dp[1] = dp[1] || dp[0] = F || T = T
      dp = [T, T, F, F, F, F, F, F, F, F, F, F]

    Process num=5 (j from 11 down to 5):
      dp[6] = dp[6] || dp[1] = F || T = T
      dp[5] = dp[5] || dp[0] = F || T = T
      dp = [T, T, F, F, F, T, T, F, F, F, F, F]

    Process num=11 (j from 11 down to 11):
      dp[11] = dp[11] || dp[0] = F || T = T
      dp[11] is true → return true ✓

    (We found [11] sums to 11, so [1,5,5] sums to 11 too)

    nums = [1, 2, 3, 5], total = 11
    11 is odd → return false immediately ✓

**The DP family — new pattern unlocked:**

- 1D DP: #70, #198, #322, #91, #139, #300
- 2D DP: #1143, #62, #72
- **0/1 Knapsack: #416** ← NEW!

**Time Complexity:** O(n × target) where target = sum/2  
**Space Complexity:** O(target) — boolean DP array

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- "Equal partition" reduces to "subset sum to half"
- Odd total → impossible, return false immediately
- 0/1 Knapsack: iterate backward to prevent reusing elements
- This is the foundation for many subset sum and knapsack problems
- New DP pattern — each element used at most once, unlike Coin Change
