# 189. Rotate Array

**Difficulty:** Medium  
**Topics:** Array, Math, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/rotate-array/)

## Problem Description

Given an integer array `nums`, rotate the array to the right by `k` steps.

### Examples

**Example 1:**
```
Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
Output: [5, 6, 7, 1, 2, 3, 4]
Explanation:
  rotate 1 step:  [7, 1, 2, 3, 4, 5, 6]
  rotate 2 steps: [6, 7, 1, 2, 3, 4, 5]
  rotate 3 steps: [5, 6, 7, 1, 2, 3, 4]
```

**Example 2:**
```
Input: nums = [-1, -100, 3, 99], k = 2
Output: [3, 99, -1, -100]
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`
- `0 <= k <= 10^5`

**Follow up:** Could you do it in-place with O(1) extra space?

## Approach

### Extra Array (Simple)
Create a new array and place each element at `(i + k) % length`.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Triple Reverse (Optimal)
Reverse the entire array, then reverse the first k elements, then reverse the rest. This rotates in-place with no extra space.

**Key Insight:** Reversing the whole array puts the last k elements at the front, but in the wrong order. Reversing each half fixes the order within each section.

**Algorithm:**
1. Handle edge case: `k = k % nums.length` (rotating by array length = no change)
2. Reverse the entire array
3. Reverse the first `k` elements
4. Reverse the remaining `n - k` elements

**Walkthrough:**
```
nums = [1, 2, 3, 4, 5, 6, 7], k = 3

k % 7 = 3

Step 1 — Reverse all:
  [1, 2, 3, 4, 5, 6, 7] → [7, 6, 5, 4, 3, 2, 1]

Step 2 — Reverse first 3:
  [7, 6, 5, 4, 3, 2, 1] → [5, 6, 7, 4, 3, 2, 1]

Step 3 — Reverse last 4:
  [5, 6, 7, 4, 3, 2, 1] → [5, 6, 7, 1, 2, 3, 4] ✓
```
```
nums = [-1, -100, 3, 99], k = 2

k % 4 = 2

Step 1 — Reverse all:
  [-1, -100, 3, 99] → [99, 3, -100, -1]

Step 2 — Reverse first 2:
  [99, 3, -100, -1] → [3, 99, -100, -1]

Step 3 — Reverse last 2:
  [3, 99, -100, -1] → [3, 99, -1, -100] ✓
```

**Why does triple reverse work?**
Think of the array as two halves: `[A | B]` where B is the last k elements. We want `[B | A]`.
- Reverse all: `[A | B]` → `[B_rev | A_rev]`
- Reverse first k: `[B_rev | A_rev]` → `[B | A_rev]`
- Reverse rest: `[B | A_rev]` → `[B | A]` ✓

**Time Complexity:** O(n) - Three passes through the array  
**Space Complexity:** O(1) - In-place reversals

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- The triple reverse trick is an elegant O(1) space rotation technique
- Always mod k by the array length to handle k > length
- A helper reverse function keeps the code clean and DRY
- This pattern of "reverse sections to rearrange" appears in other problems too