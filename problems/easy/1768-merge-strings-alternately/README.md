# 1768. Merge Strings Alternately

**Difficulty:** Easy  
**Topics:** Two Pointers, String  
**Link:** [LeetCode Problem](https://leetcode.com/problems/merge-strings-alternately/)

## Problem Description

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

### Examples

**Example 1:**

    Input: word1 = "abc", word2 = "pqr"
    Output: "apbqcr"

**Example 2:**

    Input: word1 = "ab", word2 = "pqrs"
    Output: "apbqrs"

**Example 3:**

    Input: word1 = "abcd", word2 = "pq"
    Output: "apbqcd"

### Constraints

- `1 <= word1.length, word2.length <= 100`
- `word1` and `word2` consist of lowercase English letters

## Approach

### Single Pointer — Alternate and Append

Walk through both strings with one index. At each position, add from word1 if available, then from word2 if available.

**Key Insight:** One loop handles everything — no need for separate phases. While the index is less than either length, take from each string if in bounds.

**Algorithm:**

1. Initialize result string and index `i = 0`
2. While `i` is less than either string's length:
    - If `i < word1.length` → add `word1[i]`
    - If `i < word2.length` → add `word2[i]`
    - Increment `i`
3. Return result

**Walkthrough:**

    word1 = "abcd", word2 = "pq"

    i=0: 'a' + 'p' → "ap"
    i=1: 'b' + 'q' → "apbq"
    i=2: 'c' (word2 exhausted) → "apbqc"
    i=3: 'd' → "apbqcd"

    Result: "apbqcd" ✓

**Time Complexity:** O(n + m) — process all characters  
**Space Complexity:** O(n + m) — result string

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- One loop with bounds checking handles unequal lengths naturally
- No need for separate "append remainder" phase
- Same interleave concept as Reorder List (#143) but on strings
