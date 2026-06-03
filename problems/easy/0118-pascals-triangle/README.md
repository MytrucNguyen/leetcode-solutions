# 118. Pascal's Triangle

**Difficulty:** Easy  
**Topics:** Array, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/pascals-triangle/)

## Problem Description

Given an integer `numRows`, return the first `numRows` of **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

![alt text](PascalTriangleAnimated2.gif)

```
       1
      1 1
     1 2 1
    1 3 3 1
   1 4 6 4 1
```

### Examples

**Example 1:**
```
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

**Example 2:**
```
Input: numRows = 1
Output: [[1]]
```

### Constraints

- `1 <= numRows <= 30`

## Understanding the Problem

We need to build Pascal's Triangle row by row.

**What is Pascal's Triangle?**
```
Row 0:           1
Row 1:         1   1
Row 2:       1   2   1
Row 3:     1   3   3   1
Row 4:   1   4   6   4   1
```

**Key observations:**
- Every row starts and ends with **1**
- Each middle number is the **sum of the two numbers above it**

**Example - How Row 3 is built:**
```
Row 2:  [1,  2,  1]
         ↓ ↘ ↓ ↘ ↓
Row 3:  [1,  3,  3,  1]

First 3:  1 + 2 = 3
Second 3: 2 + 1 = 3
```

**The pattern:** Each row is built from the previous row by adding adjacent pairs!

## Approach

### Iterative Row Building

Build the triangle row by row. Each row uses the previous row to calculate its middle values.

**Algorithm:**

1. Create an empty result array
2. For each row `i` from 0 to numRows-1:
   - Create a new row starting with `[1]`
   - If this is not the first row:
     - Get the previous row
     - For each adjacent pair in the previous row:
       - Add their sum to the current row
     - Add `1` to end the row
   - Add the completed row to result
3. Return result

**Step-by-Step for numRows = 5:**
```
Goal: Build [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Initial: result = []

---

Iteration 0 (i=0):
  Create row: [1]
  First row, no previous row to reference
  Add [1] to result
  
  result = [[1]]

---

Iteration 1 (i=1):
  Create row: [1]
  Previous row: [1]
  
  Add adjacent pairs:
    Loop from j=0 to j<0 (previous.length-1 = 0)
    No pairs to add (loop doesn't run)
  
  Add 1 to end: [1, 1]
  Add [1,1] to result
  
  result = [[1], [1,1]]

---

Iteration 2 (i=2):
  Create row: [1]
  Previous row: [1, 1]
  
  Add adjacent pairs:
    j=0: previous[0] + previous[1]
         1 + 1 = 2
         row = [1, 2]
  
  Add 1 to end: [1, 2, 1]
  Add [1,2,1] to result
  
  result = [[1], [1,1], [1,2,1]]

---

Iteration 3 (i=3):
  Create row: [1]
  Previous row: [1, 2, 1]
  
  Add adjacent pairs:
    j=0: previous[0] + previous[1]
         1 + 2 = 3
         row = [1, 3]
    
    j=1: previous[1] + previous[2]
         2 + 1 = 3
         row = [1, 3, 3]
  
  Add 1 to end: [1, 3, 3, 1]
  Add [1,3,3,1] to result
  
  result = [[1], [1,1], [1,2,1], [1,3,3,1]]

---

Iteration 4 (i=4):
  Create row: [1]
  Previous row: [1, 3, 3, 1]
  
  Add adjacent pairs:
    j=0: previous[0] + previous[1]
         1 + 3 = 4
         row = [1, 4]
    
    j=1: previous[1] + previous[2]
         3 + 3 = 6
         row = [1, 4, 6]
    
    j=2: previous[2] + previous[3]
         3 + 1 = 4
         row = [1, 4, 6, 4]
  
  Add 1 to end: [1, 4, 6, 4, 1]
  Add [1,4,6,4,1] to result
  
  result = [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]

---

Return result ✓
```

**Why This Works:**

Each number in Pascal's Triangle equals the sum of the two numbers above it:
```
        1
       1 1
      1 2 1
     1 3 3 1

The 3 at row 3, position 1:
  Comes from row 2: 1 + 2 = 3

The 3 at row 3, position 2:
  Comes from row 2: 2 + 1 = 3
```

By starting each row with 1, adding pairs from the previous row, and ending with 1, we naturally build the correct triangle!

**Time Complexity:** O(numRows²) - We create numRows rows, each with increasing length  
**Space Complexity:** O(numRows²) - Store all rows in the result

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Build Pascal's Triangle row by row from top to bottom
- Every row starts and ends with 1
- Middle values are sums of adjacent pairs from the previous row
- Row `i` has `i+1` elements (0-indexed)
- Simple two-loop structure: outer loop for rows, inner loop for pairs
- First row is special case: just [1]
- This pattern appears in combinatorics and dynamic programming
- Foundation for understanding how to build 2D arrays based on previous values