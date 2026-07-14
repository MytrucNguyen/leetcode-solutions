# 374. Guess Number Higher or Lower

**Difficulty:** Easy  
**Topics:** Binary Search, Interactive  
**Link:** [LeetCode Problem](https://leetcode.com/problems/guess-number-higher-or-lower/)

## Problem Description

We are playing the Guess Game. I pick a number from `1` to `n`. You have to guess which number I picked.

Every time you make a guess, I tell you whether your guess is higher, lower, or correct:

- `-1`: Your guess is higher than the pick
- `1`: Your guess is lower than the pick
- `0`: Your guess is correct

Return the number I picked.

### Examples

**Example 1:**

    Input: n = 10, pick = 6
    Output: 6

**Example 2:**

    Input: n = 1, pick = 1
    Output: 1

**Example 3:**

    Input: n = 2, pick = 1
    Output: 1

### Constraints

- `1 <= n <= 2^31 - 1`
- `1 <= pick <= n`

## Approach

### Standard Binary Search

Same binary search as #704 but instead of checking an array, call the `guess` API. The API acts as the comparator.

**Key Insight:** Binary search doesn't need an array — it needs a way to determine "go left or go right." The guess API provides exactly that.

**Algorithm:**

1. Set `left = 1`, `right = n`
2. While `left <= right`:
    - Calculate `mid`
    - Call `guess(mid)`
    - If 0 → found it, return mid
    - If -1 → too high, go left: `right = mid - 1`
    - If 1 → too low, go right: `left = mid + 1`

**Walkthrough:**

    n = 10, pick = 6

    left=1, right=10, mid=5
      guess(5) = 1 (too low) → left=6

    left=6, right=10, mid=8
      guess(8) = -1 (too high) → right=7

    left=6, right=7, mid=6
      guess(6) = 0 → return 6 ✓

**Time Complexity:** O(log n) — halve the range each step  
**Space Complexity:** O(1) — only pointers

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Binary search works on any sorted/monotonic space, not just arrays
- The API replaces the array comparison — same logic
- Same pattern as Koko Eating Bananas (#875) — searching an answer space
- Watch out for integer overflow on mid calculation with large n
