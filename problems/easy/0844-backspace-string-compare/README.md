# 844. Backspace String Compare

**Difficulty:** Easy  
**Topics:** Two Pointers, String, Stack, Simulation  
**Link:** [LeetCode Problem](https://leetcode.com/problems/backspace-string-compare/)

## Problem Description

Given two strings `s` and `t`, return `true` if they are equal when both are typed into empty text editors. `#` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

### Examples

**Example 1:**

    Input: s = "ab#c", t = "ad#c"
    Output: true
    Explanation: Both become "ac".

**Example 2:**

    Input: s = "ab##", t = "c#d#"
    Output: true
    Explanation: Both become "".

**Example 3:**

    Input: s = "a#c", t = "b"
    Output: false
    Explanation: s becomes "c", t becomes "b".

### Constraints

- `1 <= s.length, t.length <= 200`
- `s` and `t` only contain lowercase letters and `#` characters

**Follow up:** Can you solve it in O(n) time and O(1) space?

## Approach

### Two Pointers from the End — O(1) Space

Walk both strings from the end simultaneously. For each string, skip characters that would be backspaced. Compare the next valid characters.

**Key Insight:** Walking backwards lets us handle backspaces naturally. When we see `#`, count how many characters to skip. When the skip count is 0, we have a valid character to compare.

**Why backwards?** Backspace deletes what came BEFORE it. Walking forward, we don't know if a character will be deleted later. Walking backward, we see the `#` first and know to skip.

**Algorithm:**

1. Start `i` at end of `s`, `j` at end of `t`
2. For each string, find the next valid character:
    - Count `#`s as skips
    - Skip characters while skip count > 0
3. Compare the valid characters:
    - Both valid and equal → continue
    - One valid, one exhausted → not equal
    - Both exhausted → equal
4. Return result

**Walkthrough:**

    s = "ab#c", t = "ad#c"
    i=3, j=3

    Find valid in s: i=3 → 'c', no # → valid char 'c'
    Find valid in t: j=3 → 'c', no # → valid char 'c'
    'c' === 'c' ✓ → i=2, j=2

    Find valid in s: i=2 → '#', skip=1, i=1 → 'b', skip>0 so skip, i=0 → 'a', valid
    Find valid in t: j=2 → '#', skip=1, j=1 → 'd', skip>0 so skip, j=0 → 'a', valid
    'a' === 'a' ✓ → i=-1, j=-1

    Both exhausted → return true ✓

    s = "a#c", t = "b"
    i=2, j=0

    Find valid in s: i=2 → 'c', valid
    Find valid in t: j=0 → 'b', valid
    'c' !== 'b' → return false ✓

**Time Complexity:** O(n + m) — single pass through both strings  
**Space Complexity:** O(1) — only pointers and counters

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Walking backwards handles backspaces naturally — see the # before the character it deletes
- Count skips instead of building a new string — O(1) space
- The "find next valid character" helper keeps the comparison logic clean
- Stack approach (O(n) space) is simpler but the two-pointer approach is the follow-up
