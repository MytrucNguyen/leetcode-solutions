# 557. Reverse Words in a String III

**Difficulty:** Easy  
**Topics:** Two Pointers, String  
**Link:** [LeetCode Problem](https://leetcode.com/problems/reverse-words-in-a-string-iii/)

## Problem Description

Given a string `s`, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

### Examples

**Example 1:**

    Input: s = "Let's take LeetCode contest"
    Output: "s'teL ekat edoCteeL tsetnoc"

**Example 2:**

    Input: s = "Mr Ding"
    Output: "rM gniD"

### Constraints

- `1 <= s.length <= 5 * 10^4`
- `s` contains printable ASCII characters
- `s` does not contain any leading or trailing spaces
- There is at least one word in `s`
- All words in `s` are separated by a single space

## Approach

### Split, Reverse Each, Join

Split into words, reverse each word individually, join back with spaces.

**Key Insight:** Unlike Reverse Words (#151) which reverses word ORDER, this reverses the CHARACTERS within each word. Split handles the word boundaries, then just reverse each word.

**Algorithm:**

1. Split the string by spaces
2. Reverse each word
3. Join with spaces

**Walkthrough:**

    s = "Let's take LeetCode contest"

    Split: ["Let's", "take", "LeetCode", "contest"]
    Reverse each: ["s'teL", "ekat", "edoCteeL", "tsetnoc"]
    Join: "s'teL ekat edoCteeL tsetnoc" ✓

**Comparison with Reverse Words (#151):**

- #151: Reverse word ORDER → "blue is sky the" → "the sky is blue"
- #557: Reverse each word's CHARACTERS → "Let's" → "s'teL"

**Time Complexity:** O(n) — process each character once  
**Space Complexity:** O(n) — store the split words

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Split, transform each, join — a clean string processing pattern
- Reverse Words (#151) reverses order, this (#557) reverses characters within each word
- No edge cases with extra spaces — problem guarantees single spaces, no leading/trailing
