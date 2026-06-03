# 279. Perfect Squares

**Difficulty:** Medium  
**Topics:** Math, Dynamic Programming, Breadth-First Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/perfect-squares/)

## Problem Description

Given an integer `n`, return the least number of perfect square numbers that sum to `n`.

A **perfect square** is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, `1`, `4`, `9`, and `16` are perfect squares while `3` and `11` are not.

### Examples

**Example 1:**

    Input: n = 12
    Output: 3
    Explanation: 12 = 4 + 4 + 4

**Example 2:**

    Input: n = 13
    Output: 2
    Explanation: 13 = 4 + 9

### Constraints

- `1 <= n <= 10^4`

## Approach

### DP — Coin Change with Perfect Squares as Coins

Same pattern as Coin Change (#322) but the "coins" are perfect squares (1, 4, 9, 16, 25...). Find the fewest "coins" that sum to n.

**Key Insight:** This is literally Coin Change where the coin denominations are all perfect squares up to n. The recurrence is identical:

    dp[i] = min(dp[i - square] + 1) for each perfect square ≤ i

**Comparison with Coin Change (#322):**
- Coin Change: Given coins, fewest to make amount → `dp[i] = min(dp[i - coin] + 1)`
- Perfect Squares: Coins are 1,4,9,16..., fewest to make n → `dp[i] = min(dp[i - square] + 1)`
- Identical DP, just different "coins"

**Algorithm:**
1. Generate all perfect squares up to n: 1, 4, 9, 16, ...
2. Create `dp` array of size n+1, fill with Infinity, set `dp[0] = 0`
3. For each i from 1 to n:
   - For each perfect square ≤ i:
     - `dp[i] = min(dp[i], dp[i - square] + 1)`
4. Return `dp[n]`

**Walkthrough:**

    n = 12, squares = [1, 4, 9]

    dp[0] = 0
    dp[1] = dp[0]+1 = 1                  (1)
    dp[2] = dp[1]+1 = 2                  (1+1)
    dp[3] = dp[2]+1 = 3                  (1+1+1)
    dp[4] = min(dp[3]+1, dp[0]+1) = 1    (4)
    dp[5] = min(dp[4]+1, dp[1]+1) = 2    (4+1)
    dp[6] = min(dp[5]+1, dp[2]+1) = 3    (1+1+4) wait...
            actually dp[6]: try 1→dp[5]+1=3, try 4→dp[2]+1=3, → 3
    dp[7] = min(dp[6]+1, dp[3]+1) = 4    hmm
            try 1→dp[6]+1=4, try 4→dp[3]+1=4 → 4
    dp[8] = min(dp[7]+1, dp[4]+1) = 2    (4+4)
    dp[9] = min(dp[8]+1, dp[5]+1, dp[0]+1) = 1  (9)
    dp[10] = min(dp[9]+1, dp[6]+1, dp[1]+1) = 2  (9+1)
    dp[11] = min(dp[10]+1, dp[7]+1, dp[2]+1) = 3  (9+1+1)
    dp[12] = min(dp[11]+1, dp[8]+1, dp[3]+1) = 3  (4+4+4)

    Return 3 ✓

**Time Complexity:** O(n × √n) — for each i up to n, try √n perfect squares  
**Space Complexity:** O(n) — dp array

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Coin Change in disguise — same DP, different "coins"
- Perfect squares as coins: 1, 4, 9, 16, 25...
- Recognizing "this is Coin Change with X" is a powerful interview skill
- Every positive integer can be represented as sum of at most 4 squares (Lagrange's theorem)
- Pattern recognition: seeing the same DP across different problem skins