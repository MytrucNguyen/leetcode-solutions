# 1249. Minimum Remove to Make Valid Parentheses

**Difficulty:** Medium  
**Topics:** String, Stack  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)

## Problem Description

Given a string `s` of `'('`, `')'` and lowercase English characters, remove the minimum number of parentheses so that the resulting string is valid.

A valid parentheses string is one where:

- It is empty, contains only lowercase characters, or
- It can be written as `AB` (A concatenated with B), where A and B are valid, or
- It can be written as `(A)`, where A is valid

Return any valid string.

### Examples

**Example 1:**

    Input: s = "lee(t(c)o)de)"
    Output: "lee(t(c)o)de"
    Explanation: Remove the last ')'.

**Example 2:**

    Input: s = "a)b(c)d"
    Output: "ab(c)d"
    Explanation: Remove the first ')'.

**Example 3:**

    Input: s = "))(("
    Output: ""
    Explanation: All parentheses are unmatched.

### Constraints

- `1 <= s.length <= 10^5`
- `s[i]` is either `'('`, `')'`, or lowercase English letter

## Approach

### Stack to Find Unmatched Indices

Use a stack to track indices of unmatched parentheses. Then rebuild the string skipping those indices.

**Key Insight:** This extends Valid Parentheses (#20). Instead of returning true/false, we find WHICH parentheses are unmatched and remove them. A stack of indices tells us exactly which characters to remove.

**Algorithm:**

1. Walk through the string with a stack:
    - `(` → push its index (might be unmatched)
    - `)` → if stack has a `(`, pop it (matched!). Otherwise push `)` index (unmatched)
    - Letters → skip
2. Stack now contains all unmatched parenthesis indices
3. Put indices in a Set for O(1) lookup
4. Rebuild string skipping indices in the Set

**Walkthrough:**

    s = "lee(t(c)o)de)"
         0123456789...12

    Walk through:
    l,e,e → skip (letters)
    '(' at 3 → push 3.        Stack: [3]
    t → skip
    '(' at 5 → push 5.        Stack: [3, 5]
    c → skip
    ')' at 7 → pop 5 (matched). Stack: [3]
    o → skip
    ')' at 9 → pop 3 (matched). Stack: []
    d,e → skip
    ')' at 12 → stack empty, push 12. Stack: [12]

    Unmatched indices: {12}
    Rebuild: skip index 12 → "lee(t(c)o)de" ✓

    s = "))(("
         0123

    ')' at 0 → stack empty, push 0.  Stack: [0]
    ')' at 1 → stack top is ')', push 1. Stack: [0, 1]
    '(' at 2 → push 2.               Stack: [0, 1, 2]
    '(' at 3 → push 3.               Stack: [0, 1, 2, 3]

    Unmatched: {0, 1, 2, 3} — remove all → "" ✓

**Why we need to track indices, not just count:** We need to know WHICH specific parentheses to remove, not just how many. The stack gives us exact positions.

**Comparison with Valid Parentheses (#20):**

- #20: Stack of characters, return true/false
- #1249: Stack of indices, rebuild without unmatched ones

**Time Complexity:** O(n) — two passes (scan + rebuild)  
**Space Complexity:** O(n) — stack and set of indices

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Stack of INDICES not characters — we need positions to rebuild
- Unmatched ')' detected when stack is empty or top is ')'
- Unmatched '(' remains in stack after processing
- Put unmatched indices in a Set for O(1) skip during rebuild
- THE most asked problem at Meta — know this one cold
