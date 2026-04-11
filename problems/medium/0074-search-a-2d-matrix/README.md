# 74. Search a 2D Matrix

**Difficulty:** Medium  
**Topics:** Array, Binary Search, Matrix  
**Link:** [LeetCode Problem](https://leetcode.com/problems/search-a-2d-matrix/)

## Problem Description

You are given an `m x n` integer matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.

You must write a solution in **O(log(m * n))** time complexity.

### Examples

**Example 1:**

    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output: true

**Example 2:**

    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
    Output: false

### Constraints

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-10^4 <= matrix[i][j], target <= 10^4`

## Approach

### Binary Search on Virtual 1D Array

Treat the entire matrix as one sorted array. Convert 1D indices to 2D coordinates using division and modulo.

**Key Insight:** Since each row's first element is greater than the previous row's last element, the matrix is effectively one long sorted array. We can run standard binary search (#704) — just convert the 1D index to 2D coordinates to access the actual element.

**Index conversion:**

    Given cols = number of columns:
    row = index / cols  (integer division)
    col = index % cols  (remainder)

    Example: 4 columns, index 9
    row = 9 / 4 = 2
    col = 9 % 4 = 1
    → matrix[2][1]

**Algorithm:**
1. Set `left = 0`, `right = m * n - 1` (total elements - 1)
2. Standard binary search:
   - Calculate `mid`
   - Convert mid to 2D: `row = mid / cols`, `col = mid % cols`
   - Compare `matrix[row][col]` to target
   - Adjust left/right as usual
3. Return true if found, false otherwise

**Walkthrough:**

    matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    rows=3, cols=4, total=12

    left=0, right=11, mid=5
      row=5/4=1, col=5%4=1 → matrix[1][1]=11
      11 > 3 → right=4

    left=0, right=4, mid=2
      row=2/4=0, col=2%4=2 → matrix[0][2]=5
      5 > 3 → right=1

    left=0, right=1, mid=0
      row=0/4=0, col=0%4=0 → matrix[0][0]=1
      1 < 3 → left=1

    left=1, right=1, mid=1
      row=1/4=0, col=1%4=1 → matrix[0][1]=3
      3 === 3 → return true ✓

    target = 13:

    left=0, right=11, mid=5
      matrix[1][1]=11, 11 < 13 → left=6

    left=6, right=11, mid=8
      matrix[2][0]=23, 23 > 13 → right=7

    left=6, right=7, mid=6
      matrix[1][2]=16, 16 > 13 → right=5

    left=6 > right=5 → return false ✓

**Comparison with Binary Search (#704):**
- #704: Binary search on a 1D array
- #74: Same binary search, just convert index to 2D coordinates
- One extra line of math, same algorithm

**Time Complexity:** O(log(m × n)) — binary search on all elements  
**Space Complexity:** O(1) — only pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- A sorted matrix with row continuity is just a 1D sorted array in disguise
- `row = index / cols` and `col = index % cols` converts 1D to 2D
- Same standard binary search — the only new thing is the coordinate conversion
- This pattern of "flatten a 2D structure mentally" applies to many matrix problems
- Builds directly on Binary Search (#704)