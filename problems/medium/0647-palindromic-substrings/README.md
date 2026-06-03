# 647. Palindromic Substrings

**Difficulty:** Medium  
**Topics:** String, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/palindromic-substrings/)

## Problem Description

Given a string `s`, return the number of **palindromic substrings** in it.

A string is a palindrome when it reads the same backward as forward. A substring is a contiguous sequence of characters within the string.

### Examples

**Example 1:**

Input: s = "abc"
Output: 3
Explanation: Three palindromic substrings: "a", "b", "c".

**Example 2:**
Input: s = "aaa"
Output: 6
Explanation: Six palindromic substrings: "a", "a", "a", "aa", "aa", "aaa".

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters

## Approach

### Expand Around Center

Every palindrome has a center. Try every possible center and expand outward as long as the characters match. Count each successful expansion.

**Key Insight:** There are `2n - 1` possible centers in a string of length `n`. Each character is an odd-length center, and each gap between characters is an even-length center. Expand from each center and count palindromes found.

**Algorithm:**
1. For each possible center (2n - 1 total):
   - Odd-length: center at each character `i` → expand with `left = i, right = i`
   - Even-length: center between `i` and `i+1` → expand with `left = i, right = i + 1`
2. For each center, expand outward while `s[left] === s[right]`
3. Each successful expansion is one more palindrome → increment count
4. Return total count

**Walkthrough:**
s = "aaa"
Odd centers:
Center 'a' (index 0): expand
"a" ✓ count=1
left=-1, stop
Center 'a' (index 1): expand
"a" ✓ count=2
"aaa" ✓ count=3
left=-1, stop
Center 'a' (index 2): expand
"a" ✓ count=4
left=1, right=3 → out of bounds, stop
Even centers:
Between index 0 and 1:
"aa" ✓ count=5
left=-1, stop
Between index 1 and 2:
"aa" ✓ count=6
left=0, right=3 → out of bounds, stop
Total = 6 ✓

s = "abc"
Odd centers:
'a': "a" ✓ count=1
'b': "b" ✓ count=2, "abc" ✗
'c': "c" ✓ count=3
Even centers:
"ab" ✗
"bc" ✗
Total = 3 ✓

**Comparison with Longest Palindromic Substring (#5):**
- #5: Same expand-from-center technique, but tracks the longest
- #647: Same technique, but counts all palindromes
- Same core algorithm, different thing to track

**Time Complexity:** O(n²) — n centers, each can expand up to n steps  
**Space Complexity:** O(1) — only a counter variable

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Expand around center is the go-to technique for palindrome substring problems
- 2n - 1 centers: n odd (single character) + n-1 even (between characters)
- Each expansion that matches is one more palindrome
- Same technique as Longest Palindromic Substring (#5) — just count instead of track longest
- A helper function for expansion keeps the code clean and DRY
