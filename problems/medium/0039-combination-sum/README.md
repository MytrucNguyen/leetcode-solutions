# 39. Combination Sum

**Difficulty:** Medium  
**Topics:** Array, Backtracking  
**Link:** [LeetCode Problem](https://leetcode.com/problems/combination-sum/)

## Problem Description

Given an array of **distinct** integers `candidates` and a target integer `target`, return a list of all **unique combinations** of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order.

The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

### Examples

**Example 1:**

    Input: candidates = [2, 3, 6, 7], target = 7
    Output: [[2, 2, 3], [7]]

**Example 2:**

    Input: candidates = [2, 3, 5], target = 8
    Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

**Example 3:**

    Input: candidates = [2], target = 1
    Output: []

### Constraints

- `1 <= candidates.length <= 30`
- `2 <= candidates[i] <= 40`
- All elements of `candidates` are distinct
- `1 <= target <= 40`

## Approach

### Backtracking with Reuse

Same backtracking template as Subsets (#78) and Palindrome Partitioning (#131), but with two twists: you can reuse elements (recurse from same index), and you stop when the remaining target hits 0 (found a combo) or goes negative (overshoot).

**Key Insight:** To avoid duplicates like [2,3] and [3,2], only consider candidates from the current index forward. This ensures combinations are built in non-decreasing order. Reuse is allowed by recursing from `i` instead of `i + 1`.

**Comparison with similar backtracking problems:**

- Subsets (#78): Include/skip, move to `i + 1`
- Palindrome Partitioning (#131): Try each palindrome prefix, move to `end + 1`
- Coin Change (#322): Same problem but counts ways (DP) instead of collecting combos
- **Combination Sum (#39): Try each candidate from `i`, reuse by staying at `i`**

**Algorithm:**

1. Sort candidates (optional, helps with pruning)
2. Backtrack with (start index, remaining target, current combo):
    - If remaining === 0 → found a valid combo, add to results
    - If remaining < 0 → overshoot, return
    - For each candidate from start index:
        - If candidate > remaining → skip (and all after, if sorted)
        - Add candidate to current combo
        - Recurse with same index (allow reuse) and reduced remaining
        - Remove candidate (backtrack)

**Walkthrough:**

    candidates = [2, 3, 6, 7], target = 7

    backtrack(0, 7, [])
      Try 2: backtrack(0, 5, [2])
        Try 2: backtrack(0, 3, [2,2])
          Try 2: backtrack(0, 1, [2,2,2])
            Try 2: 1-2 = -1 < 0 → return
            Try 3: 1-3 = -2 < 0 → return
          Backtrack
          Try 3: backtrack(1, 0, [2,2,3])
            remaining = 0 → add [2,2,3] ✓
          Backtrack
        Backtrack
        Try 3: backtrack(1, 2, [2,3])
          Try 3: 2-3 = -1 → return
        Backtrack
        Try 6: 5-6 = -1 → return
      Backtrack
      Try 3: backtrack(1, 4, [3])
        Try 3: backtrack(1, 1, [3,3])
          Try 3: -2 → return
        Backtrack
      Backtrack
      Try 6: backtrack(2, 1, [6])
        Try 6: -5 → return
      Backtrack
      Try 7: backtrack(3, 0, [7])
        remaining = 0 → add [7] ✓

    Result: [[2,2,3], [7]] ✓

**Time Complexity:** O(n^(t/m)) where t is target and m is min candidate — depth of recursion tree  
**Space Complexity:** O(t/m) — max recursion depth

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Reuse allowed → recurse from same index `i`, not `i + 1`
- Start from current index → prevents duplicate combinations
- remaining === 0 → valid combo, remaining < 0 → prune
- Sorting + early break when candidate > remaining speeds things up
- Same template as all backtracking problems — choose, recurse, undo
