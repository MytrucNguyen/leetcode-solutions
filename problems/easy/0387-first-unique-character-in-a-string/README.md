# 387. First Unique Character in a String

**Difficulty:** Easy  
**Topics:** String, Hash Table, Queue, Counting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/first-unique-character-in-a-string/)

## Problem Description

Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.

### Examples

**Example 1:**
```
Input: s = "leetcode"
Output: 0
Explanation: 'l' appears once and is the first character.
```

**Example 2:**
```
Input: s = "loveleetcode"
Output: 2
Explanation: 'v' appears once, but 'l' appears twice. 'v' is at index 2.
```

**Example 3:**
```
Input: s = "aabb"
Output: -1
Explanation: No unique characters.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists of only lowercase English letters.

## Approach

### Two Pass with Frequency Map

Count the frequency of every character first, then find the first character with a count of 1.

**Key Insight:** We need two passes because we can't know if a character is unique until we've seen the entire string. The first pass counts, the second pass finds the earliest unique character.

**Algorithm:**
1. Pass 1: Loop through the string, count frequency of each character in a hash map
2. Pass 2: Loop through the string again, return the index of the first character with frequency 1
3. If no unique character found, return -1

**Walkthrough:**
```
s = "loveleetcode"

Pass 1 — Count frequencies:
l: 2, o: 2, v: 1, e: 4, t: 1, c: 1, d: 1

Pass 2 — Find first unique:
index 0: 'l' → count 2, skip
index 1: 'o' → count 2, skip
index 2: 'v' → count 1, found it! return 2 ✓
```
```
s = "aabb"

Pass 1 — Count frequencies:
a: 2, b: 2

Pass 2 — Find first unique:
index 0: 'a' → count 2, skip
index 1: 'a' → count 2, skip
index 2: 'b' → count 2, skip
index 3: 'b' → count 2, skip
No unique found → return -1 ✓
```

**Time Complexity:** O(n) - Two passes through the string  
**Space Complexity:** O(1) - At most 26 lowercase letters in the map

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Frequency counting with a hash map is a fundamental string technique
- Two-pass approach: first count, then query — a common pattern
- Space is O(1) since the alphabet is fixed (26 letters)
- Builds on the same counting pattern used in Valid Anagram (#242)