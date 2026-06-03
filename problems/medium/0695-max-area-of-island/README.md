# 695. Max Area of Island

**Difficulty:** Medium  
**Topics:** Array, Depth-First Search, Breadth-First Search, Matrix, Union Find  
**Link:** [LeetCode Problem](https://leetcode.com/problems/max-area-of-island/)

## Problem Description

You are given an `m x n` binary matrix `grid`. An island is a group of `1`'s (representing land) connected **4-directionally** (horizontal or vertical). You may assume all four edges of the grid are surrounded by water.

The **area** of an island is the number of cells with a value `1` in the island.

Return the maximum area of an island in `grid`. If there is no island, return `0`.

### Examples

**Example 1:**

    Input: grid = [
      [0,0,1,0,0,0,0,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,1,1,1,0,0,0],
      [0,1,1,0,1,0,0,0,0,0,0,0,0],
      [0,1,0,0,1,1,0,0,1,0,1,0,0],
      [0,1,0,0,1,1,0,0,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,0,0],
      [0,0,0,0,0,0,0,1,1,1,0,0,0],
      [0,0,0,0,0,0,0,1,1,0,0,0,0]
    ]
    Output: 6

**Example 2:**

    Input: grid = [[0,0,0,0,0]]
    Output: 0

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 50`
- `grid[i][j]` is either `0` or `1`

## Approach

### DFS with Area Counting

Same DFS grid traversal as Number of Islands (#200), but each DFS call returns the area of the island it explores. Track the maximum area found.

**Key Insight:** In Number of Islands (#200), DFS just marks visited cells. Here, DFS also counts cells — each recursive call returns 1 (for current cell) plus the area from all four directions. The total is the island's area.

**Algorithm:**
1. For each cell in the grid:
   - If it's land (1), DFS from it to find the island's area
   - Track maximum area
2. DFS function:
   - If out of bounds or water (0) → return 0
   - Mark as visited (set to 0)
   - Return 1 + DFS(up) + DFS(down) + DFS(left) + DFS(right)
3. Return max area

**Walkthrough:**

    grid = [
      [0,0,1,0],
      [0,1,1,0],
      [0,1,0,0]
    ]

    Scan grid:
    (0,0)=0, (0,1)=0, (0,2)=1 → DFS!
      (0,2): mark 0, explore 4 directions
        up: out of bounds → 0
        down: (1,2)=1 → mark 0, explore
          down: (2,2)=0 → 0
          right: (1,3)=0 → 0
          left: (1,1)=1 → mark 0, explore
            down: (2,1)=1 → mark 0, explore
              all neighbors 0 → return 1
            other directions → 0
            return 1 + 1 = 2
          return 1 + 2 = 3
        right: (0,3)=0 → 0
        left: (0,1)=0 → 0
        return 1 + 3 = 4
      Area = 4, max = 4

    No more land cells → return 4 ✓

**Comparison with Number of Islands (#200):**
- #200: DFS marks cells, count how many DFS calls we make
- #695: DFS marks cells AND returns area, track the max area
- Same traversal, different what you track

**Time Complexity:** O(m × n) — visit each cell at most once  
**Space Complexity:** O(m × n) — recursion stack in worst case

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same DFS grid traversal as Number of Islands (#200) with area counting
- DFS returns 1 + sum of four directions — naturally counts the island size
- Mark cells as 0 (water) to avoid revisiting — same "modify grid" trick as Word Search (#79)
- This pattern of "DFS returns a value" is useful for many grid problems