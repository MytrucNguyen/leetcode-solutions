# 200. Number of Islands

**Difficulty:** Medium  
**Topics:** Array, Depth-First Search, Breadth-First Search, Union Find, Matrix  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-islands/)

## Problem Description

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

### Examples

**Example 1:**
```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

**Example 2:**
```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j]` is `'0'` or `'1'`.

## Understanding Islands

An **island** is one or more connected land cells ('1') surrounded by water ('0') or grid edges.

**Key points:**
- Land pieces connect **horizontally or vertically** (NOT diagonally)
- Multiple '1's can form a single island if they're connected
- A single '1' by itself is also an island

**Example:**
```
[1][1][0]
[1][0][0]    This is 1 island (3 connected land pieces)
[0][0][1]    This is a separate island

Total: 2 islands
```

## Understanding DFS (Depth-First Search)

**DFS** explores as deep as possible before backtracking, like exploring a maze by going down one path completely before trying another.

**Analogy:** Exploring rooms in a house
1. Enter a room
2. Pick a door and go through it (go DEEP)
3. Keep going deeper until you hit a dead end
4. Backtrack and try another door

**For islands:**
When you find a '1', DFS explores all connected land by:
1. Marking current cell as visited (change to '0')
2. Recursively exploring all 4 directions (up, down, left, right)
3. Stopping when hitting water ('0') or grid boundaries

## Approach

### DFS Solution

Use DFS to explore and mark entire islands, counting each new island found.

**Algorithm:**

1. Initialize `count = 0` to track number of islands
2. Loop through every cell in the grid:
   - If cell is '1' (unvisited land):
     - Increment `count` (found a new island!)
     - Call DFS to mark the entire connected island as visited
3. Return `count`

**DFS Helper Function:**
```
dfs(grid, row, col):
    // Base cases - stop exploring
    if out of bounds: return
    if cell is '0' (water or visited): return
    
    // Mark current cell as visited
    grid[row][col] = '0'
    
    // Explore all 4 directions
    dfs(grid, row - 1, col)  // up
    dfs(grid, row + 1, col)  // down
    dfs(grid, row, col - 1)  // left
    dfs(grid, row, col + 1)  // right
```

**Example Walkthrough:**
```
Grid:
[1][1][0]
[1][0][0]
[0][0][1]

Step 1: Loop finds '1' at (0,0)
  count = 1
  DFS from (0,0):
    Mark (0,0) as '0'
    Explore up: out of bounds
    Explore down: (1,0) is '1' → DFS(1,0)
      Mark (1,0) as '0'
      Explore all directions from (1,0)...
    Explore left: out of bounds
    Explore right: (0,1) is '1' → DFS(0,1)
      Mark (0,1) as '0'
      Explore all directions from (0,1)...
  
  After DFS, entire first island is marked:
  [0][0][0]
  [0][0][0]
  [0][0][1]

Step 2: Loop continues, finds '1' at (2,2)
  count = 2
  DFS from (2,2):
    Mark (2,2) as '0'
    Explore all directions (all water or out of bounds)
  
  Grid now:
  [0][0][0]
  [0][0][0]
  [0][0][0]

Step 3: Loop finishes, no more '1's

Return count = 2
```

**Why This Works:**
- Each '1' we encounter is a new island (previous islands are already marked '0')
- DFS marks all connected land pieces, preventing double-counting
- By modifying the grid, we don't need a separate visited array

**Time Complexity:** O(m × n) - Visit each cell at most once  
**Space Complexity:** O(m × n) - Worst case recursion depth (if entire grid is one island)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- DFS is excellent for exploring connected components in a grid
- Modifying the input grid ('1' → '0') eliminates need for visited tracking
- Recursive DFS naturally explores all 4 directions
- Each unvisited '1' represents a new island
- Base cases prevent infinite recursion (bounds checking + water/visited cells)
- This pattern applies to many graph/grid problems (flood fill, connected components, etc.)