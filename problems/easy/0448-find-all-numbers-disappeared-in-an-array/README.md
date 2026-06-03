# 448. Find All Numbers Disappeared in an Array

**Difficulty:** Easy  
**Topics:** Array, Hash Table  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)

## Problem Description

Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.

### Examples

**Example 1:**
```
Input: nums = [4, 3, 2, 7, 8, 2, 3, 1]
Output: [5, 6]
```

**Example 2:**
```
Input: nums = [1, 1]
Output: [2]
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10^5`
- `1 <= nums[i] <= n`

**Follow up:** Could you do it without extra space? (The output array doesn't count.)

## Approach

### Hash Set (Simple)
Add all numbers to a set, then check which numbers from 1 to n are missing.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### In-Place Marking (Optimal)
Since every value is in range [1, n], use each value as an index and mark that position negative. After marking, positive positions indicate missing numbers.

**Key Insight:** The values themselves tell us which indices to mark. A value of 4 means "4 exists" — so we mark index 3 (value - 1) as negative. After processing, any index still positive means that number was never seen.

**Algorithm:**
1. Loop through the array. For each number:
   - Get the index: `Math.abs(num) - 1` (use abs because it may already be marked negative)
   - If the value at that index is positive, negate it
2. Loop through the array again:
   - Any index with a positive value → `index + 1` is a missing number

**Walkthrough:**
```
nums = [4, 3, 2, 7, 8, 2, 3, 1]
index:  0  1  2  3  4  5  6  7

Pass 1 — Mark indices:
See 4 → mark index 3: [4, 3, 2, -7, 8, 2, 3, 1]
See 3 → mark index 2: [4, 3, -2, -7, 8, 2, 3, 1]
See 2 → mark index 1: [4, -3, -2, -7, 8, 2, 3, 1]
See 7 → mark index 6: [4, -3, -2, -7, 8, 2, -3, 1]
See 8 → mark index 7: [4, -3, -2, -7, 8, 2, -3, -1]
See 2 → index 1 already negative, skip
See 3 → index 2 already negative, skip
See 1 → mark index 0: [-4, -3, -2, -7, 8, 2, -3, -1]

Pass 2 — Find positives:
index 0: -4 (negative) → 1 exists
index 1: -3 (negative) → 2 exists
index 2: -2 (negative) → 3 exists
index 3: -7 (negative) → 4 exists
index 4:  8 (positive) → 5 is missing!
index 5:  2 (positive) → 6 is missing!
index 6: -3 (negative) → 7 exists
index 7: -1 (negative) → 8 exists

Result: [5, 6] ✓
```

**Time Complexity:** O(n) - Two passes through the array  
**Space Complexity:** O(1) - Modifies array in place (output doesn't count)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- When values are in range [1, n], you can use them as indices — a powerful in-place technique
- Negating values as markers avoids needing extra space
- Always use `Math.abs()` when reading values since they may already be marked negative
- This "index as hash" technique appears in several problems (e.g., #442 Find All Duplicates)