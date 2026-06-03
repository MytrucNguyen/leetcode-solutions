# 35. Search Insert Position

**Difficulty:** Easy  
**Topics:** Array, Binary Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/search-insert-position/)

## Problem Description

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with **O(log n)** runtime complexity.

### Examples

**Example 1:**
```
Input: nums = [1, 3, 5, 6], target = 5
Output: 2
```

**Example 2:**
```
Input: nums = [1, 3, 5, 6], target = 2
Output: 1
Explanation: 2 would be inserted between 1 and 3.
```

**Example 3:**
```
Input: nums = [1, 3, 5, 6], target = 7
Output: 4
Explanation: 7 would be inserted at the end.
```

**Example 4:**
```
Input: nums = [1, 3, 5, 6], target = 0
Output: 0
Explanation: 0 would be inserted at the beginning.
```

### Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` contains distinct values sorted in ascending order
- `-10^4 <= target <= 10^4`

## Approach

### Binary Search

Standard binary search with one key observation — when the target isn't found, `left` naturally ends up at the correct insertion position.

**Key Insight:** Binary search narrows down where the target belongs. If found, return `mid`. If not found, `left` points to the first element greater than target — exactly where we'd insert.

**Algorithm:**
1. Set `left = 0`, `right = nums.length - 1`
2. While `left <= right`:
   - Calculate `mid`
   - If `nums[mid] === target` → return `mid`
   - If `nums[mid] < target` → move `left = mid + 1`
   - If `nums[mid] > target` → move `right = mid - 1`
3. Return `left` (the insertion point)

**Walkthrough — target found:**
```
nums = [1, 3, 5, 6], target = 5

left=0, right=3, mid=1
  nums[1]=3 < 5 → left=2
left=2, right=3, mid=2
  nums[2]=5 === 5 → return 2 ✓
```

**Walkthrough — target not found:**
```
nums = [1, 3, 5, 6], target = 2

left=0, right=3, mid=1
  nums[1]=3 > 2 → right=0
left=0, right=0, mid=0
  nums[0]=1 < 2 → left=1
left=1, right=0 → loop ends

return left = 1 ✓ (2 goes between index 0 and 1)
```
```
nums = [1, 3, 5, 6], target = 7

left=0, right=3, mid=1
  nums[1]=3 < 7 → left=2
left=2, right=3, mid=2
  nums[2]=5 < 7 → left=3
left=3, right=3, mid=3
  nums[3]=6 < 7 → left=4
left=4, right=3 → loop ends

return left = 4 ✓ (7 goes at the end)
```

**Why does `left` give the insertion point?** When the loop ends, `left` has passed `right`. At that point, `left` is the index of the first element greater than target — which is exactly where the target should be inserted.

**Comparison with Binary Search (#704):**
- #704: Return `-1` if not found
- #35: Return `left` if not found (the insertion point)
- Only one line difference!

**Time Complexity:** O(log n) - Halving search space each step  
**Space Complexity:** O(1) - Only pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- This is Binary Search (#704) with a one-line change at the end
- When binary search doesn't find the target, `left` is the insertion point
- Understanding where `left` and `right` end up after binary search is key to many variations
- This same concept applies to finding lower/upper bounds in sorted arrays