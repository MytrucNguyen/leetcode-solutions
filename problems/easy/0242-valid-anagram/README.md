# 242. Valid Anagram

**Difficulty:** Easy  
**Topics:** Hash Table, String, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-anagram/)

## Problem Description

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Examples

**Example 1:**
```
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**
```
Input: s = "rat", t = "car"
Output: false
```

### Constraints

- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters.

**Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

## Understanding Anagrams

**Anagrams** have the exact same letters in different arrangements.

**Examples:**
```
"anagram" and "nagaram"
- Both have: 3 a's, 1 n, 1 g, 1 r, 1 m
- Same letters, different order → Anagrams ✓

"rat" and "car"
- "rat": 1 r, 1 a, 1 t
- "car": 1 c, 1 a, 1 r
- Different letters → Not anagrams ✗
```

**Key insight:** If two words are anagrams, sorting them produces identical strings!
```
"anagram" → sort → "aaagmnr"
"nagaram" → sort → "aaagmnr"
Equal? YES → Anagrams!

"rat" → sort → "art"
"car" → sort → "acr"
Equal? NO → Not anagrams!
```

## Approach

### Sort and Compare

The simplest approach: sort both strings and check if they're equal.

**Algorithm:**

1. **Quick length check**
   - If lengths differ, return false immediately
   - Anagrams must have the same length

2. **Sort both strings**
   - Convert to arrays, sort, join back to strings

3. **Compare sorted strings**
   - If equal → anagrams (return true)
   - If different → not anagrams (return false)

**Example Walkthrough for s = "anagram", t = "nagaram":**
```
Step 1: Check lengths
s.length = 7
t.length = 7
Same length ✓ Continue

Step 2: Sort s
"anagram".split('') → ['a','n','a','g','r','a','m']
            .sort() → ['a','a','a','g','m','n','r']
            .join('') → "aaagmnr"

Step 3: Sort t
"nagaram".split('') → ['n','a','g','a','r','a','m']
            .sort() → ['a','a','a','g','m','n','r']
            .join('') → "aaagmnr"

Step 4: Compare
"aaagmnr" === "aaagmnr" → TRUE
Return: true
```

**Example Walkthrough for s = "rat", t = "car":**
```
Step 1: Check lengths
s.length = 3
t.length = 3
Same length ✓ Continue

Step 2: Sort s
"rat" → "art"

Step 3: Sort t
"car" → "acr"

Step 4: Compare
"art" === "acr" → FALSE
Return: false
```

**Edge Cases:**
- Different lengths: `"a"` and `"ab"` → false
- Same string: `"abc"` and `"abc"` → true (technically anagrams)
- Empty strings: `""` and `""` → true
- Single character: `"a"` and `"a"` → true

**Time Complexity:** O(n log n) - Dominated by sorting  
**Space Complexity:** O(n) - For creating sorted arrays

**Alternative Approach (mentioned in follow-up):**
Use a hash map to count character frequencies - O(n) time but more code. Sorting is simpler and sufficient for most cases.

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sorting creates a canonical form for anagrams
- Always check length first for quick rejection
- Sorting is simple and clean for this problem
- `.split('').sort().join('')` is the TypeScript pattern for sorting strings
- Alternative: Character frequency counting (O(n) but more complex)
- This problem is simpler than Group Anagrams - just compare two strings!