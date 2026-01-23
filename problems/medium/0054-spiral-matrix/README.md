# 54. Spiral Matrix

**Difficulty:** Medium  
**Topics:** Array, Matrix, Simulation  
**Link:** [LeetCode Problem](https://leetcode.com/problems/spiral-matrix/)

## Problem Description

Given an `m x n` matrix, return all elements of the matrix in spiral order.

### Examples

**Example 1:**
```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Matrix:
1 2 3
4 5 6
7 8 9

Output: [1,2,3,6,9,8,7,4,5]

Visual path:
→ → →
    ↓
← ← ↓
↑   ↓
→ → ↑
```

**Example 2:**
```
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

Matrix:
1  2  3  4
5  6  7  8
9  10 11 12

Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Visual path:
→ → → →
      ↓
← ← ← ↓
↑     ↓
→ → → ↑
```

### Constraints

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 10`
- `-100 <= matrix[i][j] <= 100`

## Understanding Spiral Order

**Spiral order** means traversing the matrix in a spiral pattern from outside to inside.

**Direction pattern:** RIGHT → DOWN → LEFT → UP → (repeat, moving inward)

**Example visualization:**
```
Start → 1  2  3
        4  5  6
        7  8  9

Step 1: Go RIGHT
[1, 2, 3]

Step 2: Go DOWN
[1, 2, 3, 6, 9]

Step 3: Go LEFT
[1, 2, 3, 6, 9, 8, 7]

Step 4: Go UP
[1, 2, 3, 6, 9, 8, 7, 4]

Step 5: Go RIGHT (spiral inward)
[1, 2, 3, 6, 9, 8, 7, 4, 5]
```

## Approach

### Boundary Tracking Method

Instead of tracking visited cells, track **four boundaries** that shrink as we spiral inward.

**Four boundaries:**
- `top` - topmost unprocessed row
- `bottom` - bottommost unprocessed row
- `left` - leftmost unprocessed column
- `right` - rightmost unprocessed column

**Algorithm:**

1. **Initialize boundaries:**
   - `top = 0`, `bottom = rows - 1`
   - `left = 0`, `right = cols - 1`

2. **While boundaries are valid (`top <= bottom && left <= right`):**
   - **Go RIGHT:** Process row `top` from `left` to `right`, then `top++`
   - **Go DOWN:** Process column `right` from `top` to `bottom`, then `right--`
   - **Go LEFT** (if valid): Process row `bottom` from `right` to `left`, then `bottom--`
   - **Go UP** (if valid): Process column `left` from `bottom` to `top`, then `left++`

3. **Return result**

### Step-by-Step for [[1,2,3],[4,5,6],[7,8,9]]

**Initial state:**
```
top = 0, bottom = 2
left = 0, right = 2

Matrix:
1 2 3
4 5 6
7 8 9
```

---

**Step 1: Go RIGHT along top row**
```
Process row 0 from column 0 to 2
→ → →

1  2  3  ← Process this row
4  5  6
7  8  9

Collect: [1, 2, 3]
Update: top = 1
```

**State after step 1:**
```
top = 1, bottom = 2
left = 0, right = 2
```

---

**Step 2: Go DOWN along right column**
```
Process column 2 from row 1 to 2
      ↓
      ↓

1  2  3
4  5  6  ← Process
7  8  9  ← Process

Collect: [1,2,3,6,9]
Update: right = 1
```

**State after step 2:**
```
top = 1, bottom = 2
left = 0, right = 1
```

---

**Step 3: Go LEFT along bottom row**
```
Process row 2 from column 1 to 0
← ←

1  2  3
4  5  6
7  8  9  ← Process this row

Collect: [1,2,3,6,9,8,7]
Update: bottom = 1
```

**State after step 3:**
```
top = 1, bottom = 1
left = 0, right = 1
```

---

**Step 4: Go UP along left column**
```
Process column 0 from row 1 to 1
↑

1  2  3
4  5  6  ← Process
7  8  9

Collect: [1,2,3,6,9,8,7,4]
Update: left = 1
```

**State after step 4:**
```
top = 1, bottom = 1
left = 1, right = 1
```

---

**Step 5: Go RIGHT (spiral inward)**
```
Process row 1 from column 1 to 1

1  2  3
4  5  6  ← Process center
7  8  9

Collect: [1,2,3,6,9,8,7,4,5]
Update: top = 2
```

**State after step 5:**
```
top = 2, bottom = 1
top > bottom, exit loop
```

**Final result:** `[1,2,3,6,9,8,7,4,5]` ✓

---

### Why Check `if (top <= bottom)` Before Going LEFT?

**Edge case: Single row matrix `[[1, 2, 3]]`**
```
Initial: top = 0, bottom = 0, left = 0, right = 2

Step 1: Go RIGHT
Collect [1, 2, 3]
top = 1

Step 2: Go DOWN
top = 1, bottom = 0
Loop: for (let row = 1; row <= 0; row++)
Does not execute (1 > 0)
right = 1

Now: top = 1, bottom = 0
top > bottom!

If we don't check and go LEFT, we'd process the same row again!
With check: if (top <= bottom) → false, skip LEFT
```

### Why Check `if (left <= right)` Before Going UP?

**Edge case: Single column matrix `[[1], [2], [3]]`**
```
Initial: top = 0, bottom = 2, left = 0, right = 0

Step 1: Go RIGHT
Collect [1]
top = 1

Step 2: Go DOWN
Collect [2, 3]
right = -1

Now: left = 0, right = -1
left > right!

If we don't check and go UP, we'd process the same column again!
With check: if (left <= right) → false, skip UP
```

### Visual of Boundaries Shrinking
```
Initial:
┌─────────┐
│ 1  2  3 │ ← top
│ 4  5  6 │
│ 7  8  9 │ ← bottom
└─────────┘
↑         ↑
left    right

After RIGHT & DOWN:
  ┌─────┐
  │ 2  3 │ ← top
  │ 5  6 │ ← bottom
  └─────┘
  ↑     ↑
 left  right

After LEFT & UP:
    ┌─┐
    │5│ ← top & bottom
    └─┘
    ↑
  left & right

Boundaries crossed → Done!
```

**Time Complexity:** O(m × n) - Visit each cell exactly once  
**Space Complexity:** O(1) - Only use a few variables (output array doesn't count)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Boundary tracking avoids needing a visited array
- Four directions: RIGHT → DOWN → LEFT → UP, then repeat
- Shrink boundaries after each direction
- Check boundaries before going LEFT and UP to avoid single row/column edge cases
- Pattern: Process a layer, shrink inward, repeat
- This technique applies to many matrix traversal problems
- Think in terms of layers/shells spiraling inward