# 78. Subsets

**Difficulty:** Medium  
**Topics:** Array, Backtracking, Bit Manipulation  
**Link:** [LeetCode Problem](https://leetcode.com/problems/subsets/)

## Problem Description

Given an integer array `nums` of **unique** elements, return all possible subsets (the power set).

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.

### Examples

**Example 1:**
```
Input: nums = [1, 2, 3]
Output: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
```

**Example 2:**
```
Input: nums = [0]
Output: [[], [0]]
```

### Constraints

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- All the numbers of `nums` are unique

## Approach

### Backtracking — Include or Skip

At each element, make a binary choice: include it in the current subset or skip it. When you've decided for every element, add the current subset to the result.

**Key Insight:** Building subsets is like walking through a decision tree. At each level, you decide about one element. The leaves of the tree are all possible subsets. This "include or skip" pattern is the foundation of all backtracking problems.

**Algorithm:**
1. Start with an empty current subset and index 0
2. At each index, two choices:
   - **Include:** Add `nums[index]` to current, recurse with `index + 1`
   - **Skip:** Don't add, recurse with `index + 1`
3. When index reaches the end, add a copy of current subset to results
4. Return all results

**Walkthrough:**
```
nums = [1, 2, 3]

backtrack(index=0, current=[])
  Include 1: backtrack(1, [1])
    Include 2: backtrack(2, [1,2])
      Include 3: backtrack(3, [1,2,3]) → add [1,2,3]
      Skip 3:    backtrack(3, [1,2])   → add [1,2]
    Skip 2: backtrack(2, [1])
      Include 3: backtrack(3, [1,3])   → add [1,3]
      Skip 3:    backtrack(3, [1])     → add [1]
  Skip 1: backtrack(1, [])
    Include 2: backtrack(2, [2])
      Include 3: backtrack(3, [2,3])   → add [2,3]
      Skip 3:    backtrack(3, [2])     → add [2]
    Skip 2: backtrack(2, [])
      Include 3: backtrack(3, [3])     → add [3]
      Skip 3:    backtrack(3, [])      → add []

Result: [[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], []]
```

**Why 2^n subsets?** Each element has 2 choices (include/skip). With n elements, that's 2 × 2 × ... × 2 = 2^n total subsets.

**Alternative approach — Iterative:**
```
Start: [[]]
Add 1: [[], [1]]
Add 2: [[], [1], [2], [1,2]]
Add 3: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]

For each new number, copy all existing subsets and add the number to each copy.
```

**Time Complexity:** O(n × 2^n) — 2^n subsets, each up to length n to copy  
**Space Complexity:** O(n) — recursion depth (not counting output)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- "Include or skip" is the fundamental backtracking pattern
- Every element having 2 choices → 2^n total subsets
- Always add a COPY of the current subset, not a reference
- This pattern is the foundation for Permutations (#46), Combination Sum, and Subsets II
- Backtracking = make a choice, recurse, undo the choice