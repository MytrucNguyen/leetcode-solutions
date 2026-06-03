# 162. Find Peak Element

**Difficulty:** Medium  
**Topics:** Array, Binary Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-peak-element/)

## Problem Description

A peak element is an element that is strictly greater than its neighbors.

Given a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any** of the peaks.

You may imagine that `nums[-1] = nums[n] = -∞`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in **O(log n)** time.

### Examples

**Example 1:**

    Input: nums = [1, 2, 3, 1]
    Output: 2
    Explanation: 3 is a peak element at index 2.

**Example 2:**

    Input: nums = [1, 2, 1, 3, 5, 6, 4]
    Output: 5 (or 1)
    Explanation: Index 5 (value 6) or index 1 (value 2) are both peaks.

### Constraints

- `1 <= nums.length <= 1000`
- `-2^31 <= nums[i] <= 2^31 - 1`
- `nums[i] != nums[i + 1]` for all valid `i`

## Approach

### Binary Search — Follow the Uphill

Compare `mid` to its right neighbor. If going up, a peak must exist to the right. If going down, a peak must exist to the left (including mid).

**Key Insight:** Think of the array as a landscape of hills. If you're at a point going uphill (mid < mid+1), keep going right — you'll either find a peak or reach the end (which is also a peak since nums[n] = -∞). If going downhill, the peak is to the left.

**Why is a peak guaranteed?** The edges are -∞. So if the array goes up anywhere, it must come back down eventually (or hit the edge). That means a peak always exists.

**Algorithm:**
1. Set `left = 0`, `right = nums.length - 1`
2. While `left < right`:
   - Calculate `mid`
   - If `nums[mid] < nums[mid + 1]` → going uphill, peak is right: `left = mid + 1`
   - Else → going downhill, peak is left (including mid): `right = mid`
3. Return `left`

**Walkthrough:**

    nums = [1, 2, 3, 1]

    left=0, right=3, mid=1
      nums[1]=2 < nums[2]=3 → going up, left=2

    left=2, right=3, mid=2
      nums[2]=3 > nums[3]=1 → going down, right=2

    left=2 === right=2 → return 2 ✓

    nums = [1, 2, 1, 3, 5, 6, 4]

    left=0, right=6, mid=3
      nums[3]=3 < nums[4]=5 → going up, left=4

    left=4, right=6, mid=5
      nums[5]=6 > nums[6]=4 → going down, right=5

    left=5 === right=5 → return 5 ✓

    nums = [3, 2, 1] (peak at start)

    left=0, right=2, mid=1
      nums[1]=2 > nums[2]=1 → going down, right=1

    left=0, right=1, mid=0
      nums[0]=3 > nums[1]=2 → going down, right=0

    left=0 === right=0 → return 0 ✓

**Comparison with Find Minimum in Rotated Sorted Array (#153):**
- #153: Compare mid to right → find where sorted order breaks
- #162: Compare mid to mid+1 → follow the uphill direction
- Both use `left < right` and `right = mid` pattern

**The binary search family:**
- #704: Standard — find exact target
- #35: Insert position — find where target belongs
- #33, #153: Rotated array — compare mid to right
- #34: Find range — biased left/right on match
- #74: 2D matrix — flatten to 1D
- **#162: Peak element — follow uphill** ✅

**Time Complexity:** O(log n) — halving search space each step  
**Space Complexity:** O(1) — only pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Going uphill means a peak exists ahead — guaranteed by the -∞ boundary
- Same `left < right` with `right = mid` pattern as #153
- We don't need a sorted array for binary search — just a way to eliminate half
- Any problem where you can determine "the answer is in this half" can use binary search
- Completes your binary search toolkit!