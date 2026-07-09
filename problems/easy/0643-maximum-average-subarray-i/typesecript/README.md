# 643. Maximum Average Subarray I

**Difficulty:** Easy  
**Topics:** Array, Sliding Window  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-average-subarray-i/)

## Problem Description

You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose length is equal to `k` that has the maximum average value and return this value.

### Examples

**Example 1:**

    Input: nums = [1,12,-5,-6,50,3], k = 4
    Output: 12.75000
    Explanation: Maximum average is (12 + (-5) + (-6) + 50) / 4 = 51 / 4 = 12.75

**Example 2:**

    Input: nums = [5], k = 1
    Output: 5.00000

### Constraints

- `n == nums.length`
- `1 <= k <= n <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## Approach

### Fixed-Size Sliding Window

Calculate the sum of the first window, then slide — add the new element, subtract the old one. Track the maximum sum and divide at the end.

**Key Insight:** Instead of recalculating the sum for every window (O(n×k)), update incrementally — add one, subtract one — O(1) per slide.

**Algorithm:**

1. Calculate sum of first k elements
2. Set maxSum = current sum
3. Slide from index k to end:
    - Add `nums[i]`, subtract `nums[i - k]`
    - Update maxSum if current sum is bigger
4. Return maxSum / k

**Walkthrough:**

    nums = [1, 12, -5, -6, 50, 3], k = 4

    Initial window [1,12,-5,-6]: sum = 2, maxSum = 2

    Slide to [12,-5,-6,50]: sum = 2 + 50 - 1 = 51, maxSum = 51
    Slide to [-5,-6,50,3]:  sum = 51 + 3 - 12 = 42, maxSum = 51

    Return 51 / 4 = 12.75 ✓

**Comparison with other sliding window problems:**

- Fixed size (#438, #567): Window stays same size, slide one at a time
- Variable size (#3, #424, #76): Window grows and shrinks
- This is the simplest fixed-size sliding window

**Time Complexity:** O(n) — single pass  
**Space Complexity:** O(1) — only sum and max variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Fixed-size sliding window: add new, subtract old — O(1) per slide
- Track max sum, divide once at the end (avoid floating point in the loop)
- The simplest sliding window problem — great foundation for harder ones
