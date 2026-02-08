# 231. Power of Two

**Difficulty:** Easy  
**Topics:** Math, Bit Manipulation, Recursion  
**Link:** [LeetCode Problem](https://leetcode.com/problems/power-of-two/)

## Problem Description

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2^x`.

### Examples

**Example 1:**
```
Input: n = 1
Output: true
Explanation: 2^0 = 1
```

**Example 2:**
```
Input: n = 16
Output: true
Explanation: 2^4 = 16
```

**Example 3:**
```
Input: n = 3
Output: false
```

### Constraints

- `-2^31 <= n <= 2^31 - 1`

**Follow up:** Could you solve it without loops/recursion?

## Understanding the Problem

We need to determine if a number is a power of 2.

**Powers of 2:**
```
2^0 = 1
2^1 = 2
2^2 = 4
2^3 = 8
2^4 = 16
2^5 = 32
...
```

**Key observation:** What's special about powers of 2 in binary?
```
Binary representation:
1  = 00001
2  = 00010
4  = 00100
8  = 01000
16 = 10000
32 = 100000
```

**Powers of 2 have EXACTLY ONE "1" bit in binary!**

**Non-powers of 2:**
```
3  = 00011  (two 1s)
5  = 00101  (two 1s)
6  = 00110  (two 1s)
7  = 00111  (three 1s)
```

**Non-powers have MULTIPLE "1" bits!**

## Approach

### Bit Manipulation Trick

There's an elegant one-line solution using bit manipulation!

**The Trick:** For any power of 2, `n & (n - 1) = 0`

**Why does this work?**

When you subtract 1 from a power of 2:
- The single "1" bit becomes "0"
- All bits to the right become "1"

**Example: n = 8**
```
n     = 8 = 1000
n - 1 = 7 = 0111

AND them:
    1000
  & 0111
  ------
    0000 = 0

No overlapping bits!
```

**Example: n = 16**
```
n     = 16 = 10000
n - 1 = 15 = 01111

AND them:
    10000
  & 01111
  -------
    00000 = 0

All bits cancel!
```

**For non-powers of 2, this doesn't work:**

**Example: n = 6**
```
n     = 6 = 0110
n - 1 = 5 = 0101

AND them:
    0110
  & 0101
  ------
    0100 = 4 (NOT 0!)

Overlapping bits remain!
```

**Algorithm:**

1. Check if `n > 0` (powers of 2 are positive, excludes 0)
2. Check if `n & (n - 1) === 0` (the bit manipulation trick)
3. If both are true, it's a power of 2

**Edge cases:**
- `n = 0`: Not a power of 2
- `n < 0`: Negative numbers are not powers of 2

### **Step-by-Step for n = 16:**
```
Input: n = 16

Step 1: Check if n > 0
  Is 16 > 0? YES ✓

Step 2: Calculate n & (n - 1)
  n = 16 = 10000 (binary)
  n - 1 = 15 = 01111 (binary)
  
  Binary AND:
      10000  (16)
    & 01111  (15)
    -------
      00000  (0)

Step 3: Check if result === 0
  Is 0 === 0? YES ✓

Both conditions true!
Return: true ✓

Explanation: 16 = 2^4
```

### **Step-by-Step for n = 3:**
```
Input: n = 3

Step 1: Check if n > 0
  Is 3 > 0? YES ✓

Step 2: Calculate n & (n - 1)
  n = 3 = 0011 (binary)
  n - 1 = 2 = 0010 (binary)
  
  Binary AND:
      0011  (3)
    & 0010  (2)
    ------
      0010  (2)

Step 3: Check if result === 0
  Is 2 === 0? NO ✗

Second condition false!
Return: false ✓

Explanation: 3 is not a power of 2 (between 2^1=2 and 2^2=4)
```

### **Step-by-Step for n = 1:**
```
Input: n = 1

Step 1: Check if n > 0
  Is 1 > 0? YES ✓

Step 2: Calculate n & (n - 1)
  n = 1 = 0001 (binary)
  n - 1 = 0 = 0000 (binary)
  
  Binary AND:
      0001  (1)
    & 0000  (0)
    ------
      0000  (0)

Step 3: Check if result === 0
  Is 0 === 0? YES ✓

Both conditions true!
Return: true ✓

Explanation: 1 = 2^0
```

### **Step-by-Step for n = 0:**
```
Input: n = 0

Step 1: Check if n > 0
  Is 0 > 0? NO ✗

Stop here! First condition fails.

Return: false ✓

Explanation: 0 is not a power of 2
```

### **Step-by-Step for n = -16:**
```
Input: n = -16

Step 1: Check if n > 0
  Is -16 > 0? NO ✗

Stop here! First condition fails.

Return: false ✓

Explanation: Negative numbers cannot be powers of 2
```

**Why This Works:**

Powers of 2 in binary have a special structure:
```
    8 = 1000  (one "1" bit)
    7 = 0111  (subtract 1: flip that bit and all after)
-----------------
8 & 7 = 0000  (no overlap!)
```

Non-powers have multiple "1" bits, so some remain after AND:
```
    6 = 0110  (two "1" bits)
    5 = 0101
-----------------
6 & 5 = 0100  (still has "1" bits!)
```

**Time Complexity:** O(1) - Single bitwise operation  
**Space Complexity:** O(1) - No extra space needed

### **Alternative Approaches (Not Recommended):**

**1. Loop Division:**
```typescript
while (n > 1 && n % 2 === 0) {
    n = n / 2;
}
return n === 1;
```
**Problem:** O(log n) time, uses loops (problem says avoid loops)

**2. Counting 1 bits:**
```typescript
// Count number of "1" bits, should be exactly 1
```
**Problem:** More complex, less elegant

**3. Math:**
```typescript
return n > 0 && Math.log2(n) % 1 === 0;
```
**Problem:** Floating point precision issues

**The bit manipulation solution is the best!**

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Powers of 2 have exactly ONE "1" bit in binary representation
- `n - 1` flips all bits from the rightmost "1" onward
- `n & (n - 1)` cancels all bits for powers of 2 (result is 0)
- `n & (n - 1)` leaves some bits for non-powers (result is not 0)
- Must check `n > 0` to exclude 0 and negative numbers
- One-line solution: `n > 0 && (n & (n - 1)) === 0`
- Perfect example of elegant bit manipulation
- O(1) time and space - optimal
- This pattern appears in many bit manipulation problems
- Understanding binary representation is crucial for bit manipulation
- AND operation: both bits must be 1 to get 1