# 14. Longest Common Prefix

**Difficulty:** Easy  
**Topics:** String, Trie  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-common-prefix/)

## Problem Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

### Examples

**Example 1:**
```
Input: strs = ["flower", "flow", "flight"]
Output: "fl"
```

**Example 2:**
```
Input: strs = ["dog", "racecar", "car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

### Constraints

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters.

## Approach

### Vertical Scanning (Simple)
Compare characters at each position across all strings, stop when they differ.
- **Time Complexity:** O(n * m) where n is number of strings and m is shortest string length
- **Space Complexity:** O(1)

### Prefix Shrinking (Optimal)
Start with the first string as the prefix, then shrink it by comparing against each subsequent string.

**Key Insight:** Start with the longest possible prefix (the entire first string) and keep trimming from the end until it matches the start of the next string. Repeat for every string.

**Algorithm:**
1. Set `prefix` to the first string
2. For each remaining string:
   - While the string doesn't start with `prefix`:
     - Remove the last character from `prefix`
   - If `prefix` is empty, return `""`
3. Return `prefix`

**Walkthrough:**
```
strs = ["flower", "flow", "flight"]

prefix = "flower"

Compare with "flow":
  "flow".startsWith("flower")? No → shrink
  "flow".startsWith("flowe")? No → shrink
  "flow".startsWith("flow")? Yes!
  prefix = "flow"

Compare with "flight":
  "flight".startsWith("flow")? No → shrink
  "flight".startsWith("flo")? No → shrink
  "flight".startsWith("fl")? Yes!
  prefix = "fl"

Return "fl" ✓
```
```
strs = ["dog", "racecar", "car"]

prefix = "dog"

Compare with "racecar":
  "racecar".startsWith("dog")? No → shrink
  "racecar".startsWith("do")? No → shrink
  "racecar".startsWith("d")? No → shrink
  prefix is empty → return "" ✓
```

**Time Complexity:** O(n * m) - n strings, each compared up to m characters  
**Space Complexity:** O(1) - Only modifying the prefix string

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Starting with the longest possible answer and shrinking is a useful problem-solving pattern
- `startsWith` makes the comparison clean and readable
- Early exit when prefix becomes empty avoids unnecessary work
- This "reduce" pattern — taking a result and refining it against each element — is common in many problems