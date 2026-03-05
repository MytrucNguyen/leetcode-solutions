# 747. Largest Number At Least Twice of Others

**Difficulty:** Easy  
**Topics:** Array, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/largest-number-at-least-twice-of-others/)

## Problem Description

You are given an integer array `nums` where the largest integer is **unique**.

Determine whether the largest element in the array is **at least twice** as much as every other number in the array. If it is, return the **index** of the largest element, or return `-1` otherwise.

### Examples

**Example 1:**
```
Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest. It is at least twice as big as every other number.
```

**Example 2:**
```
Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 is the largest but not at least twice as big as 3.
```

### Constraints

- `2 <= nums.length <= 50`
- `0 <= nums[i] <= 100`
- The largest element is unique

## Approach

### Track Largest and Second Largest

Instead of comparing the max against every element, just find the two biggest. If the largest is at least twice the second largest, it's automatically at least twice everything else.

**Key Insight:** You only need to check against the second largest. If `max >= 2 * secondMax`, then `max >= 2 * x` for all other values since they're all smaller than secondMax.

**Algorithm:**
1. Loop through the array tracking the largest value and its index, and the second largest value
2. After the loop, check if `largest >= 2 * secondLargest`
3. If yes, return the index of the largest. If no, return -1

**Walkthrough:**
```
nums = [3, 6, 1, 0]

i=0: num=3, largest=3 (index 0), second=0
i=1: num=6, 6 > 3 → second=3, largest=6 (index 1)
i=2: num=1, 1 < 3 → no change
i=3: num=0, 0 < 3 → no change

largest=6, second=3
6 >= 2 * 3? 6 >= 6? Yes → return 1 ✓
```
```
nums = [1, 2, 3, 4]

i=0: largest=1 (index 0), second=0
i=1: 2 > 1 → second=1, largest=2 (index 1)
i=2: 3 > 2 → second=2, largest=3 (index 2)
i=3: 4 > 3 → second=3, largest=4 (index 3)

largest=4, second=3
4 >= 2 * 3? 4 >= 6? No → return -1 ✓
```

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Only tracking two values

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- When comparing max against all elements, you only need the second largest
- Tracking top-k values in a single pass is a common pattern (same as Third Maximum #414)
- Reducing the problem to a simpler comparison is a key problem-solving skill