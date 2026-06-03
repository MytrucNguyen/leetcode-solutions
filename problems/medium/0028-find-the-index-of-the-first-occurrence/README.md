# 28. Find the Index of the First Occurrence in a String

**Difficulty:** Easy  
**Topics:** String, Two Pointers, String Matching  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

## Problem Description

Given two strings `haystack` and `needle`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

### Examples

**Example 1:**

    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6. First occurrence is 0.

**Example 2:**

    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
    Explanation: "leeto" does not occur in "leetcode".

### Constraints

- `1 <= haystack.length, needle.length <= 10^4`
- `haystack` and `needle` consist of only lowercase English characters

## Approach

### Sliding Window Comparison

Slide a window of needle's length across haystack. At each position, check if the substring matches needle.

**Key Insight:** We only need to check positions 0 through `haystack.length - needle.length`. At each position, compare the substring of needle's length to needle. First match wins.

**Algorithm:**
1. If needle is longer than haystack, return -1
2. For each starting position from 0 to `haystack.length - needle.length`:
   - Compare `haystack.substring(i, i + needle.length)` to needle
   - If match → return i
3. Return -1

**Walkthrough:**

    haystack = "sadbutsad", needle = "sad"

    i=0: "sad" === "sad" → match! return 0 ✓

    haystack = "leetcode", needle = "leeto"

    i=0: "leetc" !== "leeto" → skip
    i=1: "eetco" !== "leeto" → skip
    i=2: "etcod" !== "leeto" → skip
    i=3: "tcode" !== "leeto" → skip
    i=4: "code" → too short, stop

    Return -1 ✓

**Manual character-by-character approach (no substring):**
For each starting position, compare character by character. Break early on first mismatch. This avoids creating new strings.

**Time Complexity:** O(n × m) where n is haystack length and m is needle length  
**Space Complexity:** O(1) — only index variables (O(m) if using substring)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Only check positions 0 to `haystack.length - needle.length` — anything further can't fit
- Early break on character mismatch avoids unnecessary comparisons
- This is essentially implementing indexOf/strStr from scratch
- Advanced: KMP algorithm solves this in O(n + m) but the simple approach is fine for interviews