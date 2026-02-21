# 191. Number of 1 Bits

**Difficulty:** Easy  
**Topics:** Divide and Conquer, Bit Manipulation  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-1-bits/)

## Problem Description

Given a positive integer `n`, write a function that returns the number of set bits in its binary representation. Also known as the **Hamming weight**.

### Examples

**Example 1:**
```
Input: n = 11
Output: 3
Explanation: 11 in binary is 1011, which has three 1s.
```

**Example 2:**
```
Input: n = 128
Output: 1
Explanation: 128 in binary is 10000000, which has one 1.
```

**Example 3:**
```
Input: n = 2147483645
Output: 30
```

### Constraints

- `1 <= n <= 2^31 - 1`

## Approach

### Bit Shift (Simple)
Check each bit one by one by shifting right and checking if the last bit is 1.
- **Time Complexity:** O(32) — always checks all 32 bits
- **Space Complexity:** O(1)

### Brian Kernighan's Trick (Optimal)
Use `n & (n - 1)` to remove the lowest set bit each iteration. Count how many times until n becomes 0.

**Key Insight:** `n & (n - 1)` always removes the rightmost 1-bit. This means we only loop as many times as there are 1-bits, not all 32 bits.

**Why does `n & (n - 1)` work?**
Subtracting 1 flips the lowest set bit and all bits below it. ANDing with the original clears that lowest bit.

**Algorithm:**
1. Initialize a counter to 0
2. While n is not 0:
   - Apply `n = n & (n - 1)` to remove the lowest 1-bit
   - Increment counter
3. Return counter

**Walkthrough:**
```
n = 11 → 1011

Step 1: n & (n-1) = 1011 & 1010 = 1010, count = 1
Step 2: n & (n-1) = 1010 & 1001 = 1000, count = 2
Step 3: n & (n-1) = 1000 & 0111 = 0000, count = 3

n = 0, return 3 ✓
```
```
n = 128 → 10000000

Step 1: n & (n-1) = 10000000 & 01111111 = 00000000, count = 1

n = 0, return 1 ✓ (only one loop for one 1-bit!)
```

**Time Complexity:** O(k) where k is the number of 1-bits (at most 32)  
**Space Complexity:** O(1)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- `n & (n - 1)` removes the lowest set bit — one of the most useful bit tricks
- This same trick is used in Power of Two (#231): `n & (n - 1) === 0` means only one bit is set
- Brian Kernighan's trick only loops k times (number of 1-bits) vs always 32
- Bit manipulation problems often have elegant O(1) space solutions