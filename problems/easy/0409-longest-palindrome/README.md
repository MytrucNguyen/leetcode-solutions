# 409. Longest Palindrome

**Difficulty:** Easy  
**Topics:** Hash Table, String, Greedy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-palindrome/)

## Problem Description

Given a string `s` which consists of lowercase or uppercase letters, return the length of the **longest palindrome** that can be built with those letters.

Letters are **case sensitive**, for example, `"Aa"` is not considered a palindrome.

### Examples

**Example 1:**

    Input: s = "abccccdd"
    Output: 7
    Explanation: One palindrome is "dccaccd", length 7.

**Example 2:**

    Input: s = "a"
    Output: 1

### Constraints

- `1 <= s.length <= 2000`
- `s` consists of lowercase and/or uppercase English letters only

## Approach

### Count Frequencies — Even Pairs + One Middle

Palindromes are built from pairs. Every character with an even count fully contributes. Odd count characters contribute `count - 1` (their even portion). If any odd count exists, we can place one character in the middle (+1).

**Key Insight:** A palindrome reads the same forwards and backwards, so characters must appear in pairs (one on each side). The exception: one character can sit in the middle unpaired.

**Algorithm:**

1. Count frequency of each character
2. For each frequency:
    - Add `floor(count / 2) * 2` to length (the even portion)
3. If length < s.length → at least one odd character exists → add 1 for the middle
4. Return length

**Simpler way to think about it:**

    length = 0
    For each count:
      length += count if even
      length += count - 1 if odd
    If any odd existed: length += 1

**Walkthrough:**

    s = "abccccdd"
    Frequencies: a=1, b=1, c=4, d=2

    a: 1 is odd → contribute 0 (1-1)
    b: 1 is odd → contribute 0
    c: 4 is even → contribute 4
    d: 2 is even → contribute 2
    Total so far: 6

    Had odd counts? Yes (a and b) → add 1 for middle
    Total: 7 ✓ (e.g. "dccaccd")

    s = "a"
    Frequencies: a=1

    a: 1 is odd → contribute 0
    Total: 0

    Had odd? Yes → add 1
    Total: 1 ✓

**Time Complexity:** O(n) — count frequencies  
**Space Complexity:** O(1) — at most 52 characters (a-z, A-Z)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Palindromes are built from character pairs
- Even counts fully contribute, odd counts contribute count - 1
- One odd character can go in the middle — at most +1
- Case sensitive: 'A' and 'a' are different characters
- Simple frequency counting with a greedy rule
