# 48. Rotate Image

**Difficulty:** Medium  
**Topics:** Array, Math, Matrix  
**Link:** [LeetCode Problem](https://leetcode.com/problems/rotate-image/)

## Problem Description

You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90 degrees (clockwise)**.

You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

### Examples

**Example 1:**
```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Before:          After:
1 2 3            7 4 1
4 5 6     →      8 5 2
7 8 9            9 6 3
```

**Example 2:**
```
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

Before:              After:
5  1  9  11          15 13 2  5
2  4  8  10    →     14 3  4  1
13 3  6  7           12 6  8  9
15 14 12 16          16 7  10 11
```

### Constraints

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`

## Understanding Rotation

**90° clockwise rotation pattern:**
```
Original:        Rotated:
1 2 3            7 4 1
4 5 6     →      8 5 2
7 8 9            9 6 3

Left column → Top row (reading bottom to top)
Middle column → Middle row (reading bottom to top)
Right column → Bottom row (reading bottom to top)
```

**Specific element movements:**
```
matrix[2][0] = 7 → matrix[0][0] = 7
matrix[1][0] = 4 → matrix[0][1] = 4
matrix[0][0] = 1 → matrix[0][2] = 1
```

## Approach

### Transpose + Reverse Rows

The key insight: A 90° clockwise rotation can be achieved by two simple operations:

1. **Transpose** the matrix (flip along main diagonal)
2. **Reverse** each row

**Step-by-step for [[1,2,3],[4,5,6],[7,8,9]]:**

#### **Step 1: Transpose (swap matrix[i][j] with matrix[j][i])**
```
Original:        Transpose:
1 2 3            1 4 7
4 5 6     →      2 5 8
7 8 9            3 6 9

What happened:
- Row 1 [1,2,3] became Column 1 [1,2,3]
- Row 2 [4,5,6] became Column 2 [4,5,6]
- Row 3 [7,8,9] became Column 3 [7,8,9]

Or element by element:
- matrix[0][1] = 2 ↔ matrix[1][0] = 4
- matrix[0][2] = 3 ↔ matrix[2][0] = 7
- matrix[1][2] = 6 ↔ matrix[2][1] = 8
```

**How to transpose:**
```typescript
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        // Swap matrix[i][j] with matrix[j][i]
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
}
```

**Why `j = i + 1`?**
- We only swap above the diagonal
- This avoids swapping twice (which would undo the swap!)

**Visual of what we swap:**
```
Matrix:
1 2 3
4 5 6
7 8 9

Swaps (only above diagonal):
  2↔4, 3↔7, 6↔8
```

#### **Step 2: Reverse each row**
```
After Transpose: After Reverse:
1 4 7            7 4 1
2 5 8     →      8 5 2
3 6 9            9 6 3
```

**How to reverse a row:**
```typescript
for (let i = 0; i < n; i++) {
    matrix[i].reverse();
}
```

Or manually with two pointers:
```typescript
for (let i = 0; i < n; i++) {
    let left = 0;
    let right = n - 1;
    while (left < right) {
        [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
        left++;
        right--;
    }
}
```

### Complete Example
```
Original:
1 2 3
4 5 6
7 8 9

Step 1 - Transpose:
Swap (0,1) with (1,0): 2 ↔ 4
1 4 3
2 5 6
7 8 9

Swap (0,2) with (2,0): 3 ↔ 7
1 4 7
2 5 6
3 8 9

Swap (1,2) with (2,1): 6 ↔ 8
1 4 7
2 5 8
3 6 9

Step 2 - Reverse each row:
Row 0: [1,4,7] → [7,4,1]
Row 1: [2,5,8] → [8,5,2]
Row 2: [3,6,9] → [9,6,3]

Final:
7 4 1
8 5 2
9 6 3 ✓
```

### Why This Works

**Mathematical perspective:**
- Transpose flips across main diagonal (row ↔ column)
- Reversing rows flips horizontally
- These two operations combined = 90° clockwise rotation

**Pattern:**
```
Element at (i, j) moves to (j, n-1-i)

Example with n=3:
(0,0) → (0,2)  // 1 moves to top-right
(0,2) → (2,2)  // 3 moves to bottom-right
(2,2) → (2,0)  // 9 moves to bottom-left
(2,0) → (0,0)  // 7 moves to top-left
```

**Time Complexity:** O(n²) - Visit each element once for transpose, once for reverse  
**Space Complexity:** O(1) - Modify in-place, no extra matrix

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- 90° clockwise rotation = Transpose + Reverse rows
- Transpose: Flip along main diagonal (swap matrix[i][j] with matrix[j][i])
- Only swap elements above diagonal to avoid double-swapping
- Array destructuring makes swapping elegant: `[a, b] = [b, a]`
- In-place modification requires careful coordination
- This pattern works for any n×n matrix
- For 90° counterclockwise: Reverse rows first, then transpose (or transpose + reverse columns)