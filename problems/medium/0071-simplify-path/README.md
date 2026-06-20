# 71. Simplify Path

**Difficulty:** Medium  
**Topics:** String, Stack  
**Link:** [LeetCode Problem](https://leetcode.com/problems/simplify-path/)

## Problem Description

Given an absolute path for a Unix-style file system, which begins with a slash `'/'`, transform this path into its **simplified canonical path**.

Rules:

- A single period `.` refers to the current directory
- A double period `..` refers to the parent directory
- Multiple consecutive slashes `//` are treated as a single slash
- Any sequence of periods other than `.` and `..` is treated as a valid directory name (e.g., `...` is a valid name)
- The simplified path must not end with a trailing slash

### Examples

**Example 1:**

    Input: path = "/home/"
    Output: "/home"

**Example 2:**

    Input: path = "/home//foo/"
    Output: "/home/foo"

**Example 3:**

    Input: path = "/home/user/Documents/../Pictures"
    Output: "/home/user/Pictures"

**Example 4:**

    Input: path = "/../"
    Output: "/"
    Explanation: Can't go above root.

**Example 5:**

    Input: path = "/.../a/../b/c/../d/./"
    Output: "/.../b/d"

### Constraints

- `1 <= path.length <= 3000`
- `path` consists of English letters, digits, period `.`, slash `/`, or underscore `_`
- `path` is a valid absolute Unix path

## Approach

### Split and Stack

Split the path by `/`, then process each part with a stack. Push directory names, pop on `..`, skip `.` and empty strings.

**Key Insight:** Splitting by `/` gives us individual components. Empty strings come from leading/trailing/double slashes — just skip them. The stack naturally handles navigation: push to go deeper, pop to go up.

**Algorithm:**

1. Split path by `'/'`
2. For each part:
    - Empty string or `'.'` → skip (no-op)
    - `'..'` → pop from stack if not empty (go up)
    - Anything else → push to stack (enter directory)
3. Join stack with `'/'` and prepend `'/'`

**Walkthrough:**

    path = "/a/./b/../../c/"
    Split: ["", "a", ".", "b", "..", "..", "c", ""]

    "" → skip
    "a" → push.          Stack: ["a"]
    "." → skip (current)
    "b" → push.          Stack: ["a", "b"]
    ".." → pop.          Stack: ["a"]
    ".." → pop.          Stack: []
    "c" → push.          Stack: ["c"]
    "" → skip

    Join: "/" + "c" = "/c" ✓

    path = "/../"
    Split: ["", "..", ""]

    "" → skip
    ".." → pop, but stack empty → skip (can't go above root)
    "" → skip

    Stack: []
    Join: "/" ✓

    path = "/.../a/../b/c/../d/./"
    Split: ["", "...", "a", "..", "b", "c", "..", "d", ".", ""]

    "..." → push (valid name!)  Stack: ["..."]
    "a" → push.                 Stack: ["...", "a"]
    ".." → pop.                 Stack: ["..."]
    "b" → push.                 Stack: ["...", "b"]
    "c" → push.                 Stack: ["...", "b", "c"]
    ".." → pop.                 Stack: ["...", "b"]
    "d" → push.                 Stack: ["...", "b", "d"]
    "." → skip
    "" → skip

    Join: "/" + ".../b/d" = "/.../b/d" ✓

**Comparison with other stack problems:**

- Valid Parentheses (#20): Push open, pop on close
- Decode String (#394): Push context, pop on `]`
- Simplify Path (#71): Push dirs, pop on `..`

**Time Complexity:** O(n) — split and process each part  
**Space Complexity:** O(n) — stack stores directory names

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Split by `/` handles multiple slashes and trailing slashes automatically
- Three cases: skip (empty/`.`), pop (`..`), push (everything else)
- `...` is a valid directory name — only `.` and `..` are special
- Can't go above root — just ignore `..` when stack is empty
- Practical problem — this is how real path resolution works
