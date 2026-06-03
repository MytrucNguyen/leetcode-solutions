# 438. Find All Anagrams in a String

**Difficulty:** Medium  
**Topics:** String, Hash Table, Sliding Window  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

## Problem Description

Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`. You may return the answer in any order.

An **anagram** is a word formed by rearranging the letters of a different word, using all the original letters exactly once.

### Examples

**Example 1:**
```
Input: s = "cbaebabacd", p = "abc"
Output: [0, 6]
Explanation:
  Index 0: "cba" is an anagram of "abc"
  Index 6: "bac" is an anagram of "abc"
```

**Example 2:**
```
Input: s = "abab", p = "ab"
Output: [0, 1, 2]
Explanation:
  Index 0: "ab" is an anagram of "ab"
  Index 1: "ba" is an anagram of "ab"
  Index 2: "ab" is an anagram of "ab"
```

### Constraints

- `1 <= s.length, p.length <= 3 * 10^4`
- `s` and `p` consist of lowercase English letters

## Approach

### Sliding Window + Frequency Match

Slide a window of size `p.length` across `s`. Track how many characters have matching frequencies between the window and `p`. When all characters match, we found an anagram.

**Key Insight:** Instead of comparing full frequency maps each time (O(26) per window), track a `matches` counter. When a character's frequency in the window equals its frequency in `p`, that's a match. When all 26 characters match, the window is an anagram.

**Algorithm:**
1. Count character frequencies in `p`
2. Build the initial window (first `p.length` characters of `s`)
3. Count matches — characters where window frequency equals `p` frequency
4. Slide the window one character at a time:
   - Add the new character entering from the right
   - Remove the character leaving from the left
   - Update matches for both characters
   - If matches === 26, record the start index
5. Return all recorded indices

**Walkthrough:**
```
s = "cbaebabacd", p = "abc"
pFreq: {a:1, b:1, c:1}, all others: 0

Initial window "cba":
  windowFreq: {c:1, b:1, a:1}
  All 26 chars match → matches=26 → record index 0!

Slide right, add 'e', remove 'c':
  Window "bae": windowFreq: {b:1, a:1, e:1}
  c dropped (was match, now window has 0 but p has 1 → unmatch)
  e added (was match at 0/0, now window has 1 but p has 0 → unmatch)
  matches=24 → not anagram

...continue sliding...

Window at index 6 "bac":
  windowFreq: {b:1, a:1, c:1}
  matches=26 → record index 6!

Result: [0, 6] ✓
```

**Comparison with Valid Anagram (#242):**
- #242: Compare two strings once → one frequency check
- #438: Slide a window and check at every position → sliding window + incremental updates

**Time Complexity:** O(n) where n is length of s — each character is added and removed once  
**Space Complexity:** O(1) — at most 26 characters in the frequency maps

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sliding window avoids recounting from scratch at every position
- Tracking a `matches` counter makes each slide O(1) instead of O(26)
- The "add right, remove left" pattern is the core of all sliding window problems
- Builds directly on Valid Anagram (#242) with a sliding window layer
- This same technique applies to Minimum Window Substring and Permutation in String