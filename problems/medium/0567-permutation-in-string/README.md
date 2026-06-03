# 567. Permutation in String

**Difficulty:** Medium  
**Topics:** String, Hash Table, Two Pointers, Sliding Window  
**Link:** [LeetCode Problem](https://leetcode.com/problems/permutation-in-string/)

## Problem Description

Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.

In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.

### Examples

**Example 1:**

    Input: s1 = "ab", s2 = "eidbaooo"
    Output: true
    Explanation: s2 contains "ba" which is a permutation of "ab".

**Example 2:**

    Input: s1 = "ab", s2 = "eidboaoo"
    Output: false

### Constraints

- `1 <= s1.length, s2.length <= 10^4`
- `s1` and `s2` consist of lowercase English letters

## Approach

### Sliding Window + Frequency Match

Same technique as Find All Anagrams (#438) but return true/false instead of collecting all positions. Slide a window of size `s1.length` across `s2` and check if frequencies match.

**Key Insight:** A permutation is just an anagram. So "does s2 contain a permutation of s1?" is the same as "does s2 contain an anagram of s1?". Use the same sliding window with a `matches` counter from #438.

**Algorithm:**
1. Count character frequencies in `s1`
2. Build initial window (first `s1.length` characters of `s2`)
3. Count matches — characters where window frequency equals `s1` frequency
4. If matches === 26, return true
5. Slide the window:
   - Add new character from right, remove character from left
   - Update matches for both
   - If matches === 26, return true
6. Return false

**Walkthrough:**

    s1 = "ab", s2 = "eidbaooo"
    s1Freq: {a:1, b:1}

    Initial window "ei":
      windowFreq: {e:1, i:1}
      a: 0 vs 1 no match, b: 0 vs 1 no match
      matches = 24 (24 letters match at 0/0)

    Slide → window "id":
      Remove 'e', add 'd'
      matches = 24

    Slide → window "db":
      Remove 'i', add 'b'
      b: window=1, s1=1 → match! matches = 25

    Slide → window "ba":
      Remove 'd', add 'a'
      a: window=1, s1=1 → match! matches = 26
      → return true ✓

**Comparison with Find All Anagrams (#438):**
- #438: Collect ALL positions where anagram starts → return array
- #567: Just check if ANY anagram exists → return boolean
- Same algorithm, different return type

**Time Complexity:** O(n) where n is length of s2  
**Space Complexity:** O(1) — at most 26 characters

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Permutation in string = anagram substring = sliding window frequency match
- Same technique as Find All Anagrams (#438) — just return true instead of collecting positions
- The `matches` counter makes each slide O(1) instead of comparing full frequency maps
- Recognizing that "permutation" = "anagram" is the key insight
- Sliding window + frequency is a powerful combo for substring problems