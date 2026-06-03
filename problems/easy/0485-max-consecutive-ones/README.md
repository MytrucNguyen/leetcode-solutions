# 485. Max Consecutive Ones

**Difficulty:** Easy  
**Topics:** Array  
**Link:** [LeetCode Problem](https://leetcode.com/problems/max-consecutive-ones/)

## Problem Description

Given a binary array `nums`, return the maximum number of consecutive `1`'s in the array.

### Examples

**Example 1:**
```
Input: nums = [1, 1, 0, 1, 1, 1]
Output: 3
Explanation: The last three elements are consecutive 1s.
```

**Example 2:**
```
Input: nums = [1, 0, 1, 1, 0, 1]
Output: 2
```

### Constraints

- `1 <= nums.length <= 10^5`
- `nums[i]` is either `0` or `1`

## Approach

### Running Counter

Same pattern as Longest Continuous Increasing Subsequence (#674). Track the current streak of 1s and the max streak seen. When you hit a 0, reset.

**Key Insight:** Even simpler than #674 — instead of comparing adjacent elements, just check if the current element is 1.

**Algorithm:**
1. Initialize `currentStreak = 0` and `maxStreak = 0`
2. Loop through each element:
   - If it's `1` → increment `currentStreak`
   - If it's `0` → reset `currentStreak = 0`
   - Update `maxStreak = max(maxStreak, currentStreak)`
3. Return `maxStreak`

**Walkthrough:**
```
nums = [1, 1, 0, 1, 1, 1]

i=0: 1 → streak = 1, max = 1
i=1: 1 → streak = 2, max = 2
i=2: 0 → streak = 0, max = 2
i=3: 1 → streak = 1, max = 2
i=4: 1 → streak = 2, max = 2
i=5: 1 → streak = 3, max = 3

Return 3 ✓
```

**Comparison with #674:**
- #674: Reset when `nums[i] <= nums[i-1]`, start streak at 1
- #485: Reset when `nums[i] === 0`, start streak at 0

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Only two variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- The "running counter with reset" pattern works for any streak-counting problem
- Starting streak at 0 (vs 1 in #674) since a 0 element has no streak
- Simple problems like this are great for reinforcing fundamental patterns
- Same pattern applies to: max consecutive ones II/III, longest turbulent subarray, etc.