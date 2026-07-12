# 2390. Removing Stars From a String

**Difficulty:** Medium  
**Topics:** String, Stack, Simulation  
**Link:** [LeetCode Problem](https://leetcode.com/problems/removing-stars-from-a-string/)

## Problem Description

You are given a string `s`, which contains stars `*`.

In one operation, you can:

- Choose a star in `s`
- Remove the closest **non-star** character to its **left**, as well as remove the star itself

Return the string after **all** stars have been removed.

### Examples

**Example 1:**

    Input: s = "leet**cod*e"
    Output: "lecoe"
    Explanation:
      First star removes 't': "lee*cod*e"
      Second star removes 'e': "lecod*e"
      Third star removes 'd': "lecoe"

**Example 2:**

    Input: s = "erase*****"
    Output: ""
    Explanation: All characters are removed by stars.

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters and stars `*`
- The operation above can always be applied (enough characters to remove)

## Approach

### Stack — Push Letters, Pop on Star

Same mechanic as Remove Adjacent Duplicates (#1047) and Backspace String Compare (#844). Push letters onto the stack, pop when you see a star.

**Key Insight:** A star removes the most recent non-star character — that's exactly what a stack tracks. Push characters, pop on `*`, join at the end.

**Algorithm:**

1. Create an empty stack
2. For each character:
    - If `*` → pop the stack
    - Otherwise → push the character
3. Join the stack into a string

**Walkthrough:**

    s = "leet**cod*e"

    'l' → push.   Stack: [l]
    'e' → push.   Stack: [l, e]
    'e' → push.   Stack: [l, e, e]
    't' → push.   Stack: [l, e, e, t]
    '*' → pop.    Stack: [l, e, e]
    '*' → pop.    Stack: [l, e]
    'c' → push.   Stack: [l, e, c]
    'o' → push.   Stack: [l, e, c, o]
    'd' → push.   Stack: [l, e, c, o, d]
    '*' → pop.    Stack: [l, e, c, o]
    'e' → push.   Stack: [l, e, c, o, e]

    Result: "lecoe" ✓

**The stack "remove" family:**

- Valid Parentheses (#20): Pop on matching close bracket
- Remove Adjacent Duplicates (#1047): Pop on same character
- Backspace String Compare (#844): Pop on '#'
- Removing Stars (#2390): Pop on '\*'

**Time Complexity:** O(n) — each character pushed and popped at most once  
**Space Complexity:** O(n) — stack holds remaining characters

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Star = backspace = pop from stack — same pattern in different skins
- The stack naturally handles chain effects — earlier removals affect later ones
- Push letters, pop on special character — the universal stack removal pattern
