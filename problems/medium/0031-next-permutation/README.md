# 31. Next Permutation

**Difficulty:** Medium  
**Topics:** Array, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/next-permutation/)

## Problem Description

A **permutation** of an array of integers is an arrangement of its members into a sequence or linear order.

The **next permutation** of an array of integers is the next lexicographically greater permutation of its integer. If the array is the last permutation, return the first permutation (sorted ascending).

The replacement must be **in place** and use only constant extra memory.

### Examples

**Example 1:**

    Input: nums = [1, 2, 3]
    Output: [1, 3, 2]

**Example 2:**

    Input: nums = [3, 2, 1]
    Output: [1, 2, 3]
    Explanation: Largest permutation → wrap to smallest.

**Example 3:**

    Input: nums = [1, 1, 5]
    Output: [1, 5, 1]

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

## Approach

### Three-Step Algorithm

Find the rightmost "dip" (where a smaller number precedes a larger one), swap it with the next larger number to its right, then reverse the suffix to get the smallest possible tail.

**Key Insight:** The next permutation is the smallest number larger than the current one. To achieve this:

1. Find where the sequence stops being descending from the right — that's the "pivot" to change
2. Swap the pivot with the smallest number to its right that's larger than it — minimally increase
3. Reverse the suffix — make the tail as small as possible

**Algorithm:**

1. Scan right to left: find first `i` where `nums[i] < nums[i+1]` (the pivot)
2. If no pivot found → entire array is descending → reverse all (wrap to smallest)
3. Scan right to left again: find first `j` where `nums[j] > nums[i]`
4. Swap `nums[i]` and `nums[j]`
5. Reverse everything after index `i`

**Why this works:**

- The suffix after the pivot is in descending order (otherwise we'd have found the pivot earlier)
- Swapping the pivot with the next larger element makes the number just slightly bigger
- Reversing the descending suffix makes it ascending — the smallest possible tail

**Walkthrough:**

    nums = [1, 5, 8, 4, 7, 6, 5, 3, 1]

    Step 1 — Find pivot (right to left):
      1 < 3? No (1 < 3 yes, but check pairs)
      3 < 5? No... let me walk pairs:
      nums[7]=3 > nums[8]=1 → descending, continue
      nums[6]=5 > nums[7]=3 → descending, continue
      nums[5]=6 > nums[6]=5 → descending, continue
      nums[4]=7 > nums[5]=6 → descending, continue
      nums[3]=4 < nums[4]=7 → found pivot at i=3!

    Step 2 — Find swap target (right to left, first > pivot):
      nums[8]=1 > 4? No
      nums[7]=3 > 4? No
      nums[6]=5 > 4? Yes → j=6

    Step 3 — Swap nums[3] and nums[6]:
      [1, 5, 8, 5, 7, 6, 4, 3, 1]

    Step 4 — Reverse suffix after index 3:
      [7, 6, 4, 3, 1] → [1, 3, 4, 6, 7]
      Result: [1, 5, 8, 5, 1, 3, 4, 6, 7] ✓

    nums = [3, 2, 1] (largest permutation)

    Step 1: No pivot found (entire array descending)
    → Reverse all: [1, 2, 3] ✓

    nums = [1, 2, 3]

    Step 1: nums[1]=2 < nums[2]=3 → pivot at i=1
    Step 2: nums[2]=3 > 2 → j=2
    Step 3: Swap → [1, 3, 2]
    Step 4: Reverse after i=1 → [2] stays [2]
    Result: [1, 3, 2] ✓

**Time Complexity:** O(n) — at most three scans  
**Space Complexity:** O(1) — in-place swaps and reverse

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Three steps: find pivot, swap with next larger, reverse suffix
- The suffix after the pivot is always descending — that's how we find it
- If no pivot exists, the array is the largest permutation → reverse all
- This is THE standard algorithm for next permutation — worth memorizing
- Used internally by many libraries for permutation generation
