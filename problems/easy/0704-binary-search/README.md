# 704. Binary Search

**Difficulty:** Easy  
**Topics:** Array, Binary Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/binary-search/)

## Problem Description

Given an array of integers `nums` which is sorted in **ascending order**, and an integer `target`, write a function to search for `target` in `nums`. If `target` exists, then return its **index**. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

### Examples

**Example 1:**
```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 is in nums at index 4.
```

**Example 2:**
```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 is not in nums, so return -1.
```

### Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i], target <= 10^4`
- All integers in `nums` are **unique**
- `nums` is sorted in **ascending order**

## Understanding the Problem

We need to find a target value in a **sorted** array and return its index. If it doesn't exist, return -1.

**Key insight:** Because the array is sorted, we can eliminate half the search space each time by checking the middle element.
```
nums = [-1, 0, 3, 5, 9, 12]
target = 9

Check middle (3):
  3 < 9 → target must be on the RIGHT
  Eliminated left half! [-1, 0, 3]

Check new middle (9):
  9 === 9 → FOUND IT!
```

## Approach

### Binary Search

Instead of checking every element (O(n)), we repeatedly cut the search space in half (O(log n)).

**Algorithm:**

1. Set `left = 0` and `right = nums.length - 1`
2. While `left <= right`:
   - Calculate `mid = Math.floor((left + right) / 2)`
   - If `nums[mid] === target` → return mid (found!)
   - If `nums[mid] < target` → search RIGHT: `left = mid + 1`
   - If `nums[mid] > target` → search LEFT: `right = mid - 1`
3. If loop exits (left > right) → return -1 (not found)

**Why `mid + 1` and `mid - 1`?**

We already checked mid and it wasn't the target, so we can safely skip it. Without the +1/-1, we'd get stuck in an infinite loop:
```
nums = [3, 5], target = 5

Without +1 (WRONG):
  mid = 0, nums[0] = 3
  3 < 5 → left = mid = 0  ← STUCK! Same mid forever!

With +1 (CORRECT):
  mid = 0, nums[0] = 3
  3 < 5 → left = mid + 1 = 1  ← Moves forward!
  mid = 1, nums[1] = 5 → FOUND! ✓
```

**Step-by-Step for target = 9:**
```
nums = [-1, 0, 3, 5, 9, 12]
target = 9

Initial: left = 0, right = 5

Iteration 1:
  mid = Math.floor((0 + 5) / 2) = 2
  nums[2] = 3
  3 < 9 → search RIGHT
  left = 3

  Range: [5, 9, 12]

Iteration 2:
  mid = Math.floor((3 + 5) / 2) = 4
  nums[4] = 9
  9 === 9 → FOUND!
  Return 4 ✓
```

**Step-by-Step for target = 2 (not found):**
```
nums = [-1, 0, 3, 5, 9, 12]
target = 2

Initial: left = 0, right = 5

Iteration 1:
  mid = 2, nums[2] = 3
  3 > 2 → search LEFT
  right = 1

Iteration 2:
  mid = 0, nums[0] = -1
  -1 < 2 → search RIGHT
  left = 1

Iteration 3:
  mid = 1, nums[1] = 0
  0 < 2 → search RIGHT
  left = 2

left (2) > right (1)
Search space is EMPTY!
Return -1 ✓
```

**Why this works:**

Each iteration eliminates half the remaining search space:
```
Start:      [-1, 0, 3, 5, 9, 12]  (6 elements)
After 1:    [5, 9, 12]             (3 elements)
After 2:    Found!                  

Worst case: log₂(n) iterations
For n=10,000: only ~14 checks needed!
```

**Time Complexity:** O(log n) - Halve search space each iteration  
**Space Complexity:** O(1) - Only use a few variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Binary search only works on **sorted** arrays
- Always check the middle, then eliminate half the search space
- Use `mid + 1` and `mid - 1` to avoid infinite loops (we already checked mid!)
- When `left > right`, the search space is empty → target doesn't exist
- O(log n) is massively faster than O(n) for large arrays
- This is the pure form of binary search (you saw it applied in Sqrt(x))
- Common interview follow-ups: rotated arrays, find first/last position
- Calculate mid as `Math.floor((left + right) / 2)`