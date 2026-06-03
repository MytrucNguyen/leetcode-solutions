# 62. Unique Paths

**Difficulty:** Medium  
**Topics:** Math, Dynamic Programming, Combinatorics  
**Link:** [LeetCode Problem](https://leetcode.com/problems/unique-paths/)

## Problem Description

There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner**. The robot tries to move to the **bottom-right corner**. The robot can only move either **down** or **right** at any point in time.

Given the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

### Examples

**Example 1:**

    Input: m = 3, n = 7
    Output: 28

**Example 2:**

    Input: m = 3, n = 2
    Output: 3
    Explanation: Three paths:
      Right → Down → Down
      Down → Down → Right
      Down → Right → Down

### Constraints

- `1 <= m, n <= 100`

## Approach

### 2D Dynamic Programming

Build a grid where `dp[i][j]` = number of unique paths to reach cell `(i, j)`. Each cell can only be reached from above or from the left, so `dp[i][j] = dp[i-1][j] + dp[i][j-1]`.

**Key Insight:** You can only arrive at any cell from two directions — above or left. So the number of paths to any cell is the sum of paths to those two neighbors. The first row and first column are all 1s because there's only one way to reach them (go all right, or go all down).

**Recurrence:**

    dp[i][j] = dp[i-1][j] + dp[i][j-1]
               ↑ from above   ↑ from left

**Algorithm:**
1. Create an `m × n` grid filled with 1s (first row and column are 1)
2. For each cell starting from `(1, 1)`:
   - `dp[i][j] = dp[i-1][j] + dp[i][j-1]`
3. Return `dp[m-1][n-1]`

**Walkthrough:**

    m = 3, n = 7

    Start: first row and column are all 1s
    1  1  1  1  1  1  1
    1  _  _  _  _  _  _
    1  _  _  _  _  _  _

    Fill each cell = above + left:
    1  1  1  1  1  1  1
    1  2  3  4  5  6  7
    1  3  6 10 15 21 28

    dp[2][6] = 28 ✓

    m = 3, n = 2

    1  1
    1  2
    1  3

    dp[2][1] = 3 ✓

**Why first row/column are 1:** There's only one way to reach any cell in the first row (go right the whole way) or first column (go down the whole way). No choices to make.

**Optimization:** Since each row only depends on the current and previous row, we can use a 1D array instead of a full 2D grid. But the 2D version is clearer for understanding.

**Comparison with LCS (#1143):**
- LCS: 2D DP comparing two strings, match vs skip
- Unique Paths: 2D DP on a grid, sum of above + left
- Both fill a table cell by cell using neighboring values

**Time Complexity:** O(m × n) — fill every cell  
**Space Complexity:** O(m × n) — the DP grid (can be optimized to O(n))

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Each cell = sum of the cell above + cell to the left
- First row and column are all 1s (only one path to reach them)
- This is one of the simplest and most visual 2D DP problems
- Same pattern applies to Unique Paths II (#63) with obstacles
- Can also be solved mathematically with combinations: C(m+n-2, m-1)