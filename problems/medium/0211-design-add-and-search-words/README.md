# 211. Design Add and Search Words Data Structure

**Difficulty:** Medium  
**Topics:** String, Depth-First Search, Design, Trie  
**Link:** [LeetCode Problem](https://leetcode.com/problems/design-add-and-search-words-data-structure/)

## Problem Description

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the `WordDictionary` class:

- `WordDictionary()` Initializes the object
- `void addWord(word)` Adds `word` to the data structure
- `bool search(word)` Returns `true` if any added word matches `word`. The word may contain dots `'.'` where a dot matches any letter.

### Examples

**Example 1:**

    Input:
    ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
    [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
    Output: [null,null,null,null,false,true,true,true]

### Constraints

- `1 <= word.length <= 25`
- `word` in `addWord` consists of lowercase English letters
- `word` in `search` consists of lowercase English letters or `'.'`
- At most `10^4` calls will be made to `addWord` and `search`

## Approach

### Trie + DFS for Wildcards

`addWord` is identical to Trie insert (#208). `search` extends Trie search with DFS — when we hit a `.`, try all children recursively.

**Key Insight:** Normal characters follow the exact trie path (same as #208). The `.` wildcard means "any character could be here" — so we try ALL children at that level. If ANY path leads to a match, return true.

**Algorithm:**

**addWord(word):** Same as Trie insert — walk character by character, create nodes, mark end.

**search(word):** DFS with index tracking:

1. If index reaches end of word → return node.isEnd
2. If current char is a letter → follow that child (or return false if missing)
3. If current char is `.` → try ALL children recursively, return true if any match

**Walkthrough:**

    addWord("bad"), addWord("dad"), addWord("mad")

    Trie:
    root
    ├── b → a → d (isEnd)
    ├── d → a → d (isEnd)
    └── m → a → d (isEnd)

    search("pad"):
      'p' → root has no child 'p' → false ✓

    search(".ad"):
      '.' → try ALL children: b, d, m
        'b' → 'a' → child 'a' exists
          'a' → 'd' → child 'd' exists
            'd' → index = 3 = word.length, isEnd = true → return true ✓
      (Found match through 'b' path → true)

    search("b.."):
      'b' → child 'b' exists → follow
        '.' → try ALL children of 'b': only 'a'
          'a' → '.' → try ALL children of 'a': only 'd'
            'd' → index = 3 = word.length, isEnd = true → true ✓

    search("."):
      '.' → try ALL children: b, d, m
        'b' → index 1 = word.length, isEnd = false → false
        'd' → isEnd = false → false
        'm' → isEnd = false → false
      All false → return false ✓
      (Single letter doesn't match — our words are length 3)

**Comparison with Trie (#208):**

- #208 search: Follow exact path character by character
- #211 search: Same, but `.` triggers DFS through all children
- #208 is a special case of #211 (no wildcards)

**Time Complexity:**

- addWord: O(m) where m is word length
- search: O(m) for exact match, O(26^m) worst case for all dots (but pruned by trie structure)

**Space Complexity:** O(total characters across all words)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Trie + DFS for wildcards — exact characters follow the path, dots explore all branches
- addWord is identical to Trie insert (#208)
- The `.` wildcard turns a linear search into a DFS — try all children
- If ANY path through the trie matches, return true
- Combines two skills: Trie data structure + DFS/backtracking
- Your 100th medium! Trie (#208) + DFS combined into one elegant design!
