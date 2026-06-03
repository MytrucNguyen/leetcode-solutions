# 994. Rotting Oranges

**Difficulty:** Medium  
**Topics:** Array, Breadth-First Search, Matrix  
**Link:** [LeetCode Problem](https://leetcode.com/problems/rotting-oranges/)

## Problem Description

You are given an `m x n` grid where each cell can have one of three values:

- `0` representing an empty cell
- `1` representing a fresh orange
- `2` representing a rotten orange

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.

### Examples

**Example 1:**

    Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
    Output: 4

**Example 2:**

    Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
    Output: -1
    Explanation: Bottom-left orange can never be reached.

**Example 3:**

    Input: grid = [[0,2]]
    Output: 0
    Explanation: No fresh oranges exist.

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10`
- `grid[i][j]` is `0`, `1`, or `2`

## Approach

### Multi-Source BFS

Start BFS from ALL rotten oranges simultaneously. Each BFS level = one minute. Count fresh oranges at the start, decrement as they rot. If any remain at the end, return -1.

**Key Insight:** This is Level Order Traversal (#102) applied to a grid! Instead of starting from one root node, we start from ALL rotten oranges at once (multi-source). Each "level" of BFS represents one minute of spreading.

**Multi-source BFS vs single-source:**
- Single-source (#102): Start from one root, process level by level
- Multi-source (#994): Start from ALL sources at once, spread outward together

**Algorithm:**
1. Scan the grid: add all rotten oranges to queue, count fresh oranges
2. If no fresh oranges, return 0
3. BFS level by level:
   - Process all current rotten oranges
   - For each, check 4 neighbors
   - If neighbor is fresh → make it rotten, add to queue, decrement fresh count
   - Each complete level = one minute
4. If fresh count is 0 → return minutes, else return -1

**Walkthrough:**

    grid = [[2,1,1],
            [1,1,0],
            [0,1,1]]

    Initial: queue = [(0,0)], fresh = 6, minutes = 0

    Minute 1: process (0,0)
      (0,1) is fresh → rot it, fresh=5
      (1,0) is fresh → rot it, fresh=4
      queue = [(0,1),(1,0)], minutes=1

    Minute 2: process (0,1) and (1,0)
      (0,1) → (0,2) fresh → rot, fresh=3
      (0,1) → (1,1) fresh → rot, fresh=2
      (1,0) → no new fresh neighbors
      queue = [(0,2),(1,1)], minutes=2

    Minute 3: process (0,2) and (1,1)
      (0,2) → no new fresh
      (1,1) → (2,1) fresh → rot, fresh=1
      queue = [(2,1)], minutes=3

    Minute 4: process (2,1)
      (2,1) → (2,2) fresh → rot, fresh=0
      queue = [], minutes=4

    fresh=0 → return 4 ✓

**Comparison with other BFS problems:**
- Level Order Traversal (#102): Single source (root), tree structure
- Number of Islands (#200): Multiple DFS calls, counting components
- Rotting Oranges (#994): Multi-source BFS, tracking time/levels

**Time Complexity:** O(m × n) — each cell visited at most once  
**Space Complexity:** O(m × n) — queue can hold all cells in worst case

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Multi-source BFS starts from ALL sources simultaneously — same pattern as single-source but with multiple starting points
- Each BFS level = one time step (minute, day, wave, etc.)
- Count what you're looking for (fresh oranges) upfront, then decrement as you process
- If the count isn't zero at the end, some cells were unreachable → return -1
- This "spreading/infection" pattern appears in many problems: zombie apocalypse, fire spreading, shortest distance