# 33. Search in Rotated Sorted Array

**Difficulty:** Medium  
**Topics:** Array, Binary Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/search-in-rotated-sorted-array/)

## Problem Description

There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index.

For example, `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`.

Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with **O(log n)** runtime complexity.

### Examples

**Example 1:**
```
Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
Output: 4
```

**Example 2:**
```
Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
Output: -1
```

**Example 3:**
```
Input: nums = [1], target = 0
Output: -1
```

### Constraints

- `1 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- All values of `nums` are unique
- `nums` is an ascending array that is possibly rotated

## Approach

### Modified Binary Search

Standard binary search doesn't work directly because the array is rotated. But the key insight is that when you split at `mid`, **one half is always sorted**.

**Key Insight:** After rotation, the array is split into two sorted halves. At any `mid` point, either the left half or the right half is sorted. Check which half is sorted, then determine if the target falls within that sorted range to decide which direction to search.

**Algorithm:**
1. Set `left = 0`, `right = nums.length - 1`
2. While `left <= right`:
   - Calculate `mid`
   - If `nums[mid] === target`, return `mid`
   - Check if the **left half** is sorted (`nums[left] <= nums[mid]`):
     - If target is in range `[nums[left], nums[mid])` → search left (`right = mid - 1`)
     - Otherwise → search right (`left = mid + 1`)
   - Else the **right half** is sorted:
     - If target is in range `(nums[mid], nums[right]]` → search right (`left = mid + 1`)
     - Otherwise → search left (`right = mid - 1`)
3. Return -1 if not found

**Walkthrough:**
```
nums = [4, 5, 6, 7, 0, 1, 2], target = 0

Step 1: left = 0, right = 6, mid = 3
  nums[mid] = 7, not target
  Left half [4,5,6,7] sorted? nums[0]=4 <= nums[3]=7 → Yes
  Is 0 in [4...7)? No → search right
  left = 4

Step 2: left = 4, right = 6, mid = 5
  nums[mid] = 1, not target
  Left half [0,1] sorted? nums[4]=0 <= nums[5]=1 → Yes
  Is 0 in [0...1)? Yes → search left
  right = 4

Step 3: left = 4, right = 4, mid = 4
  nums[mid] = 0 → found it! return 4 ✓
```
```
nums = [4, 5, 6, 7, 0, 1, 2], target = 3

Step 1: left = 0, right = 6, mid = 3
  nums[mid] = 7, not target
  Left half sorted, 3 in [4...7)? No → search right
  left = 4

Step 2: left = 4, right = 6, mid = 5
  nums[mid] = 1, not target
  Left half [0,1] sorted, 3 in [0...1)? No → search right
  left = 6

Step 3: left = 6, right = 6, mid = 6
  nums[mid] = 2, not target
  Left half sorted, 3 in [2...2)? No → search right
  left = 7

left > right → return -1 ✓
```

**Comparison with Binary Search (#704):**
- #704: Standard binary search on a fully sorted array
- #33: Modified binary search — extra step to determine which half is sorted

**Time Complexity:** O(log n) - Halving the search space each step  
**Space Complexity:** O(1) - Only pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- In a rotated sorted array, one half is always sorted — use this to decide search direction
- The check `nums[left] <= nums[mid]` determines if the left half is sorted
- This builds directly on standard binary search (#704) with one extra decision step
- This pattern of "modified binary search" appears in many problems (find minimum in rotated array, search in 2D matrix, etc.)