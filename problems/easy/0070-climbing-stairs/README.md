# 70. Climbing Stairs

**Difficulty:** Easy  
**Topics:** Math, Dynamic Programming, Memoization  
**Link:** [LeetCode Problem](https://leetcode.com/problems/climbing-stairs/)

## Problem Description

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb **1 or 2 steps**. In how many distinct ways can you climb to the top?

### Examples

**Example 1:**
```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Example 2:**
```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

### Constraints

- `1 <= n <= 45`

## Understanding the Pattern

This problem follows the Fibonacci sequence! 

**Pattern:**
```
n = 1 → 1 way
n = 2 → 2 ways
n = 3 → 3 ways (1+2)
n = 4 → 5 ways (2+3)
n = 5 → 8 ways (3+5)
```

**Why?** To reach step `n`, you can come from:
- Step `n-1` (take 1 step) → All ways to reach `n-1`
- Step `n-2` (take 2 steps) → All ways to reach `n-2`

**Formula:**
```
ways(n) = ways(n-1) + ways(n-2)
```

This is exactly the Fibonacci formula!

## Approach

### Iterative Solution (Bottom-Up Dynamic Programming)

Instead of using recursion (which recalculates the same values), build the solution from the bottom up. Start with the base cases and compute each subsequent value once.

**Algorithm:**
1. Handle base cases: n=1 returns 1, n=2 returns 2
2. Initialize two variables for the previous two values
3. For each step from 3 to n:
   - Calculate current = previous1 + previous2
   - Shift variables forward (previous2 = previous1, previous1 = current)
4. Return the final result

**Example for n = 5:**
```
Start: prev2 = 1 (n=1), prev1 = 2 (n=2)

i=3: current = 2 + 1 = 3, then prev2=2, prev1=3
i=4: current = 3 + 2 = 5, then prev2=3, prev1=5
i=5: current = 5 + 3 = 8, then prev2=5, prev1=8

Return 8
```

**Time Complexity:** O(n) - Single loop through n  
**Space Complexity:** O(1) - Only using two variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Many problems that seem complex are actually variations of well-known patterns (Fibonacci)
- Bottom-up dynamic programming builds solutions from base cases
- Iterative solutions can be more efficient than recursive ones (O(1) space vs O(n) stack)
- Recognizing the recurrence relation (ways(n) = ways(n-1) + ways(n-2)) is the key insight
- Alternative approaches include recursion with memoization or pure math formulas