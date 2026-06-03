# 36. Valid Sudoku

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Matrix  
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-sudoku/)

## Problem Description

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

- Each row must contain the digits `1-9` without repetition
- Each column must contain the digits `1-9` without repetition
- Each of the nine `3 x 3` sub-boxes must contain the digits `1-9` without repetition

**Note:** A Sudoku board does not need to be solvable. Only validate currently filled cells.

### Examples

**Example 1:**

    Input: board =
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    Output: true

**Example 2:**

    Same board but with "8" in top-left instead of "5"
    Output: false
    Explanation: Two 8s in the first column and first 3x3 box.

### Constraints

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit `1-9` or `'.'`

## Approach

### Three Sets — Rows, Columns, Boxes

Use sets to track seen digits for each row, column, and 3×3 box. One pass through the board — for each digit, check if it's already in its row, column, or box.

**Key Insight:** The box index formula converts a (row, col) position to one of 9 boxes numbered 0-8. `boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)`.

**Box mapping:**

    Rows 0-2: boxes 0, 1, 2
    Rows 3-5: boxes 3, 4, 5
    Rows 6-8: boxes 6, 7, 8

    (0,0)→box 0  (0,3)→box 1  (0,6)→box 2
    (3,0)→box 3  (3,3)→box 4  (3,6)→box 5
    (6,0)→box 6  (6,3)→box 7  (6,6)→box 8

**Algorithm:**

1. Create 9 sets for rows, 9 for columns, 9 for boxes
2. For each cell (row, col):
    - Skip empty cells ('.')
    - Calculate box index
    - If digit is already in its row set, column set, or box set → return false
    - Add digit to all three sets
3. Return true

**Walkthrough:**

    Processing cell (0,0) = '5':
      rowSet[0] has '5'? No → add
      colSet[0] has '5'? No → add
      boxSet[0] has '5'? No → add

    Processing cell (0,1) = '3':
      rowSet[0] has '3'? No → add
      colSet[1] has '3'? No → add
      boxSet[0] has '3'? No → add

    ...

    If we encounter '5' again in row 0, column 0, or box 0 → return false!

**Time Complexity:** O(1) — always 81 cells (9×9 board)  
**Space Complexity:** O(1) — at most 81 digits tracked across all sets

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Box index formula: `Math.floor(row / 3) * 3 + Math.floor(col / 3)` maps any cell to its 3×3 box
- Three groups of sets (rows, columns, boxes) catch all constraint violations
- Single pass — check and add to all three sets simultaneously
- Only validate filled cells — skip '.'
- This is about constraint checking, not solving the puzzle
