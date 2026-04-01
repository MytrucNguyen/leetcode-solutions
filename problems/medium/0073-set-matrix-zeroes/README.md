# 73. Set Matrix Zeroes

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Matrix  
**Link:** [LeetCode Problem](https://leetcode.com/problems/set-matrix-zeroes/)

## Problem Description

Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and entire column to `0`'s.

You must do it **in place**.

### Examples

**Example 1:**
```
Input:              Output:
[1, 1, 1]          [1, 0, 1]
[1, 0, 1]    →     [0, 0, 0]
[1, 1, 1]          [1, 0, 1]
```

**Example 2:**
```
Input:              Output:
[0, 1, 2, 0]       [0, 0, 0, 0]
[3, 4, 5, 2]  →    [0, 4, 5, 0]
[1, 3, 1, 5]       [0, 3, 1, 0]
```

### Constraints

- `m == matrix.length`
- `n == matrix[0].length`
- `1 <= m, n <= 200`
- `-2^31 <= matrix[i][j] <= 2^31 - 1`

**Follow up:** Could you do it with O(1) extra space?

## Approach

### Extra Space — Sets (Simple)
Store which rows and columns need to be zeroed in separate sets.
- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m + n)

### First Row/Column as Markers (Optimal)
Use the first row and first column of the matrix itself to track which rows and columns should be zeroed. Two extra booleans track whether the first row and first column themselves should be zeroed.

**Key Insight:** Instead of using extra sets, repurpose the first row and column as your markers. When you find a zero at `matrix[i][j]`, set `matrix[i][0] = 0` (mark the row) and `matrix[0][j] = 0` (mark the column). Then zero out based on these markers.

**Why two extra booleans?** The first row and first column share cell `matrix[0][0]`, so we need separate flags to track whether the first row and first column themselves contain zeros.

**Algorithm:**
1. Check if first row has any zeros → `firstRowZero`
2. Check if first column has any zeros → `firstColZero`
3. Scan the rest of the matrix (starting from `[1][1]`):
   - If `matrix[i][j] === 0`, mark `matrix[i][0] = 0` and `matrix[0][j] = 0`
4. Zero out cells based on markers (starting from `[1][1]`):
   - If `matrix[i][0] === 0` or `matrix[0][j] === 0`, set `matrix[i][j] = 0`
5. If `firstRowZero`, zero the entire first row
6. If `firstColZero`, zero the entire first column

**Walkthrough:**
```
Input:
[1, 1, 1]
[1, 0, 1]
[1, 1, 1]

Step 1: firstRowZero = false (no zeros in first row)
Step 2: firstColZero = false (no zeros in first column)

Step 3: Scan from [1][1]:
  matrix[1][1] = 0 → mark matrix[1][0] = 0, matrix[0][1] = 0

Matrix after marking:
[1, 0, 1]    ← matrix[0][1] marked
[0, 0, 1]    ← matrix[1][0] marked
[1, 1, 1]

Step 4: Zero out based on markers (from [1][1]):
  row 1: matrix[1][0] = 0 → zero entire row
  col 1: matrix[0][1] = 0 → zero entire column

Output:
[1, 0, 1]
[0, 0, 0]
[1, 0, 1] ✓
```
```
Input:
[0, 1, 2, 0]
[3, 4, 5, 2]
[1, 3, 1, 5]

Step 1: firstRowZero = true (row 0 has zeros)
Step 2: firstColZero = true (col 0 has a zero)

Step 3: Scan from [1][1]:
  No zeros found in inner matrix

Step 4: Zero based on markers — no inner markers set

Step 5: firstRowZero → zero entire first row
Step 6: firstColZero → zero entire first column

Output:
[0, 0, 0, 0]
[0, 4, 5, 0]
[0, 3, 1, 0] ✓
```

**Time Complexity:** O(m × n) - Two passes through the matrix  
**Space Complexity:** O(1) - Only two boolean variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Using the matrix itself as storage eliminates extra space
- The first row and column serve as "marker arrays" for free
- Process inner matrix first, then handle first row/column last to avoid overwriting markers
- The order of operations matters — zeroing markers too early corrupts the data
- This "use input as storage" technique appears in many in-place problems