# 130. Surrounded Regions

**Difficulty:** Medium  
**Topics:** Array, Depth-First Search, Breadth-First Search, Matrix, Union Find  
**Link:** [LeetCode Problem](https://leetcode.com/problems/surrounded-regions/)

## Problem Description

Given an `m x n` matrix `board` containing `'X'` and `'O'`, capture all regions that are 4-directionally surrounded by `'X'`.

A region is captured by flipping all `'O'`s into `'X'`s in that surrounded region.

### Examples

**Example 1:**

    Input: board = [["X","X","X","X"],
                    ["X","O","O","X"],
                    ["X","X","O","X"],
                    ["X","O","X","X"]]
    Output:        [["X","X","X","X"],
                    ["X","X","X","X"],
                    ["X","X","X","X"],
                    ["X","O","X","X"]]

    The bottom O is connected to the border → not captured.
    All other O's are surrounded → captured.

**Example 2:**

    Input: board = [["X"]]
    Output: [["X"]]

### Constraints

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 200`
- `board[i][j]` is `'X'` or `'O'`

## Approach

### Reverse Thinking — Save Border-Connected, Capture the Rest

Instead of finding surrounded regions (complex), find regions connected to the border (simple) and protect them. Everything else gets captured.

**Key Insight:** An O region is NOT captured only if it's connected to the border. So DFS from every border O, mark those as safe. Then flip everything that isn't safe.

**Three-phase approach:**

1. DFS from all border O's → mark as safe (change to 'S')
2. Flip remaining O's to X (these are surrounded)
3. Restore S's back to O (these were border-connected)

**Algorithm:**

1. Walk the border of the board
2. For each border cell that's 'O', DFS and mark all connected O's as 'S' (safe)
3. Walk the entire board:
    - 'O' → change to 'X' (surrounded, captured)
    - 'S' → change to 'O' (border-connected, restore)

**Walkthrough:**

    Input:
    X X X X
    X O O X
    X X O X
    X O X X

    Phase 1 — DFS from border O's:
      Border O at (3,1). DFS:
        (3,1) is O → mark S
        Check neighbors: all X or out of bounds → stop
      No other border O's.

    Board after phase 1:
    X X X X
    X O O X
    X X O X
    X S X X

    Phase 2 — Flip remaining O's to X, restore S's to O:
      (1,1) O → X
      (1,2) O → X
      (2,2) O → X
      (3,1) S → O

    Result:
    X X X X
    X X X X
    X X X X
    X O X X  ✓

**Why reverse thinking?** Finding "surrounded" regions requires checking if ANY cell in the region touches the border — complex. Finding "border-connected" regions just starts from the border — simple DFS.

**Comparison with other grid DFS problems:**

- Flood Fill (#733): DFS changes color from a starting point
- Number of Islands (#200): DFS marks visited, counts components
- Surrounded Regions (#130): DFS from borders to protect, then flip the rest

**Time Complexity:** O(m × n) — visit each cell at most twice  
**Space Complexity:** O(m × n) — recursion stack in worst case

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Reverse thinking: protect the safe ones instead of finding the captured ones
- DFS from borders is simpler than checking if regions touch borders
- Three phases: mark safe, capture rest, restore safe
- Using a temporary marker ('S') avoids needing a separate visited set
- This "invert the problem" approach is a powerful problem-solving technique
