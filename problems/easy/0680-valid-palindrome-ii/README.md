# 680. Valid Palindrome II

**Difficulty:** Easy  
**Topics:** String, Two Pointers, Greedy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-palindrome-ii/)

## Problem Description

Given a string `s`, return `true` if the `s` can be palindrome after deleting **at most one** character from it.

### Examples

**Example 1:**

    Input: s = "aba"
    Output: true

**Example 2:**

    Input: s = "abca"
    Output: true
    Explanation: Remove 'c' → "aba" or remove 'b' → "aca".

**Example 3:**

    Input: s = "abc"
    Output: false

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters

## Approach

### Two Pointers with One Skip

Use the standard palindrome two-pointer check. When a mismatch is found, try skipping the left character OR the right character — if either remaining substring is a palindrome, return true.

**Key Insight:** In a regular palindrome check, any mismatch means false. Here we get one "free pass" — when characters don't match, we have two options: skip left or skip right. If either option produces a palindrome for the remaining substring, the answer is true.

**Algorithm:**
1. Two pointers: `left = 0`, `right = s.length - 1`
2. Move inward while characters match
3. On mismatch:
   - Check if `s[left+1..right]` is a palindrome (skip left)
   - Check if `s[left..right-1]` is a palindrome (skip right)
   - Return true if either is
4. If no mismatch found, already a palindrome → return true

**Walkthrough:**

    s = "abca"
    left=0, right=3

    s[0]='a' === s[3]='a' ✓ → left=1, right=2
    s[1]='b' !== s[2]='c' ✗ → mismatch!

    Try skip left: s[2..2] = "c" → palindrome ✓
    Try skip right: s[1..1] = "b" → palindrome ✓

    Either works → return true ✓

    s = "abc"
    left=0, right=2

    s[0]='a' !== s[2]='c' ✗ → mismatch!

    Try skip left: s[1..2] = "bc" → not palindrome ✗
    Try skip right: s[0..1] = "ab" → not palindrome ✗

    Neither works → return false ✓

    s = "deeee"
    left=0, right=4

    s[0]='d' !== s[4]='e' ✗ → mismatch!

    Try skip left: s[1..4] = "eeee" → palindrome ✓

    Return true ✓

**Comparison with Valid Palindrome (#125):**
- #125: Any mismatch → return false
- #680: First mismatch → try two options, then decide
- Same two-pointer base, one extra "second chance" layer

**Time Complexity:** O(n) — main check is O(n), the skip check is also O(n) but only happens once  
**Space Complexity:** O(1) — only pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Build on the basic palindrome check — add a "one skip" second chance
- Helper function for "is this substring a palindrome" keeps code clean
- Only need to try skipping at the FIRST mismatch — if both fail, more skips won't help
- This "try both options" pattern appears in many greedy problems
- Asked frequently at Meta