# 40. Combination Sum II

**Difficulty:** Medium  
**Topics:** Array, Backtracking  
**Link:** [LeetCode Problem](https://leetcode.com/problems/combination-sum-ii/)

## Problem Description

Given a collection of candidate numbers `candidates` and a target number `target`, find all unique combinations in `candidates` where the candidate numbers sum to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note:** The solution set must not contain duplicate combinations.

### Examples

**Example 1:**

    Input: candidates = [10,1,2,7,6,1,5], target = 8
    Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

**Example 2:**

    Input: candidates = [2,5,2,1,2], target = 5
    Output: [[1,2,2],[5]]

### Constraints

- `1 <= candidates.length <= 100`
- `1 <= candidates[i] <= 50`
- `1 <= target <= 30`

## Approach

### Backtracking with Duplicate Skipping

Same backtracking as Combination Sum (#39) with two changes: recurse from `i + 1` (no reuse), and skip duplicates at the same recursion level.

**Key Insight:** After sorting, duplicate values are adjacent. At the same level of recursion, if we've already tried a value, skip identical values — they'd produce the same combinations.

**The two changes from #39:**

1. Recurse from `i + 1` instead of `i` → each element used at most once
2. Skip `candidates[i] === candidates[i-1]` at the same level → no duplicate combos

**Why does skipping work?**

    candidates = [1, 1, 2], target = 3

    At the top level, we try index 0 (value 1):
      This will find [1, 2] using the first 1

    At the top level, we try index 1 (value 1):
      This would ALSO find [1, 2] using the second 1 → duplicate!

    So we skip index 1 at the top level.

    But inside the recursion from index 0:
      We CAN use index 1 (the second 1) → gives [1, 1] which is valid!

**Algorithm:**

1. Sort candidates
2. Backtrack with (start index, remaining, current combo):
    - If remaining === 0 → found valid combo
    - For each index from start:
        - If `i > start` AND `candidates[i] === candidates[i-1]` → skip (duplicate at same level)
        - If `candidates[i] > remaining` → break (sorted, rest are too big)
        - Add to current, recurse from `i + 1`, remove (backtrack)

**Walkthrough:**

    candidates = [1, 1, 2, 5, 6, 7, 10], target = 8
    (sorted from [10,1,2,7,6,1,5])

    backtrack(0, 8, [])
      i=0, val=1: backtrack(1, 7, [1])
        i=1, val=1: backtrack(2, 6, [1,1])
          i=2, val=2: backtrack(3, 4, [1,1,2]) → no combo sums to 4
          i=3, val=5: backtrack(4, 1, [1,1,5]) → nothing ≤ 1
          i=4, val=6: 6 === remaining → [1,1,6] ✓
        i=2, val=2: backtrack(3, 5, [1,2])
          i=3, val=5: 5 === remaining → [1,2,5] ✓
        i=3, val=5: backtrack(4, 2, [1,5]) → nothing works
        i=4, val=6: backtrack(5, 1, [1,6]) → nothing
        i=5, val=7: 7 === remaining → [1,7] ✓
      i=1, val=1: i>start AND candidates[1]===candidates[0] → SKIP!
      i=2, val=2: backtrack(3, 6, [2])
        i=3, val=5: backtrack(4, 1, [2,5]) → nothing
        i=4, val=6: 6 === remaining → [2,6] ✓
      ...rest too big

    Result: [[1,1,6],[1,2,5],[1,7],[2,6]] ✓

**The Combination Sum family:**

- #39: Reuse allowed, no duplicates in input → recurse from `i`
- #40: No reuse, duplicates in input → recurse from `i+1`, skip duplicates

**Time Complexity:** O(2^n) — each element included or not  
**Space Complexity:** O(n) — recursion depth and current combo

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sort first → duplicates become adjacent → easy to skip
- Skip duplicates at the SAME LEVEL: `i > start && candidates[i] === candidates[i-1]`
- Recurse from `i + 1` to prevent reuse (vs `i` in #39)
- The skip condition `i > start` is crucial — allows using duplicates in DEEPER levels
- This "sort + skip duplicates" pattern appears in many backtracking problems
