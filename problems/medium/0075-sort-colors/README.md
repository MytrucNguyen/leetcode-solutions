# 75. Sort Colors

**Difficulty:** Medium  
**Topics:** Array, Two Pointers, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sort-colors/)

## Problem Description

Given an array `nums` with `n` objects colored red, white, or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red (0), white (1), and blue (2).

You must solve this problem without using the library's sort function.

**Follow up:** Could you come up with a one-pass algorithm using only constant extra space?

### Examples

**Example 1:**
```
Input: nums = [2, 0, 2, 1, 1, 0]
Output: [0, 0, 1, 1, 2, 2]
```

**Example 2:**
```
Input: nums = [2, 0, 1]
Output: [0, 1, 2]
```

### Constraints

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`

## Approach

### Two Pass — Counting (Simple)
Count the number of 0s, 1s, and 2s, then overwrite the array.
- **Time Complexity:** O(n) — two passes
- **Space Complexity:** O(1)

### Dutch National Flag (Optimal — One Pass)
Use three pointers: `low`, `mid`, and `high`. Everything before `low` is 0, everything after `high` is 2, and `mid` scans through handling each element.

**Key Insight:** Three pointers divide the array into four regions:
- `[0, low)` → all 0s
- `[low, mid)` → all 1s
- `[mid, high]` → unprocessed
- `(high, end]` → all 2s

The `mid` pointer scans through the unprocessed region and sorts each element into the correct zone.

**Algorithm:**
1. Set `low = 0`, `mid = 0`, `high = nums.length - 1`
2. While `mid <= high`:
   - If `nums[mid] === 0` → swap with `low`, increment both `low` and `mid`
   - If `nums[mid] === 1` → it's in the right place, just increment `mid`
   - If `nums[mid] === 2` → swap with `high`, decrement `high` (don't increment `mid` — the swapped value needs checking)
3. Done!

**Walkthrough:**
```
nums = [2, 0, 2, 1, 1, 0]
        L                    low=0, mid=0, high=5
        M              H

mid=0: nums[0]=2 → swap with high
  [0, 0, 2, 1, 1, 2]  high=4
   M           H

mid=0: nums[0]=0 → swap with low
  [0, 0, 2, 1, 1, 2]  low=1, mid=1
      M        H

mid=1: nums[1]=0 → swap with low
  [0, 0, 2, 1, 1, 2]  low=2, mid=2
         M     H

mid=2: nums[2]=2 → swap with high
  [0, 0, 1, 1, 2, 2]  high=3
         M  H

mid=2: nums[2]=1 → mid++
  mid=3

mid=3: nums[3]=1 → mid++
  mid=4

mid=4 > high=3 → done!

Result: [0, 0, 1, 1, 2, 2] ✓
```

**Why don't we increment `mid` after swapping with `high`?**
When we swap a 2 to the right, the value we get back from `high` is unknown — it could be a 0, 1, or 2. So we need to check it again. But when we swap a 0 to the left, we know `low` only contains processed values (0s and 1s), so it's safe to move `mid` forward.

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Only three pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- The Dutch National Flag algorithm sorts three categories in a single pass
- Three pointers create four regions: 0s, 1s, unprocessed, 2s
- Don't advance `mid` when swapping with `high` — the new value needs checking
- This pattern extends to any problem that partitions into three groups
- Named after Edsger Dijkstra's solution to the Dutch flag problem