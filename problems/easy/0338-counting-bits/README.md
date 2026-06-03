# 338. Counting Bits

**Difficulty:** Easy  
**Topics:** Dynamic Programming, Bit Manipulation  
**Link:** [LeetCode Problem](https://leetcode.com/problems/counting-bits/)

## Problem Description

Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (`0 <= i <= n`), `ans[i]` is the **number of 1's** in the binary representation of `i`.

### Examples

**Example 1:**

    Input: n = 2
    Output: [0, 1, 1]
    Explanation:
      0 → 0   → 0 ones
      1 → 1   → 1 one
      2 → 10  → 1 one

**Example 2:**

    Input: n = 5
    Output: [0, 1, 1, 2, 1, 2]
    Explanation:
      0 → 000 → 0    3 → 011 → 2
      1 → 001 → 1    4 → 100 → 1
      2 → 010 → 1    5 → 101 → 2

### Constraints

- `0 <= n <= 10^5`

**Follow up:** Can you do it in O(n) time and without using the built-in popcount function?

## Approach

### DP with Brian Kernighan's Trick

Use `i & (i - 1)` to remove the lowest set bit. The number of 1-bits in `i` is one more than the number in `i & (i - 1)` — which we've already computed!

**Key Insight:** You learned in Number of 1 Bits (#191) that `n & (n - 1)` removes the lowest set bit. So `countBits[i] = countBits[i & (i - 1)] + 1`. The smaller number `i & (i - 1)` was already processed since it's always less than `i`.

**Recurrence:**

    dp[0] = 0  (base case)
    dp[i] = dp[i & (i - 1)] + 1

**Algorithm:**
1. Create array of size `n + 1`, set `dp[0] = 0`
2. For each `i` from 1 to n:
   - `dp[i] = dp[i & (i - 1)] + 1`
3. Return the array

**Walkthrough:**

    n = 5

    dp[0] = 0                              (base case)
    dp[1] = dp[1 & 0] + 1 = dp[0] + 1 = 1    (001 & 000 = 000)
    dp[2] = dp[2 & 1] + 1 = dp[0] + 1 = 1    (010 & 001 = 000)
    dp[3] = dp[3 & 2] + 1 = dp[2] + 1 = 2    (011 & 010 = 010)
    dp[4] = dp[4 & 3] + 1 = dp[0] + 1 = 1    (100 & 011 = 000)
    dp[5] = dp[5 & 4] + 1 = dp[4] + 1 = 2    (101 & 100 = 100)

    Result: [0, 1, 1, 2, 1, 2] ✓

**Why `i & (i - 1)` is always less than `i`:** Removing a bit makes the number smaller. So `dp[i & (i - 1)]` was already computed — perfect for bottom-up DP!

**Connection to your existing problems:**
- Number of 1 Bits (#191): `n & (n - 1)` removes lowest bit → count with a loop
- **Counting Bits (#338): Use the same trick as a DP recurrence → build all answers at once**

**Time Complexity:** O(n) — one operation per number  
**Space Complexity:** O(n) — the result array

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- DP + bit manipulation — `dp[i] = dp[i & (i-1)] + 1` is one of the cleanest recurrences
- Reuses the Brian Kernighan trick from #191 in a DP context
- O(n) time with no popcount — each answer builds on a previous one
- `i & (i - 1)` is always smaller than `i` — guarantees we've already computed it