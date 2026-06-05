# 208. Implement Trie (Prefix Tree)

**Difficulty:** Medium  
**Topics:** Hash Table, String, Design, Trie  
**Link:** [LeetCode Problem](https://leetcode.com/problems/implement-trie-prefix-tree/)

## Problem Description

A **trie** (pronounced "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the `Trie` class:

- `Trie()` Initializes the trie object
- `void insert(String word)` Inserts the string `word` into the trie
- `boolean search(String word)` Returns `true` if `word` is in the trie (exact match)
- `boolean startsWith(String prefix)` Returns `true` if any word in the trie starts with `prefix`

### Examples

**Example 1:**

    Input:
    ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
    [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
    Output: [null, null, true, false, true, null, true]

### Constraints

- `1 <= word.length, prefix.length <= 2000`
- `word` and `prefix` consist only of lowercase English letters
- At most `3 * 10^4` calls will be made to `insert`, `search`, and `startsWith`

## Approach

### Trie Node with Children Map

Each node has a map of children (character → child node) and a boolean marking whether a complete word ends here.

**Key Insight:** A trie stores strings character by character. Each level of the tree represents one character position. Shared prefixes share the same path — "apple" and "app" share the path a→p→p. The `isEnd` flag distinguishes complete words from prefixes.

**Structure:**

    root (empty)
     |
     a
     |
     p
     |
     p (isEnd=true after inserting "app")
     |
     l
     |
     e (isEnd=true after inserting "apple")

**Algorithm:**

**insert(word):**

1. Start at root
2. For each character: if child doesn't exist, create it. Move to child.
3. Mark the last node as `isEnd = true`

**search(word):**

1. Start at root
2. For each character: if child doesn't exist, return false. Move to child.
3. Return node.isEnd (must be a complete word)

**startsWith(prefix):**

1. Same as search but return true if we reach the end of prefix (don't check isEnd)

**Walkthrough:**

    insert("apple"):
      root → create 'a' → create 'p' → create 'p' → create 'l' → create 'e'
      Mark 'e' node: isEnd = true

    search("apple"):
      root → 'a' exists → 'p' exists → 'p' exists → 'l' exists → 'e' exists
      'e'.isEnd = true → return true ✓

    search("app"):
      root → 'a' → 'p' → 'p'
      'p'.isEnd = false → return false ✓

    startsWith("app"):
      root → 'a' → 'p' → 'p'
      Reached end of prefix → return true ✓

    insert("app"):
      root → 'a' exists → 'p' exists → 'p' exists
      Mark 'p' node: isEnd = true

    search("app"):
      root → 'a' → 'p' → 'p'
      'p'.isEnd = true → return true ✓

**Why use a Trie instead of a Set?**

- Set: O(1) search but no prefix matching
- Trie: O(m) search AND prefix matching (m = word length)
- Trie shares storage for common prefixes — memory efficient for many similar words

**Time Complexity:** O(m) for all operations where m is word/prefix length  
**Space Complexity:** O(total characters across all words)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Each node has children (character → node) and an isEnd flag
- search checks isEnd, startsWith doesn't — that's the only difference
- Shared prefixes share the same path — efficient storage
- The Trie is the foundation for autocomplete, spell check, and word games
- New data structure! Adds to your toolkit alongside heaps, stacks, queues, hash maps
