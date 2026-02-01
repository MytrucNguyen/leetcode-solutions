# 509. Fibonacci Number

**Difficulty:** Easy  
**Topics:** Math, Dynamic Programming, Recursion, Memoization  
**Link:** [LeetCode Problem](https://leetcode.com/problems/fibonacci-number/)

## Problem Description

The **Fibonacci numbers**, commonly denoted `F(n)` form a sequence, called the **Fibonacci sequence**, such that each number is the sum of the two preceding ones, starting from `0` and `1`. That is,
```
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1
```

Given `n`, calculate `F(n)`.

### Examples

**Example 1:**
```
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1
```

**Example 2:**
```
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2
```

**Example 3:**
```
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3
```

### Constraints

- `0 <= n <= 30`

## Understanding the Problem

We need to calculate the nth Fibonacci number, where each number is the sum of the two before it.

**The sequence:**
```
F(0) = 0
F(1) = 1
F(2) = 1  (0 + 1)
F(3) = 2  (1 + 1)
F(4) = 3  (1 + 2)
F(5) = 5  (2 + 3)
F(6) = 8  (3 + 5)
```

**Key insight:** Each number only depends on the **previous two numbers**. We don't need to store the entire sequence!

## Approach

### Iterative Bottom-Up (Optimal)

Instead of recursion (which recalculates the same values), build up from the base cases using only two variables.

**Why not pure recursion?**

Recursion recalculates the same values many times:
```
F(5)
  F(4)           F(3)
    F(3)  F(2)     F(2)  F(1)

F(3) is calculated TWICE
F(2) is calculated THREE times
Lots of wasted work! → O(2ⁿ)
```

**Bottom up avoids this:**
```
Each value calculated only ONCE
F(0) → F(1) → F(2) → F(3) → F(4) → F(5)
No repeated work! → O(n)
```

**Algorithm:**

1. Handle base cases: n=0 returns 0, n=1 returns 1
2. Track two variables: prev2 (F(n-2)) and prev1 (F(n-1))
3. Loop from 2 to n:
   - Calculate current = prev2 + prev1
   - Shift: prev2 = prev1, prev1 = current
4. Return prev1

**Step-by-Step for n = 5:**
```
Base cases: prev2 = 0 (F(0)), prev1 = 1 (F(1))

i=2: current = 0 + 1 = 1
     prev2 = 1, prev1 = 1

i=3: current = 1 + 1 = 2
     prev2 = 1, prev1 = 2

i=4: current = 1 + 2 = 3
     prev2 = 2, prev1 = 3

i=5: current = 2 + 3 = 5
     prev2 = 3, prev1 = 5

Return prev1 = 5 ✓
```

**Why only two variables?**

Each number only needs the previous two:
```
To calculate F(5):
  Only need F(4) and F(3)
  Don't need F(2), F(1), F(0) anymore!

So we only track:
  prev2 = F(n-2)
  prev1 = F(n-1)
  Shift forward each step!
```

**Time Complexity:** O(n) - Single pass from 2 to n  
**Space Complexity:** O(1) - Only two variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- This is the same pattern as Climbing Stairs!
- Each number only depends on the previous two
- Bottom-up is much faster than recursion: O(n) vs O(2ⁿ)
- Only need two variables, not an entire array
- Base cases are F(0)=0 and F(1)=1
- Shifting variables forward is the key technique
- Pure recursion wastes time recalculating same values
- This pattern (tracking previous values) applies to many DP problems