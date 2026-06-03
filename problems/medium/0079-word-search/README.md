# 79. Word Search

**Difficulty:** Medium  
**Topics:** Array, String, Backtracking, Matrix  
**Link:** [LeetCode Problem](https://leetcode.com/problems/word-search/)

## Problem Description

Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

### Examples

**Example 1:**

    Input: board = [["A","B","C","E"],
                    ["S","F","C","S"],
                    ["A","D","E","E"]], word = "ABCCED"
    Output: true

**Example 2:**

    Input: board = [["A","B","C","E"],
                    ["S","F","C","S"],
                    ["A","D","E","E"]], word = "SEE"
    Output: true

**Example 3:**

    Input: board = [["A","B","C","E"],
                    ["S","F","C","S"],
                    ["A","D","E","E"]], word = "ABCB"
    Output: false
    Explanation: Can't reuse the 'B' at [0][1].

### Constraints

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 6`
- `1 <= word.length <= 15`
- `board` and `word` consist of only lowercase and uppercase English letters

## Approach

### Backtracking on Grid — DFS with Four Directions

Try every cell as a starting point. From each cell, explore all four directions (up, down, left, right) to match the next character. Mark cells as visited to prevent reuse, and unmark when backtracking.

**Key Insight:** This combines grid traversal (like Number of Islands #200) with backtracking (like Subsets #78). At each cell, four choices: go up, down, left, or right. If a path doesn't work, backtrack and try another direction.

**Algorithm:**
1. For each cell in the grid, try starting the word from there
2. DFS function takes (row, col, wordIndex):
   - Base case: if wordIndex === word.length → found the full word, return true
   - If out of bounds, cell doesn't match, or cell already visited → return false
   - Mark cell as visited (change to '#')
   - Explore all four directions recursively
   - Unmark cell (restore original character) — backtrack!
   - Return true if any direction worked
3. Return true if any starting cell finds the word

**Walkthrough:**

    board = [["A","B","C","E"],
             ["S","F","C","S"],
             ["A","D","E","E"]], word = "ABCCED"

    Try starting at [0][0] = 'A' → matches word[0]
      Mark 'A' as '#'
      Go right [0][1] = 'B' → matches word[1]
        Mark 'B' as '#'
        Go right [0][2] = 'C' → matches word[2]
          Mark 'C' as '#'
          Go down [1][2] = 'C' → matches word[3]
            Mark 'C' as '#'
            Go down [2][2] = 'E' → matches word[4]
              Mark 'E' as '#'
              Go left [2][1] = 'D' → matches word[5]
                wordIndex = 6 = word.length → return true! ✓

    word = "ABCB":
    Try [0][0]='A' → [0][1]='B' → [0][2]='C' →
      Go up: out of bounds
      Go down: [1][2]='C' ≠ 'B'
      Go right: [0][3]='E' ≠ 'B'
      Go left: [0][1]='#' (visited!) → can't reuse
    All directions fail → backtrack → eventually return false ✓

**Why mark with '#'?** Instead of using a separate visited set, we temporarily replace the cell's character with '#'. This is O(1) space and we restore it when backtracking. Any character not in the alphabet works.

**Time Complexity:** O(m × n × 4^L) where L is word length — each cell can branch 4 ways  
**Space Complexity:** O(L) — recursion depth equals word length

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Grid backtracking = DFS + four directions + mark/unmark visited
- Modifying the board itself as visited marker saves space (no extra Set needed)
- Always restore the cell when backtracking — this is the "undo" step
- Same backtracking pattern: choose (mark), recurse (explore), undo (unmark)
- Combines Number of Islands (#200) grid traversal with Subsets (#78) backtracking