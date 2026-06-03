# 34. Find First and Last Position of Element in Sorted Array

**Difficulty:** Medium  
**Topics:** Array, Binary Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

## Problem Description

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with **O(log n)** runtime complexity.

### Examples

**Example 1:**

    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3, 4]

**Example 2:**

    Input: nums = [5,7,7,8,8,10], target = 6
    Output: [-1, -1]

**Example 3:**

    Input: nums = [], target = 0
    Output: [-1, -1]

### Constraints

- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- `nums` is a non-decreasing array
- `-10^9 <= target <= 10^9`

## Approach

### Two Binary Searches — Find Left Bound and Right Bound

Run binary search twice: once biased left (find first occurrence), once biased right (find last occurrence). The only difference is what happens when `nums[mid] === target`.

**Key Insight:** In standard binary search, when you find the target you return immediately. Here, when you find the target you keep going — go left to find the earliest one, go right to find the latest one.

**Algorithm:**
1. **Find left bound:** Binary search where on match, save result and go left (`right = mid - 1`)
2. **Find right bound:** Binary search where on match, save result and go right (`left = mid + 1`)
3. Return `[leftResult, rightResult]`

**Walkthrough:**

    nums = [5, 7, 7, 8, 8, 10], target = 8

    Find LEFT (first 8):
    left=0, right=5, mid=2
      nums[2]=7 < 8 → left=3

    left=3, right=5, mid=4
      nums[4]=8 === 8 → save result=4, go left: right=3

    left=3, right=3, mid=3
      nums[3]=8 === 8 → save result=3, go left: right=2

    left=3 > right=2 → done. First = 3 ✓

    Find RIGHT (last 8):
    left=0, right=5, mid=2
      nums[2]=7 < 8 → left=3

    left=3, right=5, mid=4
      nums[4]=8 === 8 → save result=4, go right: left=5

    left=5, right=5, mid=5
      nums[5]=10 > 8 → right=4

    left=5 > right=4 → done. Last = 4 ✓

    Return [3, 4] ✓

**Comparison with other binary search problems:**
- #704: Find target → return immediately on match
- #35: Find insert position → return `left` when not found
- #153: Find minimum → compare mid to right
- #34: Find range → on match, keep going left OR right

**Time Complexity:** O(log n) — two binary searches  
**Space Complexity:** O(1) — only pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- When binary search finds the target, the choice to go left or right determines which bound you find
- Left bound: on match, save and go left (right = mid - 1)
- Right bound: on match, save and go right (left = mid + 1)
- This "biased binary search" pattern is the foundation for lower_bound and upper_bound
- Completes your binary search toolkit: find, insert position, rotated, range