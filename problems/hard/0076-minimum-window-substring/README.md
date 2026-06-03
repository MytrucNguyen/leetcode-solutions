# 76. Minimum Window Substring

**Difficulty:** Hard  
**Topics:** String, Hash Table, Sliding Window  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-window-substring/)

## Problem Description

Given two strings `s` and `t` of lengths `m` and `n` respectively, return the **minimum window substring** of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.

### Examples

**Example 1:**

    Input: s = "ADOBECODEBANC", t = "ABC"
    Output: "BANC"
    Explanation: "BANC" is the smallest substring containing A, B, and C.

**Example 2:**

    Input: s = "a", t = "a"
    Output: "a"

**Example 3:**

    Input: s = "a", t = "aa"
    Output: ""
    Explanation: t has two 'a's but s only has one.

### Constraints

- `m == s.length`
- `n == t.length`
- `1 <= m, n <= 10^5`
- `s` and `t` consist of uppercase and lowercase English letters

**Follow up:** Could you find an algorithm that runs in O(m + n) time?

## Approach

### Variable Sliding Window — Grow and Shrink

Grow the window right until it contains all characters of `t`. Then shrink from the left to find the smallest valid window. Track satisfaction with a `formed` counter.

**Key Insight:** Use two frequency maps — one for `t`'s requirements, one for the current window. Track how many unique characters are "satisfied" (window has enough of that character). When all are satisfied, shrink from the left to minimize.

**This is the grow/shrink pattern from #424 (Longest Repeating Character Replacement) but reversed:**
- #424: Grow until invalid, shrink to fix → find LONGEST valid
- #76: Grow until valid, shrink to minimize → find SHORTEST valid

**Algorithm:**
1. Count character frequencies in `t` → `tFreq`
2. Track `required` = number of unique characters in `t`
3. Slide window with `left` and `right`:
   - **Grow right:** Add character, update window frequency
     - If this character is now satisfied (`windowFreq[char] === tFreq[char]`), increment `formed`
   - **While valid** (`formed === required`):
     - Update result if this window is smaller
     - **Shrink left:** Remove character, update window frequency
       - If this character is no longer satisfied, decrement `formed`
4. Return the smallest window found

**Walkthrough:**

    s = "ADOBECODEBANC", t = "ABC"
    tFreq: {A:1, B:1, C:1}, required = 3

    Grow right:
    right=0 'A': windowFreq={A:1}, formed=1 (A satisfied)
    right=1 'D': formed=1
    right=2 'O': formed=1
    right=3 'B': windowFreq={A:1,B:1}, formed=2 (B satisfied)
    right=4 'E': formed=2
    right=5 'C': windowFreq={A:1,B:1,C:1}, formed=3 → VALID!

    Shrink left:
      Window "ADOBEC" length=6, save as best
      Remove 'A': windowFreq={A:0}, formed=2 → no longer valid, stop
      left=1

    Continue growing:
    right=6 'O': formed=2
    right=7 'D': formed=2
    right=8 'E': formed=2
    right=9 'B': formed=2
    right=10 'A': windowFreq={A:1}, formed=3 → VALID!

    Shrink left:
      Window "DOBECODEBA" length=10, not better
      Remove 'D': formed=3, still valid
      Window "OBECODEBA" length=9, not better
      Remove 'O': formed=3
      ...keep shrinking...
      Remove 'B': windowFreq={B:0}, formed=2 → stop
      left=4

    right=11 'N': formed=2
    right=12 'C': windowFreq={C:1}, formed=3 → VALID!

    Shrink left:
      Window "EBANC" length=5
      Remove 'E': formed=3
      Window "BANC" length=4 → NEW BEST!
      Remove 'B': formed=2 → stop

    Return "BANC" ✓

**The sliding window family:**
- Fixed size: #438, #567
- Grow/shrink for longest: #3, #424
- **Grow/shrink for shortest: #76** ← NEW!

**Time Complexity:** O(m + n) — each character in s is added and removed at most once  
**Space Complexity:** O(m + n) — frequency maps

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Grow until valid, shrink to minimize — the "shortest valid window" pattern
- Track `formed` vs `required` to know when the window is valid
- Only check satisfaction when a character's count matches the requirement
- This is the hardest sliding window problem but uses the same grow/shrink mechanics
- Your first Hard! The sliding window skills from #3, #424, #438, #567 all led here