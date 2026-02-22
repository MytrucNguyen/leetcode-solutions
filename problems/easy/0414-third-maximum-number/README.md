# 414. Third Maximum Number

**Difficulty:** Easy  
**Topics:** Array, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/third-maximum-number/)

## Problem Description

Given an integer array `nums`, return the **third distinct maximum** number in this array. If the third maximum does not exist, return the **maximum** number.

### Examples

**Example 1:**
```
Input: nums = [3, 2, 1]
Output: 1
Explanation: The first maximum is 3, second is 2, third is 1.
```

**Example 2:**
```
Input: nums = [1, 2]
Output: 2
Explanation: Third maximum doesn't exist, so return the maximum (2).
```

**Example 3:**
```
Input: nums = [2, 2, 3, 1]
Output: 1
Explanation: The first maximum is 3, second is 2 (skip duplicate 2), third is 1.
```

### Constraints

- `1 <= nums.length <= 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`

## Approach

### Sort and Deduplicate (Simple)
Remove duplicates, sort descending, return the third element if it exists.
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(n)

### Three Variable Tracking (Optimal)
Track the top three distinct maximums as you loop through the array, like a leaderboard.

**Key Insight:** Use `null` (or `-Infinity`) to represent "not yet found". When a new number comes in that's larger than one of the three, shift everything down — just like a new high score bumping others down the leaderboard.

**Algorithm:**
1. Initialize `first`, `second`, `third` as `null`
2. Loop through each number:
   - Skip if it equals `first`, `second`, or `third` (duplicate)
   - If greater than `first` → shift: third = second, second = first, first = num
   - Else if greater than `second` → shift: third = second, second = num
   - Else if greater than `third` → third = num
3. If `third` is still `null`, return `first` (less than 3 distinct values)
4. Otherwise return `third`

**Walkthrough:**
```
nums = [2, 2, 3, 1]

Start: first = null, second = null, third = null

num = 2: greater than first (null)
  first = 2, second = null, third = null

num = 2: equals first → skip (duplicate)

num = 3: greater than first (2)
  shift down: third = null, second = 2, first = 3

num = 1: not > first (3), not > second (2), greater than third (null)
  third = 1

first = 3, second = 2, third = 1
third exists → return 1 ✓
```
```
nums = [1, 2]

Start: first = null, second = null, third = null

num = 1: greater than first (null)
  first = 1

num = 2: greater than first (1)
  shift: second = 1, first = 2

first = 2, second = 1, third = null
third is null → return first = 2 ✓
```

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Only three variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Tracking top-k values with variables avoids sorting and gives O(n) time
- Using `null` to represent "not yet found" handles edge cases cleanly
- Skip duplicates early to ensure we only count distinct values
- The "leaderboard shift" pattern (bumping values down) appears in many ranking problems