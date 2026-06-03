# 202. Happy Number

**Difficulty:** Easy  
**Topics:** Hash Table, Math, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/happy-number/)

## Problem Description

Write an algorithm to determine if a number `n` is **happy**.

A **happy number** is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it **loops endlessly in a cycle** which does not include 1.
- Those numbers for which this process **ends in 1** are happy.

Return `true` if `n` is a happy number, and `false` if not.

### Examples

**Example 1:**
```
Input: n = 19
Output: true
Explanation: 
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1
```

**Example 2:**
```
Input: n = 2
Output: false
```

### Constraints

- `1 <= n <= 2^31 - 1`

## Understanding the Problem

We need to determine if repeatedly calculating the sum of squared digits eventually reaches 1.

**What is "sum of squares of digits"?**
```
For n = 19:
  Digits: 1, 9
  Sum: 1² + 9² = 1 + 81 = 82
```

**Two possible outcomes:**
1. **Reach 1** → Happy number! Return true
2. **See a number twice** → Stuck in a cycle! Return false

**Example of a cycle:**
```
2 → 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4
                                              ↑
                                         Seen before!
```

## Approach

### Hash Set Cycle Detection

Use a set to track numbers we've seen. If we see a number twice, we're in a cycle.

**Algorithm:**

1. Create a set to track seen numbers
2. While n is not 1:
   - If n is already in the set → cycle detected → return false
   - Add n to the set
   - Calculate sum of squares of digits → update n
3. If we exit the loop, n must be 1 → return true

**Helper function - Get sum of squares:**
```
1. Initialize total = 0
2. While n > 0:
   - Get last digit: n % 10
   - Square it and add to total
   - Remove last digit: n // 10
3. Return total
```

**Time Complexity:** O(log n) - Number of digits in n  
**Space Complexity:** O(log n) - Set to store seen numbers

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Use hash set to detect cycles in iterative processes
- Extract digits using modulo (%) and integer division (//)
- Two possible outcomes: reach target or detect cycle
- Similar pattern to Linked List Cycle but with numbers
- Common interview pattern for detecting infinite loops