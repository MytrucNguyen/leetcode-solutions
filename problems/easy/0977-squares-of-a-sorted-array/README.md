# 977. Squares of a Sorted Array

**Difficulty:** Easy  
**Topics:** Array, Two Pointers, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/squares-of-a-sorted-array/)

## Problem Description

Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

### Examples

**Example 1:**
```
Input: nums = [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]
```

**Example 2:**
```
Input: nums = [-7, -3, 2, 3, 11]
Output: [4, 9, 9, 49, 121]
```

### Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in non-decreasing order

**Follow up:** Could you do it in O(n) time?

## Approach

### Square and Sort (Simple)
Square every number, then sort.
- **Time Complexity:** O(n log n) — due to sorting
- **Space Complexity:** O(n)

### Two Pointers from Both Ends (Optimal)
The input is sorted, so the largest squares are at both ends (negatives on the left, positives on the right). Use two pointers working inward, filling the result array from the back.

**Key Insight:** In a sorted array with negatives, after squaring the largest values are at the extremes. For example `[-4, -1, 0, 3, 10]` → squares are `[16, 1, 0, 9, 100]`. The biggest is either at the far left or far right. Compare both ends and place the larger one at the back of the result.

**Algorithm:**
1. Create a result array of the same length
2. Set `left = 0`, `right = nums.length - 1`, `pos = nums.length - 1` (filling from back)
3. While `left <= right`:
   - Compare `Math.abs(nums[left])` vs `Math.abs(nums[right])`
   - Place the larger square at `result[pos]`
   - Move the corresponding pointer inward
   - Decrement `pos`
4. Return result

**Walkthrough:**
```
nums = [-4, -1, 0, 3, 10]
        L               R     pos = 4

|-4| = 4 vs |10| = 10 → 10² = 100 goes at pos 4
result: [_, _, _, _, 100]
        L           R        pos = 3

|-4| = 4 vs |3| = 3 → 4² = 16 goes at pos 3
result: [_, _, _, 16, 100]
           L        R       pos = 2

|-1| = 1 vs |3| = 3 → 3² = 9 goes at pos 2
result: [_, _, 9, 16, 100]
           L     R          pos = 1

|-1| = 1 vs |0| = 0 → 1² = 1 goes at pos 1
result: [_, 1, 9, 16, 100]
              LR             pos = 0

|0| = 0 → 0² = 0 goes at pos 0
result: [0, 1, 9, 16, 100] ✓
```

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(n) - Result array

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- When a sorted array has negatives, the largest absolute values are at both ends
- Filling the result from the back lets us place the largest values first
- Two pointers working inward is a powerful pattern for sorted arrays
- This is a great example of using the sorted property to avoid an extra sort step