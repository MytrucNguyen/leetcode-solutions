# 46. Permutations

**Difficulty:** Medium  
**Topics:** Array, Backtracking  
**Link:** [LeetCode Problem](https://leetcode.com/problems/permutations/)

## Problem Description

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in **any order**.

### Examples

**Example 1:**
```
Input: nums = [1, 2, 3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

**Example 2:**
```
Input: nums = [0, 1]
Output: [[0,1],[1,0]]
```

**Example 3:**
```
Input: nums = [1]
Output: [[1]]
```

### Constraints

- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- All the integers of `nums` are unique

## Approach

### Backtracking — Pick Unused Elements

At each position, pick any element that hasn't been used yet. Use a "used" set to track which elements are already in the current permutation.

**Key Insight:** Unlike Subsets (#78) where each element has 2 choices (include/skip), Permutations tries every unused element at each position. The "choose, recurse, undo" backtracking pattern is the same — just the choices differ.

**Comparison with Subsets (#78):**
- Subsets: At each element → include or skip (2 choices per element)
- Permutations: At each position → pick any unused element (n, n-1, n-2... choices)
- Both use the same backtrack pattern: choose, recurse, undo

**Algorithm:**
1. Start with an empty current permutation
2. If current length equals nums length → complete permutation, add to results
3. For each number in nums:
   - If not used yet → add it, mark used, recurse
   - After recursion → remove it, unmark (backtrack)
4. Return all results

**Walkthrough:**
```
nums = [1, 2, 3]

backtrack(current=[], used={})
  Try 1: backtrack([1], {1})
    Try 2: backtrack([1,2], {1,2})
      Try 3: backtrack([1,2,3], {1,2,3}) → add [1,2,3] ✓
    Undo 2
    Try 3: backtrack([1,3], {1,3})
      Try 2: backtrack([1,3,2], {1,2,3}) → add [1,3,2] ✓
    Undo 3
  Undo 1
  Try 2: backtrack([2], {2})
    Try 1: backtrack([2,1], {1,2})
      Try 3: backtrack([2,1,3], {1,2,3}) → add [2,1,3] ✓
    Undo 1
    Try 3: backtrack([2,3], {2,3})
      Try 1: backtrack([2,3,1], {1,2,3}) → add [2,3,1] ✓
    Undo 3
  Undo 2
  Try 3: backtrack([3], {3})
    Try 1: backtrack([3,1], {1,3})
      Try 2: backtrack([3,1,2], {1,2,3}) → add [3,1,2] ✓
    Undo 1
    Try 2: backtrack([3,2], {2,3})
      Try 1: backtrack([3,2,1], {1,2,3}) → add [3,2,1] ✓
    Undo 2
  Undo 3

Result: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] ✓
```

**Why n! permutations?** First position has n choices, second has n-1, third has n-2... Total = n × (n-1) × (n-2) × ... × 1 = n!

**Time Complexity:** O(n × n!) — n! permutations, each takes O(n) to copy  
**Space Complexity:** O(n) — recursion depth and used set

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same backtracking pattern as Subsets: choose, recurse, undo
- Use a "used" set to track which elements are in the current permutation
- Subsets = include/skip (2^n), Permutations = pick unused (n!)
- This pattern extends to Permutations II (with duplicates) and N-Queens
- Backtracking is just DFS on a decision tree