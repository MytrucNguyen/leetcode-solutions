# 678. Valid Parenthesis String

**Difficulty:** Medium  
**Topics:** String, Dynamic Programming, Stack, Greedy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-parenthesis-string/)

## Problem Description

Given a string `s` containing only three types of characters: `'('`, `')'` and `'*'`, return `true` if `s` is valid.

The `'*'` character can be treated as:

- A single right parenthesis `')'`
- A single left parenthesis `'('`
- An empty string `""`

### Examples

**Example 1:**

    Input: s = "()"
    Output: true

**Example 2:**

    Input: s = "(*)"
    Output: true

**Example 3:**

    Input: s = "(*))"
    Output: true

### Constraints

- `1 <= s.length <= 100`
- `s[i]` is `'('`, `')'` or `'*'`

## Approach

### Greedy — Track Range of Open Counts

Instead of one counter, track the possible range of open parentheses: `low` (minimum possible opens) and `high` (maximum possible opens).

**Key Insight:** With wildcards, the exact count of open parentheses is uncertain. But we can track the range. If at any point the maximum possible opens goes below 0, it's impossible. If at the end the minimum possible opens can be 0, it's valid.

**Three characters, three effects on the range:**

- `(` → definitely opens: low++, high++
- `)` → definitely closes: low--, high--
- `*` → could open, close, or do nothing: low--, high++

**Two rules:**

- If `high < 0` → even treating all `*` as `(`, too many `)` → return false
- Keep `low >= 0` → can't have negative open count (low represents best case)

**Algorithm:**

1. Set `low = 0`, `high = 0`
2. For each character:
    - `(` → low++, high++
    - `)` → low--, high--
    - `*` → low--, high++
    - If `high < 0` → return false (too many closes)
    - If `low < 0` → reset to 0 (we choose not to close)
3. Return `low === 0`

**Walkthrough:**

    s = "(*))"
    low=0, high=0

    '(': low=1, high=1
    '*': low=0, high=2   (could be ), empty, or ()
    ')': low=-1, high=1  → low < 0, reset low=0
    ')': low=-1, high=0  → low < 0, reset low=0

    high >= 0 and low === 0 → return true ✓

    s = "(*)"
    low=0, high=0

    '(': low=1, high=1
    '*': low=0, high=2
    ')': low=-1, high=1  → reset low=0

    low === 0 → return true ✓

    s = ")*("
    low=0, high=0

    ')': low=-1, high=-1 → high < 0 → return false ✓
    (Can't fix: ) comes before any ( or *)

    s = "(((*)"
    low=0, high=0

    '(': low=1, high=1
    '(': low=2, high=2
    '(': low=3, high=3
    '*': low=2, high=4
    ')': low=1, high=3

    low=1 ≠ 0 → return false ✓
    (Three opens, only one * and one ) — can't balance)

**Why this works:** `low` tracks the minimum opens assuming wildcards are used optimally to close. `high` tracks the maximum opens assuming wildcards are used to open. If at the end, 0 is within the range [low, high], we can balance.

**Comparison with the parentheses family:**

- Valid Parentheses (#20): Single counter, no wildcards
- Generate Parentheses (#22): Backtrack all valid combos
- Minimum Remove (#1249): Fix invalid by removing
- Valid Parenthesis String (#678): Handle wildcards with range tracking

**Time Complexity:** O(n) — single pass  
**Space Complexity:** O(1) — two variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Range tracking (low/high) handles uncertainty from wildcards elegantly
- low = minimum possible opens, high = maximum possible opens
- high < 0 means impossible — too many closes even with all wildcards as opens
- low < 0 means we're being too aggressive closing — reset to 0
- At the end, low === 0 means we CAN reach a balanced state
