# 49. Group Anagrams

**Difficulty:** Medium  
**Topics:** Array, Hash Table, String, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/group-anagrams/)

## Problem Description

Given an array of strings `strs`, group the **anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Examples

**Example 1:**
```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**
```
Input: strs = [""]
Output: [[""]]
```

**Example 3:**
```
Input: strs = ["a"]
Output: [["a"]]
```

### Constraints

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

## Understanding Anagrams

**Anagrams** are words that use the same letters in different arrangements.

**Examples:**
```
"eat", "tea", "ate" → All use letters: e, a, t
"tan", "nat"        → Both use letters: t, a, n
"bat"               → Uses letters: b, a, t (no anagrams in list)
```

**Key insight:** If we sort the letters of anagrams, they become identical!
```
"eat" → sort → "aet"
"tea" → sort → "aet"
"ate" → sort → "aet"

All sort to "aet"!
```

## Approach

### Hash Map with Sorted Key

Use the sorted version of each word as a key to group anagrams together.

**Algorithm:**

1. Create a hash map where:
   - **Key** = sorted letters of a word
   - **Value** = array of words with those letters
2. For each word:
   - Sort its letters to create a key
   - Add the word to the corresponding group in the map
3. Return all the groups (values from the map)

**Example Walkthrough for `["eat","tea","tan","ate","nat","bat"]`:**
```
Step 1: Create empty map
map = {}

Step 2: Process "eat"
  Sort "eat" → "aet"
  map["aet"] = ["eat"]

Step 3: Process "tea"
  Sort "tea" → "aet"
  map["aet"] = ["eat", "tea"]  (added to existing group)

Step 4: Process "tan"
  Sort "tan" → "ant"
  map["ant"] = ["tan"]  (new group)

Step 5: Process "ate"
  Sort "ate" → "aet"
  map["aet"] = ["eat", "tea", "ate"]  (added to existing group)

Step 6: Process "nat"
  Sort "nat" → "ant"
  map["ant"] = ["tan", "nat"]  (added to existing group)

Step 7: Process "bat"
  Sort "bat" → "abt"
  map["abt"] = ["bat"]  (new group)

Final map:
{
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan", "nat"],
  "abt": ["bat"]
}

Step 8: Return all values
[["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

**How to sort a string in TypeScript:**
```typescript
const sorted = word.split('').sort().join('');

// Example:
"eat".split('')        → ['e', 'a', 't']
     .sort()           → ['a', 'e', 't']
     .join('')         → "aet"
```

**Visual:**
```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

Grouping by sorted key:
"aet" group: eat, tea, ate
"ant" group: tan, nat
"abt" group: bat

Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

**Edge Cases:**
- Empty string: `[""]` → `[[""]]`
- Single word: `["a"]` → `[["a"]]`
- No anagrams: Each word is its own group
- All anagrams: All words in one group

**Time Complexity:** O(n * k log k) where n = number of strings, k = max length of a string (sorting each string)  
**Space Complexity:** O(n * k) for the hash map

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sorting creates a canonical form for anagrams (same letters → same sorted string)
- Hash maps are perfect for grouping items by a common property
- The sorted string acts as a unique identifier for each anagram group
- String manipulation: `.split('')`, `.sort()`, `.join('')` pattern
- Alternative approach: Use character frequency counts as key (avoids sorting)