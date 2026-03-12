# 392. Is Subsequence

**Difficulty:** Easy  
**Topics:** String, Two Pointers, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/is-subsequence/)

## Problem Description

Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative order of the remaining characters.

### Examples

**Example 1:**
```
Input: s = "abc", t = "ahbgdc"
Output: true
Explanation: "abc" appears in order within "ahbgdc" (a_b__c).
```

**Example 2:**
```
Input: s = "axc", t = "ahbgdc"
Output: false
Explanation: There is no 'x' in t, so "axc" can't be a subsequence.
```

### Constraints

- `0 <= s.length <= 100`
- `0 <= t.length <= 10^4`
- `s` and `t` consist only of lowercase English letters

## Approach

### Two Pointers

Use one pointer for `s` and one for `t`. Walk through `t` and whenever a character matches the current character in `s`, advance the `s` pointer. If the `s` pointer reaches the end, all characters were found in order.

**Key Insight:** We don't need to find the characters consecutively — just in order. So we scan through `t` and greedily match characters from `s` as we find them.

**Algorithm:**
1. Set `sPointer = 0` and `tPointer = 0`
2. Walk through `t`:
   - If `s[sPointer] === t[tPointer]` → match found, advance `sPointer`
   - Always advance `tPointer`
3. If `sPointer` reached the end of `s`, all characters matched → return true
4. Otherwise return false

**Walkthrough:**
```
s = "abc", t = "ahbgdc"
     ↑          ↑
s[0]='a' === t[0]='a' → match! sPointer=1
     ↑           ↑
s[1]='b' !== t[1]='h' → no match, keep scanning
      ↑           ↑
s[1]='b' === t[2]='b' → match! sPointer=2
       ↑            ↑
s[2]='c' !== t[3]='g' → keep scanning
       ↑             ↑
s[2]='c' !== t[4]='d' → keep scanning
       ↑              ↑
s[2]='c' === t[5]='c' → match! sPointer=3

sPointer (3) === s.length (3) → return true ✓
```
```
s = "axc", t = "ahbgdc"

s[0]='a' === t[0]='a' → match! sPointer=1
s[1]='x' !== t[1]='h' → skip
s[1]='x' !== t[2]='b' → skip
s[1]='x' !== t[3]='g' → skip
s[1]='x' !== t[4]='d' → skip
s[1]='x' !== t[5]='c' → skip

t is exhausted, sPointer (1) !== s.length (3) → return false ✓
```

**Time Complexity:** O(n) where n is the length of t — single pass  
**Space Complexity:** O(1) — only two pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Two pointers moving at different speeds is ideal for subsequence problems
- Greedy matching works because we want the earliest possible match for each character
- An empty string is a subsequence of any string
- This pattern extends to more complex problems like edit distance and longest common subsequence