# 50. Pow(x, n)

**Difficulty:** Medium  
**Topics:** Math, Recursion  
**Link:** [LeetCode Problem](https://leetcode.com/problems/powx-n/)

## Problem Description

Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., `x^n`).

### Examples

**Example 1:**

    Input: x = 2.00000, n = 10
    Output: 1024.00000

**Example 2:**

    Input: x = 2.10000, n = 3
    Output: 9.26100

**Example 3:**

    Input: x = 2.00000, n = -2
    Output: 0.25000
    Explanation: 2^-2 = 1/2^2 = 1/4 = 0.25

### Constraints

- `-100.0 < x < 100.0`
- `-2^31 <= n <= 2^31 - 1`
- `n` is an integer
- Either `x` is not zero or `n > 0`
- `-10^4 <= x^n <= 10^4`

## Approach

### Binary Exponentiation (Fast Power)

Instead of multiplying x by itself n times (O(n)), square x and halve n each step (O(log n)).

**Key Insight:** Any exponent can be broken down using the binary representation:

    x^10 = x^(1010 in binary) = x^8 × x^2

Or recursively:

- If n is even: x^n = (x^2)^(n/2)
- If n is odd: x^n = x × (x^2)^((n-1)/2)

Each step squares x and halves n, so we only need log(n) multiplications.

**Handling negatives:** If n < 0, compute `1 / x^|n|`. Edge case: n = -2^31 can't be negated to a positive int (overflow), so we handle it carefully.

**Algorithm (iterative):**

1. If n < 0: x = 1/x, n = -n (use absolute value)
2. Start with result = 1
3. While n > 0:
    - If n is odd: result × = x (pick up this factor)
    - x = x × x (square the base)
    - n = floor(n / 2) (halve the exponent)
4. Return result

**Walkthrough:**

    x = 2.0, n = 10

    result=1, x=2, n=10

    n=10 (even): x = 2×2 = 4,    n = 5
    n=5 (odd):  result = 1×4 = 4, x = 4×4 = 16,  n = 2
    n=2 (even): x = 16×16 = 256, n = 1
    n=1 (odd):  result = 4×256 = 1024, x = 256×256, n = 0

    Return 1024 ✓ (4 steps instead of 10!)

    x = 2.0, n = -2

    n < 0: x = 1/2 = 0.5, n = 2

    result=1, x=0.5, n=2

    n=2 (even): x = 0.5×0.5 = 0.25, n = 1
    n=1 (odd):  result = 1×0.25 = 0.25, n = 0

    Return 0.25 ✓

**Why O(log n)?** Each step halves n. Starting from n, it takes log2(n) halvings to reach 0. Each step does constant work (one multiply, one square).

**Time Complexity:** O(log n) — halve n each step  
**Space Complexity:** O(1) — iterative approach uses constant space

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Binary exponentiation: square and halve instead of multiply one at a time
- O(log n) vs O(n) — massive speedup for large exponents
- Handle negative exponents by inverting x and using |n|
- Watch for integer overflow when negating n = -2^31
- This algorithm is used in cryptography, modular arithmetic, and matrix exponentiation
