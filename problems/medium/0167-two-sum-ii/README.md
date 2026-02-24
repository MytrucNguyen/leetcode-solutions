# 167. Two Sum II - Input Array Is Sorted

**Difficulty:** Medium  
**Topics:** Array, Two Pointers, Binary Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

## Problem Description

Given a **1-indexed** array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Return the indices of the two numbers as an integer array `[index1, index2]` of length 2.

You may not use the same element twice. Your solution must use only **constant extra space**.

### Examples

**Example 1:**
```
Input: numbers = [2, 7, 11, 15], target = 9
Output: [1, 2]
Explanation: 2 + 7 = 9. We return [1, 2] (1-indexed).
```

**Example 2:**
```
Input: numbers = [2, 3, 4], target = 6
Output: [1, 3]
Explanation: 2 + 4 = 6. We return [1, 3].
```

**Example 3:**
```
Input: numbers = [-1, 0], target = -1
Output: [1, 2]
Explanation: -1 + 0 = -1. We return [1, 2].
```

### Constraints

- `2 <= numbers.length <= 3 * 10^4`
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted in non-decreasing order
- `-1000 <= target <= 1000`
- Exactly one solution exists

## Approach

### Hash Map (Works but not optimal)
Same as Two Sum (#1) — store seen values in a hash map. But this doesn't take advantage of the sorted property and uses O(n) space.
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Two Pointers (Optimal)
Use two pointers — one at the start, one at the end. Since the array is sorted, we can narrow down to the answer by moving pointers based on the current sum.

**Key Insight:** Because the array is sorted, if the sum is too big, moving the right pointer left gives a smaller sum. If the sum is too small, moving the left pointer right gives a bigger sum. This guarantees we find the answer in one pass.

**Algorithm:**
1. Set `left` pointer at index 0, `right` pointer at the last index
2. Calculate the sum of values at both pointers
3. If sum equals target → return `[left + 1, right + 1]` (1-indexed)
4. If sum is too big → move `right` left
5. If sum is too small → move `left` right
6. Repeat until found

**Walkthrough:**
```
numbers = [2, 3, 4], target = 6

left = 0, right = 2
  2 + 4 = 6 → match! return [1, 3] ✓
```
```
numbers = [1, 3, 5, 8], target = 8

left = 0, right = 3
  1 + 8 = 9 → too big, move right
left = 0, right = 2
  1 + 5 = 6 → too small, move left
left = 1, right = 2
  3 + 5 = 8 → match! return [2, 3] ✓
```
```
numbers = [1, 2, 3, 4, 5], target = 4

left = 0, right = 4
  1 + 5 = 6 → too big, move right
left = 0, right = 3
  1 + 4 = 5 → too big, move right
left = 0, right = 2
  1 + 3 = 4 → match! return [1, 3] ✓
```

**Comparison with Two Sum (#1):**
- #1: Unsorted array → hash map O(n) space
- #167: Sorted array → two pointers O(1) space

**Time Complexity:** O(n) - Each pointer moves at most n times  
**Space Complexity:** O(1) - Only two pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- When an array is sorted, two pointers often replaces hash maps with O(1) space
- Too big → move right pointer left, too small → move left pointer right
- This is the same two pointer pattern used in 3Sum (#15) and Container With Most Water (#11)
- Always check if the input being sorted opens up a better approach