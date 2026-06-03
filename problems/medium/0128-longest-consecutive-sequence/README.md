# 128. Longest Consecutive Sequence

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Union Find  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-consecutive-sequence/)

## Problem Description

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in **O(n)** time.

### Examples

**Example 1:**
```
Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive sequence is [1, 2, 3, 4]. Length = 4.
```

**Example 2:**
```
Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
Output: 9
Explanation: The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]. Length = 9.
```

### Constraints

- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Approach

### Brute Force — Sorting (Not Optimal)
Sort the array, then walk through counting consecutive elements.
- **Time Complexity:** O(n log n) — due to sorting
- **Space Complexity:** O(1)

### Hash Set (Optimal)
Use a Set for O(1) lookups and only start counting from the beginning of each sequence.

**Key Insight:** A number is the **start** of a sequence only if `num - 1` does NOT exist in the set. This lets us skip numbers that are in the middle of a sequence, so each number is only visited once.

**Algorithm:**
1. Add all numbers to a Set
2. Loop through each number in the set
3. If `num - 1` is NOT in the set → this is the start of a sequence
4. Count up from that number (`num + 1`, `num + 2`, ...) while values exist in the set
5. Track the maximum streak length

**Walkthrough:**
```
nums = [100, 4, 200, 1, 3, 2]
set = {100, 4, 200, 1, 3, 2}

Check 100: does 99 exist? No → start of sequence!
  100 → 101? No → streak = 1

Check 4: does 3 exist? Yes → skip (not a start)

Check 200: does 199 exist? No → start of sequence!
  200 → 201? No → streak = 1

Check 1: does 0 exist? No → start of sequence!
  1 → 2? Yes
  2 → 3? Yes
  3 → 4? Yes
  4 → 5? No → streak = 4

Check 3: does 2 exist? Yes → skip
Check 2: does 1 exist? Yes → skip

Max streak = 4
```

**Why is this O(n)?** We only start counting from sequence starts. Each number is part of exactly one sequence, so every number is visited at most twice — once in the loop and once during counting.

**Time Complexity:** O(n) - Each element visited at most twice  
**Space Complexity:** O(n) - Storing all elements in a Set

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sets give O(1) lookup which is key to achieving O(n) time
- The `num - 1` check to find sequence starts is the core trick — it prevents redundant counting
- Skipping non-start elements is what makes this linear instead of quadratic
- This pattern of "only process items that meet a specific condition" appears in many problems