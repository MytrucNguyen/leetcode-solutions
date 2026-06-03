# 153. Find Minimum in Rotated Sorted Array

**Difficulty:** Medium  
**Topics:** Array, Binary Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

## Problem Description

Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. Given the sorted rotated array `nums` of **unique** elements, return the minimum element.

You must write an algorithm that runs in **O(log n)** time.

### Examples

**Example 1:**
```
Input: nums = [3, 4, 5, 1, 2]
Output: 1
Explanation: Original array was [1,2,3,4,5], rotated 3 times.
```

**Example 2:**
```
Input: nums = [4, 5, 6, 7, 0, 1, 2]
Output: 0
Explanation: Original array was [0,1,2,4,5,6,7], rotated 4 times.
```

**Example 3:**
```
Input: nums = [11, 13, 15, 17]
Output: 11
Explanation: Not rotated (or rotated n times).
```

### Constraints

- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- All integers are unique
- `nums` is sorted and rotated between 1 and n times

## Approach

### Modified Binary Search

Compare `mid` to `right` to determine which half contains the minimum. The minimum is at the rotation point — where the sorted order breaks.

**Key Insight:** In a rotated sorted array, if `nums[mid] > nums[right]`, the rotation point (minimum) must be in the right half. Otherwise, it's in the left half including mid. This is simpler than #33 because we're not searching for a specific target — just the smallest element.

**Algorithm:**
1. Set `left = 0`, `right = nums.length - 1`
2. While `left < right`:
   - Calculate `mid`
   - If `nums[mid] > nums[right]` → minimum is in right half, `left = mid + 1`
   - Otherwise → minimum is in left half (including mid), `right = mid`
3. Return `nums[left]`

**Why compare to right, not left?**
Comparing to `right` cleanly handles both rotated and non-rotated arrays. If the array isn't rotated, `nums[mid] <= nums[right]` is always true, and `right` shrinks to `left` correctly.

**Walkthrough:**
```
nums = [4, 5, 6, 7, 0, 1, 2]

left=0, right=6, mid=3
  nums[3]=7 > nums[6]=2 → min is right
  left=4

left=4, right=6, mid=5
  nums[5]=1 < nums[6]=2 → min is left (including mid)
  right=5

left=4, right=5, mid=4
  nums[4]=0 < nums[5]=1 → min is left (including mid)
  right=4

left=4 === right=4 → return nums[4] = 0 ✓
```
```
nums = [3, 4, 5, 1, 2]

left=0, right=4, mid=2
  nums[2]=5 > nums[4]=2 → min is right
  left=3

left=3, right=4, mid=3
  nums[3]=1 < nums[4]=2 → min is left (including mid)
  right=3

left=3 === right=3 → return nums[3] = 1 ✓
```
```
nums = [11, 13, 15, 17] (not rotated)

left=0, right=3, mid=1
  nums[1]=13 < nums[3]=17 → right=1

left=0, right=1, mid=0
  nums[0]=11 < nums[1]=13 → right=0

left=0 === right=0 → return nums[0] = 11 ✓
```

**Comparison with Search in Rotated Sorted Array (#33):**
- #33: Find a specific target — need to check which half is sorted AND if target is in range
- #153: Find the minimum — just check which half has the rotation point
- #153 is simpler because there's no target to match

**Time Complexity:** O(log n) - Halving search space each step  
**Space Complexity:** O(1) - Only pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Compare `mid` to `right` — cleaner than comparing to `left` for rotated arrays
- Use `right = mid` (not `mid - 1`) because mid could be the minimum
- Use `left = mid + 1` because if `nums[mid] > nums[right]`, mid is definitely not the minimum
- Handles non-rotated arrays naturally without special cases
- Simpler variation of the rotated sorted array binary search from #33