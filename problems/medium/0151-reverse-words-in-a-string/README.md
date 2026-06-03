# 151. Reverse Words in a String

**Difficulty:** Medium  
**Topics:** String, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/reverse-words-in-a-string/)

## Problem Description

Given an input string `s`, reverse the order of the **words**.

A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

### Examples

**Example 1:**

    Input: s = "the sky is blue"
    Output: "blue is sky the"

**Example 2:**

    Input: s = "  hello world  "
    Output: "world hello"
    Explanation: Reversed with no leading/trailing spaces.

**Example 3:**

    Input: s = "a good   example"
    Output: "example good a"
    Explanation: Multiple spaces reduced to single space.

### Constraints

- `1 <= s.length <= 10^4`
- `s` contains English letters (upper-case and lower-case), digits, and spaces `' '`
- There is at least one word in `s`

**Follow up:** Could you solve it in-place with O(1) extra space? (In languages with mutable strings)

## Approach

### Split, Reverse, Join

Split the string into words (handling multiple spaces), reverse the array of words, then join with a single space.

**Key Insight:** The built-in split/trim functions handle the messy parts (extra spaces, leading/trailing spaces). Split by spaces, filter out empty strings from multiple spaces, reverse, and join.

**Algorithm:**
1. Trim the string (remove leading/trailing spaces)
2. Split by spaces
3. Filter out empty strings (from multiple spaces)
4. Reverse the array of words
5. Join with a single space

**Walkthrough:**

    s = "  hello world  "

    Step 1 — Trim: "hello world"
    Step 2 — Split by space: ["hello", "world"]
    Step 3 — Reverse: ["world", "hello"]
    Step 4 — Join: "world hello" ✓

    s = "a good   example"

    Step 1 — Trim: "a good   example"
    Step 2 — Split by spaces: ["a", "good", "", "", "example"]
    Step 3 — Filter empty: ["a", "good", "example"]
    Step 4 — Reverse: ["example", "good", "a"]
    Step 5 — Join: "example good a" ✓

### In-Place Approach (Follow-up)

For languages with mutable strings, you can solve with O(1) space using the triple reverse trick from Rotate Array (#189):
1. Reverse the entire string
2. Reverse each word individually
3. Clean up extra spaces

**Time Complexity:** O(n) - Processing each character once  
**Space Complexity:** O(n) - Storing the split words

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Split + filter + reverse + join is a clean one-liner approach
- Handling multiple spaces and leading/trailing spaces is the main challenge
- The in-place approach uses the same triple reverse trick from Rotate Array (#189)
- Regex split with `\s+` handles multiple spaces elegantly
- String manipulation problems often have clean built-in solutions AND tricky in-place ones