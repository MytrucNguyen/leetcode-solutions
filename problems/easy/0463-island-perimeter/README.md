# 463. Island Perimeter

**Difficulty:** Easy  
**Topics:** Array, Depth-First Search, Breadth-First Search, Matrix  
**Link:** [LeetCode Problem](https://leetcode.com/problems/island-perimeter/)

## Problem Description

You are given `row x col` grid representing a map where `grid[i][j] = 1` represents land and `grid[i][j] = 0` represents water.

Grid cells are connected **horizontally/vertically** (not diagonally). The grid is completely surrounded by water, and there is exactly one island.

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

### Examples

**Example 1:**

    Input: grid = [[0,1,0,0],
                   [1,1,1,0],
                   [0,1,0,0],
                   [1,1,0,0]]
    Output: 16

**Example 2:**

    Input: grid = [[1]]
    Output: 4

**Example 3:**

    Input: grid = [[1,0]]
    Output: 4

### Constraints

- `row == grid.length`
- `col == grid[i].length`
- `1 <= row, col <= 100`
- `grid[i][j]` is `0` or `1`
- There is exactly one island

## Approach

### Count Cells and Shared Edges

Each land cell contributes 4 edges to the perimeter. Every pair of adjacent land cells shares an edge, removing 2 from the total (one from each cell). Just count land cells and adjacent pairs.

**Key Insight:** No DFS needed! Simple math:

    perimeter = (4 × land cells) - (2 × shared edges)

To avoid double-counting shared edges, only check right and down neighbors — each pair is counted exactly once.

**Algorithm:**

1. For each cell in the grid:
    - If land → increment cells count
    - If right neighbor is also land → increment neighbors count
    - If bottom neighbor is also land → increment neighbors count
2. Return `4 × cells - 2 × neighbors`

**Walkthrough:**

    grid = [[0,1,0,0],
            [1,1,1,0],
            [0,1,0,0],
            [1,1,0,0]]

    Land cells: 7
    Shared edges (right/down only):
      (0,1)→(1,1): down ✓
      (1,0)→(1,1): right ✓
      (1,1)→(1,2): right ✓
      (1,1)→(2,1): down ✓
      (2,1)→(3,1): down ✓
      (3,0)→(3,1): right ✓
    Neighbors: 6

    Perimeter = 4×7 - 2×6 = 28 - 12 = 16 ✓

**Why only check right and down?** Each shared edge connects two cells. If we check all four directions, we'd count each pair twice (A→B and B→A). Checking only right and down counts each pair exactly once.

**Comparison with other grid problems:**

- Number of Islands (#200): DFS to count components
- Max Area of Island (#695): DFS to count area
- Flood Fill (#733): DFS to change color
- Island Perimeter (#463): No DFS! Just counting

**Time Complexity:** O(m × n) — scan every cell  
**Space Complexity:** O(1) — only counters

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Not every grid problem needs DFS! Sometimes simple counting works
- 4 × cells - 2 × neighbors is an elegant formula
- Only check right and down to avoid double-counting shared edges
- Simplest grid problem — great for building intuition about grid geometry
