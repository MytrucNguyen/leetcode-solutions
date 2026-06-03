# 213. House Robber II

**Difficulty:** Medium  
**Topics:** Array, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/house-robber-ii/)

## Problem Description

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are **arranged in a circle**. That means the first house is the neighbor of the last one. Adjacent houses have security systems connected and will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight **without alerting the police**.

### Examples

**Example 1:**

    Input: nums = [2, 3, 2]
    Output: 3
    Explanation: Can't rob house 0 and house 2 (adjacent in circle). Rob house 1 = 3.

**Example 2:**

    Input: nums = [1, 2, 3, 1]
    Output: 4
    Explanation: Rob house 0 + house 2 = 1 + 3 = 4.

**Example 3:**

    Input: nums = [1, 2, 3]
    Output: 3
    Explanation: Rob house 2 = 3 (or house 1 = 2, but 3 is better).

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

## Approach

### Two Runs of House Robber (#198)

The circle constraint means you can't rob both the first AND last house. So break it into two linear problems and take the max.

**Key Insight:** In a circle, house 0 and house n-1 are adjacent. So either:

- You DON'T rob house 0 → solve House Robber on houses [1..n-1]
- You DON'T rob house n-1 → solve House Robber on houses [0..n-2]

The answer is the max of these two runs. This covers all valid combinations because any valid solution either skips the first house, skips the last house, or skips both (which is covered by either run).

**Algorithm:**

1. If only one house, return nums[0]
2. Run House Robber on nums[0..n-2] (skip last)
3. Run House Robber on nums[1..n-1] (skip first)
4. Return max of both

**House Robber (#198) recap:**

    prev2 = 0, prev1 = 0
    for each house:
      current = max(prev1, prev2 + house)
      prev2 = prev1, prev1 = current
    return prev1

**Walkthrough:**

    nums = [1, 2, 3, 1]

    Run 1: skip last → [1, 2, 3]
      prev2=0, prev1=0
      house=1: current = max(0, 0+1) = 1, prev2=0, prev1=1
      house=2: current = max(1, 0+2) = 2, prev2=1, prev1=2
      house=3: current = max(2, 1+3) = 4, prev2=2, prev1=4
      Result: 4

    Run 2: skip first → [2, 3, 1]
      prev2=0, prev1=0
      house=2: current = max(0, 0+2) = 2, prev2=0, prev1=2
      house=3: current = max(2, 0+3) = 3, prev2=2, prev1=3
      house=1: current = max(3, 2+1) = 3, prev2=3, prev1=3
      Result: 3

    Max(4, 3) = 4 ✓

    nums = [2, 3, 2]

    Run 1: skip last → [2, 3]
      house=2: current=2
      house=3: current=max(2, 0+3)=3
      Result: 3

    Run 2: skip first → [3, 2]
      house=3: current=3
      house=2: current=max(3, 0+2)=3
      Result: 3

    Max(3, 3) = 3 ✓

**Comparison with House Robber (#198):**

- #198: Linear street → single DP pass
- #213: Circular street → two DP passes, take the max
- Same DP recurrence, just applied twice with different ranges

**Time Complexity:** O(n) — two linear passes  
**Space Complexity:** O(1) — only two variables per pass

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Circular constraint → break into two linear subproblems
- "Can't use both first and last" → run without first OR without last, take max
- Reuses the exact same DP from House Robber (#198)
- This "break circle into lines" trick applies to other circular problems too
- Classic follow-up pattern: linear → circular
