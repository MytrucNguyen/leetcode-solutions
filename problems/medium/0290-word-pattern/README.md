# 290. Word Pattern

**Difficulty:** Easy  
**Topics:** String, Hash Table  
**Link:** [LeetCode Problem](https://leetcode.com/problems/word-pattern/)

## Problem Description

Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `s`.

### Examples

**Example 1:**

    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true
    Explanation: a→dog, b→cat. Consistent mapping.

**Example 2:**

    Input: pattern = "abba", s = "dog cat cat fish"
    Output: false
    Explanation: a maps to "dog" first, but then "fish" at the end.

**Example 3:**

    Input: pattern = "aaaa", s = "dog cat cat dog"
    Output: false
    Explanation: a can't map to both "dog" and "cat".

**Example 4:**

    Input: pattern = "abba", s = "dog dog dog dog"
    Output: false
    Explanation: a and b can't both map to "dog". Must be one-to-one.

### Constraints

- `1 <= pattern.length <= 300`
- `pattern` contains only lower-case English letters
- `1 <= s.length <= 3000`
- `s` contains only lower-case English letters and spaces
- `s` does not contain any leading or trailing spaces
- All the words in `s` are separated by a single space

## Approach

### Two Hash Maps — Bidirectional Mapping

Same technique as Isomorphic Strings (#205). Use two maps to ensure the mapping is one-to-one in both directions: pattern letter → word AND word → pattern letter.

**Key Insight:** One map isn't enough. "abba" with "dog dog dog dog" would pass a single map (a→dog, b→dog both valid individually), but fails because two different letters map to the same word. Two maps catch this.

**Algorithm:**
1. Split `s` into words
2. If pattern length ≠ word count → return false
3. Create two maps: `charToWord` and `wordToChar`
4. For each pattern letter and corresponding word:
   - If letter already maps to a different word → return false
   - If word already maps to a different letter → return false
   - Add both mappings
5. Return true

**Walkthrough:**

    pattern = "abba", s = "dog cat cat dog"
    words = ["dog", "cat", "cat", "dog"]

    i=0: 'a' ↔ "dog"
      charToWord: {a: "dog"}, wordToChar: {"dog": a}

    i=1: 'b' ↔ "cat"
      charToWord: {a: "dog", b: "cat"}, wordToChar: {"dog": a, "cat": b}

    i=2: 'b' ↔ "cat"
      b already maps to "cat", word is "cat" → match ✓

    i=3: 'a' ↔ "dog"
      a already maps to "dog", word is "dog" → match ✓

    Return true ✓

    pattern = "abba", s = "dog dog dog dog"

    i=0: 'a' ↔ "dog"
      charToWord: {a: "dog"}, wordToChar: {"dog": a}

    i=1: 'b' ↔ "dog"
      b is new in charToWord ✓
      BUT "dog" already maps to 'a' in wordToChar, not 'b' → FAIL ✗

    Return false ✓

**Comparison with Isomorphic Strings (#205):**
- #205: character ↔ character mapping
- #290: character ↔ word mapping
- Same two-map pattern, just different types

**Time Complexity:** O(n) where n is the length of s  
**Space Complexity:** O(n) — two maps storing mappings

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same bidirectional mapping pattern as Isomorphic Strings (#205)
- Two maps enforce one-to-one: no two letters map to the same word, no word maps to two letters
- Always check word count matches pattern length first — quick early exit
- Splitting the string into words is the only new step compared to #205