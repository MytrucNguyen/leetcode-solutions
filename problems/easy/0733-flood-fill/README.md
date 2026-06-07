# 733. Flood Fill

**Difficulty:** Easy  
**Topics:** Array, Depth-First Search, Breadth-First Search, Matrix  
**Link:** [LeetCode Problem](https://leetcode.com/problems/flood-fill/)

## Problem Description

An image is represented by an `m x n` integer grid `image` where `image[i][j]` represents the pixel value of the image.

You are also given three integers `sr`, `sc`, and `color`. You should perform a **flood fill** on the image starting from the pixel `image[sr][sc]`.

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with `color`.

Return the modified image after performing the flood fill.

### Examples

**Example 1:**

    Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
    Output: [[2,2,2],[2,2,0],[2,0,1]]

    Starting pixel (1,1) = 1. All connected 1s become 2.
    The 0s block the spread.

**Example 2:**

    Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
    Output: [[0,0,0],[0,0,0]]

    Starting color is already 0, new color is 0. No change needed.

### Constraints

- `m == image.length`
- `n == image[i].length`
- `1 <= m, n <= 50`
- `0 <= image[i][j], color <= 65535`
- `0 <= sr < m`
- `0 <= sc < n`

## Approach

### DFS — Spread to Same-Color Neighbors

Same grid DFS as Number of Islands (#200) and Max Area of Island (#695) but simpler — start from one pixel, change its color, and spread to all 4-directional neighbors of the same original color.

**Key Insight:** This is the simplest grid DFS problem. The "visited" check is built-in — once we change a pixel's color, it no longer matches the original color, so we won't revisit it. But we need to handle the edge case where the new color equals the original color (infinite loop if we don't check).

**Algorithm:**

1. Record the original color at (sr, sc)
2. If original color === new color → return (no work needed, prevents infinite loop)
3. DFS from (sr, sc):
    - If out of bounds → return
    - If pixel !== original color → return
    - Change pixel to new color
    - DFS all four neighbors

**Walkthrough:**

    image = [[1,1,1],[1,1,0],[1,0,1]], sr=1, sc=1, color=2
    originalColor = 1

    DFS(1,1): image[1][1]=1 → change to 2
      DFS(0,1): image[0][1]=1 → change to 2
        DFS(0,0): 1 → 2
          neighbors: out of bounds or not 1 → stop
        DFS(0,2): 1 → 2
          neighbors: not 1 → stop
      DFS(2,1): image[2][1]=0 ≠ 1 → stop
      DFS(1,0): image[1][0]=1 → change to 2
        DFS(2,0): 1 → 2
          neighbors: not 1 → stop
      DFS(1,2): image[1][2]=0 ≠ 1 → stop

    Result: [[2,2,2],[2,2,0],[2,0,1]] ✓

**Comparison with other grid DFS:**

- Number of Islands (#200): DFS marks visited, counts components
- Max Area of Island (#695): DFS returns area count
- Word Search (#79): DFS with backtracking (restore cell)
- Flood Fill (#733): DFS changes color, no restore needed

**Time Complexity:** O(m × n) — visit each cell at most once  
**Space Complexity:** O(m × n) — recursion stack in worst case

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Simplest grid DFS — change color and spread
- The color change acts as the "visited" marker — no separate set needed
- Must check if original color === new color to avoid infinite loop
- Same DFS pattern as #200, #695, #79 but without backtracking
- The "paint bucket" tool in image editors works exactly like this
