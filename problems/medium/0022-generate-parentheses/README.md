# 22. Generate Parentheses

**Difficulty:** Medium  
**Topics:** String, Dynamic Programming, Backtracking  
**Link:** [LeetCode Problem](https://leetcode.com/problems/generate-parentheses/)

## Problem Description

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

### Examples

**Example 1:**

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

**Example 2:**

Input: n = 1
Output: ["()"]

### Constraints

- `1 <= n <= 8`

## Approach

### Backtracking — Two Choices with Constraints

At each position, choose to add `(` or `)`. But not freely — two rules keep the parentheses valid.

**Key Insight:** Unlike Subsets (#78) and Permutations (#46) where all choices are always available, here the choices are **constrained**:

- Add `(` only if you haven't used all n of them (`open < n`)
- Add `)` only if it would close an open one (`close < open`)

These two rules naturally generate only valid combinations.

**Algorithm:**

1. Start with empty string, `open = 0`, `close = 0`
2. Base case: if string length is `2 * n`, add to results
3. If `open < n` → add `(`, recurse
4. If `close < open` → add `)`, recurse
5. Return all results

**Walkthrough:**

n = 2
backtrack("", open=0, close=0)
Add (: backtrack("(", 1, 0)
Add (: backtrack("((", 2, 0)
Can't add ( (open=2=n)
Add ): backtrack("(()", 2, 1)
Can't add ( (open=2=n)
Add ): backtrack("(())", 2, 2) → length=4=2n → add "(())" ✓
Add ): backtrack("()", 1, 1)
Add (: backtrack("()(", 2, 1)
Can't add ( (open=2=n)
Add ): backtrack("()()", 2, 2) → length=4=2n → add "()()" ✓
Can't add ) (close=1=open)
Result: ["(())", "()()"] ✓

n = 3: Full decision tree produces:
"((()))" — all opens first, then all closes
"(()())" — open, open, close, open, close, close
"(())()" — open, open, close, close, open, close
"()(())" — open, close, open, open, close, close
"()()()" — alternating pairs
Result: ["((()))","(()())","(())()","()(())","()()()"] ✓

**Comparison with other backtracking problems:**

- Subsets (#78): include/skip — no constraints
- Permutations (#46): pick unused — constraint is "not used yet"
- Parentheses (#22): add ( or ) — constraints are open < n and close < open

**Time Complexity:** O(4^n / √n) — the nth Catalan number  
**Space Complexity:** O(n) — recursion depth

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Backtracking with constraints naturally prunes invalid paths
- The two rules (`open < n` and `close < open`) guarantee only valid parentheses
- No need to validate at the end — building correctly means every result is valid
- This is the third classic backtracking problem after Subsets and Permutations
- The pattern of "constrained choices" appears in N-Queens, Sudoku, and many others
