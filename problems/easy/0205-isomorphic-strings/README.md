# 205. Isomorphic Strings

**Difficulty:** Easy  
**Topics:** String, Hash Table  
**Link:** [LeetCode Problem](https://leetcode.com/problems/isomorphic-strings/)

## Problem Description

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

### Examples

**Example 1:**
```
Input: s = "egg", t = "add"
Output: true
Explanation: e→a, g→d. Pattern matches.
```

**Example 2:**
```
Input: s = "foo", t = "bar"
Output: false
Explanation: o maps to both 'a' and 'r'. Invalid.
```

**Example 3:**
```
Input: s = "paper", t = "title"
Output: true
Explanation: p→t, a→i, p→t, e→l, r→e. Consistent mapping.
```

### Constraints

- `1 <= s.length <= 5 * 10^4`
- `t.length == s.length`
- `s` and `t` consist of any valid ASCII character

## Approach

### Two Hash Maps

Use two maps — one for `s→t` mapping and one for `t→s` mapping. This ensures the mapping is one-to-one in both directions.

**Key Insight:** A single map only checks that each character in `s` maps to one character in `t`. But we also need to ensure no two characters in `s` map to the same character in `t`. Two maps enforce both directions.

**Why one map isn't enough:**
```
s = "badc", t = "baba"
One map (s→t): b→b, a→a, d→b, c→a
  d→b fails because b already maps to b? No — d is a NEW key, so it passes!
  But b and d both map to 'b' — that's invalid!

Two maps catch this:
  s→t: b→b ✓    t→s: b→b ✓
  s→t: a→a ✓    t→s: a→a ✓
  s→t: d→b (new) t→s: b→d? b already maps to b, not d → FAIL ✓
```

**Algorithm:**
1. Create two maps: `sToT` and `tToS`
2. Loop through both strings simultaneously:
   - If `s[i]` is in `sToT` and it doesn't map to `t[i]` → return false
   - If `t[i]` is in `tToS` and it doesn't map to `s[i]` → return false
   - Otherwise, add both mappings
3. Return true

**Walkthrough:**
```
s = "egg", t = "add"

i=0: e→a (new), a→e (new)
  sToT: {e: a}, tToS: {a: e}

i=1: g→d (new), d→g (new)
  sToT: {e: a, g: d}, tToS: {a: e, d: g}

i=2: g in sToT, maps to d, t[2] is d → match ✓
     d in tToS, maps to g, s[2] is g → match ✓

Return true ✓
```
```
s = "foo", t = "bar"

i=0: f→b (new), b→f (new)
  sToT: {f: b}, tToS: {b: f}

i=1: o→a (new), a→o (new)
  sToT: {f: b, o: a}, tToS: {b: f, a: o}

i=2: o in sToT, maps to a, but t[2] is r → a !== r → return false ✓
```

**Time Complexity:** O(n) - Single pass through both strings  
**Space Complexity:** O(1) - At most 256 ASCII characters in the maps

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- One-to-one mappings require checking both directions
- Two hash maps is a clean way to enforce bidirectional mapping
- This same pattern applies to Word Pattern (#290) and other mapping problems
- A single map only checks one direction and can miss invalid reverse mappings