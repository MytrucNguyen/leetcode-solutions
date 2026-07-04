# 1047. Remove All Adjacent Duplicates In String

**Difficulty:** Easy  
**Topics:** String, Stack  
**Link:** [LeetCode Problem](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

## Problem Description

You are given a string `s` consisting of lowercase English letters. A **duplicate removal** consists of choosing two **adjacent** and **equal** letters and removing them.

We repeatedly make duplicate removals on `s` until we no longer can.

Return the final string after all such duplicate removals have been made.

### Examples

**Example 1:**

    Input: s = "abbaca"
    Output: "ca"
    Explanation:
      "abbaca" → remove "bb" → "aaca"
      "aaca" → remove "aa" → "ca"

**Example 2:**

    Input: s = "azxxzy"
    Output: "ay"
    Explanation:
      "azxxzy" → remove "xx" → "azzy"
      "azzy" → remove "zz" → "ay"

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters

## Approach

### Stack — Pop on Match

Push characters onto a stack. If the top matches the current character, pop (they cancel). Otherwise push. The stack holds the final result.

**Key Insight:** Same mechanic as Valid Parentheses (#20) — push, pop when matching. Instead of matching `(` with `)`, we match any character with itself. Removing a pair can reveal a new pair underneath — the stack handles this automatically.

**Why the stack handles chain reactions:**

    "abba":
    'a' → push.       Stack: [a]
    'b' → push.       Stack: [a, b]
    'b' → matches top → pop. Stack: [a]
    'a' → matches top → pop. Stack: []

    The "bb" removal exposes "aa" — the stack catches it naturally!

**Algorithm:**

1. Create an empty stack
2. For each character:
    - If stack is not empty AND top matches current → pop
    - Otherwise → push
3. Join the stack into a string

**Walkthrough:**

    s = "abbaca"

    'a' → stack empty → push.       Stack: [a]
    'b' → top 'a' ≠ 'b' → push.    Stack: [a, b]
    'b' → top 'b' === 'b' → pop.   Stack: [a]
    'a' → top 'a' === 'a' → pop.   Stack: []
    'c' → stack empty → push.       Stack: [c]
    'a' → top 'c' ≠ 'a' → push.    Stack: [c, a]

    Result: "ca" ✓

**Comparison with other stack matching:**

- Valid Parentheses (#20): Pop when `(` matches `)`
- Asteroid Collision (#735): Pop when collision, resolve by size
- Remove Adjacent Duplicates (#1047): Pop when same character matches

**Time Complexity:** O(n) — each character pushed and popped at most once  
**Space Complexity:** O(n) — stack holds remaining characters

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same push/pop-on-match pattern as Valid Parentheses
- The stack naturally handles chain reactions — no need to loop multiple times
- Each character is pushed once and popped at most once → O(n)
- Think of it as a "bubble popper" — adjacent matches cancel out
