# 739. Daily Temperatures

**Difficulty:** Medium  
**Topics:** Array, Stack, Monotonic Stack  
**Link:** [LeetCode Problem](https://leetcode.com/problems/daily-temperatures/)

## Problem Description

Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `ith` day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0`.

### Examples

**Example 1:**

    Input: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
    Output: [1, 1, 4, 2, 1, 1, 0, 0]

**Example 2:**

    Input: temperatures = [30, 40, 50, 60]
    Output: [1, 1, 1, 0]

**Example 3:**

    Input: temperatures = [30, 60, 90]
    Output: [1, 1, 0]

### Constraints

- `1 <= temperatures.length <= 10^5`
- `30 <= temperatures[i] <= 100`

## Approach

### Monotonic Decreasing Stack

Maintain a stack of indices where temperatures are in decreasing order. When you find a temperature warmer than the stack's top, pop and calculate the gap — that's the answer for the popped day.

**Key Insight:** The stack holds indices of days still "waiting" for a warmer day. They're in decreasing temperature order because if a later day was already warmer, it would have popped the earlier one. When a new temperature is warmer than the top, the wait is over — pop and record the gap.

**Why "monotonic decreasing"?** The stack always maintains temperatures from bottom to top in decreasing order. Any temperature that breaks this pattern triggers pops — those popped days found their answer.

**Algorithm:**
1. Create answer array filled with 0
2. Create an empty stack (stores indices)
3. For each day i:
   - While stack is not empty AND current temp > temp at stack top:
     - Pop the top index
     - `answer[popped] = i - popped`
   - Push current index onto stack
4. Remaining indices in stack have no warmer day (answer stays 0)

**Walkthrough:**

    temps = [73, 74, 75, 71, 69, 72, 76, 73]
    stack = [], answer = [0,0,0,0,0,0,0,0]

    i=0 (73): stack empty → push 0
      stack: [0]

    i=1 (74): 74 > temps[0]=73 → pop 0, answer[0]=1-0=1. Push 1
      stack: [1]

    i=2 (75): 75 > temps[1]=74 → pop 1, answer[1]=2-1=1. Push 2
      stack: [2]

    i=3 (71): 71 < temps[2]=75 → push 3
      stack: [2, 3]

    i=4 (69): 69 < temps[3]=71 → push 4
      stack: [2, 3, 4]

    i=5 (72): 72 > temps[4]=69 → pop 4, answer[4]=5-4=1
             72 > temps[3]=71 → pop 3, answer[3]=5-3=2
             72 < temps[2]=75 → stop. Push 5
      stack: [2, 5]

    i=6 (76): 76 > temps[5]=72 → pop 5, answer[5]=6-5=1
             76 > temps[2]=75 → pop 2, answer[2]=6-2=4
             stack empty → stop. Push 6
      stack: [6]

    i=7 (73): 73 < temps[6]=76 → push 7
      stack: [6, 7]

    Done! Indices 6,7 stay in stack → answer stays 0

    answer = [1, 1, 4, 2, 1, 1, 0, 0] ✓

**Why O(n)?** Each index is pushed once and popped at most once → 2n operations total.

**Monotonic stack pattern applies to:**
- Next Greater Element problems
- Stock span problems
- Largest Rectangle in Histogram (#84)
- Trapping Rain Water (stack approach)

**Time Complexity:** O(n) — each element pushed and popped at most once  
**Space Complexity:** O(n) — stack can hold all indices in worst case

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Monotonic stack maintains elements in sorted order — pops when the pattern breaks
- Stack stores INDICES not values — we need indices to calculate the gap
- Elements remaining in the stack at the end have no answer (stay 0)
- Each element pushed once, popped once → O(n) despite the nested while loop
- New pattern! This "next greater element" pattern appears in many problems