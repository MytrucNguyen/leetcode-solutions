# 674. Longest Continuous Increasing Subsequence

**Difficulty:** Easy  
**Topics:** Array  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-continuous-increasing-subsequence/)

## Problem Description

Given an unsorted array of integers `nums`, return the length of the longest **continuous increasing subsequence** (i.e. subarray). The subsequence must be strictly increasing.

### Examples

**Example 1:**
```
Input: nums = [1, 3, 5, 4, 7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1, 3, 5] with length 3.
Even though [1, 3, 5, 7] is an increasing subsequence, it is not continuous as 5 and 7 are separated by 4.
```

**Example 2:**
```
Input: nums = [2, 2, 2, 2, 2]
Output: 1
Explanation: The longest continuous increasing subsequence is any single element, with length 1.
```

### Constraints

- `1 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`

## Approach

### Running Counter

Track the current streak length and the max streak seen. When the next number is greater, extend the streak. Otherwise, reset to 1.

**Key Insight:** At each position, you only need to check if the current number is greater than the previous. If yes, extend. If no, reset. Track the max throughout.

**Algorithm:**
1. Initialize `currentStreak = 1` and `maxStreak = 1`
2. Loop from index 1:
   - If `nums[i] > nums[i - 1]` → increment `currentStreak`
   - Otherwise → reset `currentStreak = 1`
   - Update `maxStreak = max(maxStreak, currentStreak)`
3. Return `maxStreak`

**Walkthrough:**
```
nums = [1, 3, 5, 4, 7]

i=1: 3 > 1 → streak = 2, max = 2
i=2: 5 > 3 → streak = 3, max = 3
i=3: 4 > 5? No → streak = 1, max = 3
i=4: 7 > 4 → streak = 2, max = 3

Return 3 ✓
```
```
nums = [2, 2, 2, 2, 2]

i=1: 2 > 2? No → streak = 1, max = 1
i=2: 2 > 2? No → streak = 1, max = 1
i=3: 2 > 2? No → streak = 1, max = 1
i=4: 2 > 2? No → streak = 1, max = 1

Return 1 ✓
```

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Only two variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- The "running counter with reset" pattern is useful for tracking streaks in arrays
- Only compare adjacent elements — no need to look further back
- This pattern appears in many problems: max consecutive ones, longest turbulent subarray, etc.
- Always initialize streak to 1 since a single element counts as a subsequence of length 1