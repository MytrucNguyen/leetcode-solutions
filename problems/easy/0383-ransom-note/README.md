# 383. Ransom Note

**Difficulty:** Easy  
**Topics:** String, Hash Table, Counting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/ransom-note/)

## Problem Description

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.

Each letter in `magazine` can only be used once.

### Examples

**Example 1:**
```
Input: ransomNote = "a", magazine = "b"
Output: false
```

**Example 2:**
```
Input: ransomNote = "aa", magazine = "ab"
Output: false
Explanation: Magazine only has one 'a', but ransom note needs two.
```

**Example 3:**
```
Input: ransomNote = "aa", magazine = "aab"
Output: true
Explanation: Magazine has two 'a's, enough for the ransom note.
```

### Constraints

- `1 <= ransomNote.length, magazine.length <= 10^5`
- `ransomNote` and `magazine` consist of lowercase English letters

## Approach

### Frequency Counting

Count the frequency of each character in the magazine, then check if the magazine has enough of each character needed by the ransom note.

**Key Insight:** This is similar to Valid Anagram (#242) but instead of checking for exact match, we check if magazine's counts are **greater than or equal to** ransom note's counts. The ransom note characters must be a subset of the magazine characters.

**Algorithm:**
1. Count the frequency of each character in the magazine
2. Loop through the ransom note:
   - For each character, check if it exists in the magazine counts
   - If not (count is 0 or missing) → return false
   - Decrement the count
3. If we get through the whole ransom note, return true

**Walkthrough:**
```
ransomNote = "aa", magazine = "aab"

Count magazine: {a: 2, b: 1}

Check ransom note:
  'a' → count is 2, decrement → {a: 1, b: 1}
  'a' → count is 1, decrement → {a: 0, b: 1}

All characters found → return true ✓
```
```
ransomNote = "aa", magazine = "ab"

Count magazine: {a: 1, b: 1}

Check ransom note:
  'a' → count is 1, decrement → {a: 0, b: 1}
  'a' → count is 0 → return false ✓
```

**Comparison with Valid Anagram (#242):**
- #242: Both strings must have exact same character counts
- #383: Magazine counts must be >= ransom note counts (subset check)

**Time Complexity:** O(m + n) where m is magazine length and n is ransom note length  
**Space Complexity:** O(1) - At most 26 lowercase letters in the map

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Frequency counting is the go-to technique for character availability problems
- Decrementing from the source (magazine) as you consume characters is clean and efficient
- This "can I build X from Y" pattern appears in many problems (word construction, tile games, etc.)
- Subset checking vs exact matching is an important distinction