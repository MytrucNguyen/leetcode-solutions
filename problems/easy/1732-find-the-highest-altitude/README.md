# 1732. Find the Highest Altitude

**Difficulty:** Easy  
**Topics:** Array, Prefix Sum  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-highest-altitude/)

## Problem Description

There is a biker going on a road trip. The road trip consists of `n + 1` points at different altitudes. The biker starts his trip on point `0` with altitude equal `0`.

You are given an integer array `gain` of length `n` where `gain[i]` is the **net gain in altitude** between points `i` and `i + 1`. Return the **highest altitude** of a point.

### Examples

**Example 1:**

    Input: gain = [-5, 1, 5, 0, -7]
    Output: 1
    Explanation: Altitudes are [0, -5, -4, 1, 1, -6]. Highest is 1.

**Example 2:**

    Input: gain = [-4, -3, -2, -1, 4, 3, 2]
    Output: 0
    Explanation: Altitudes are [0, -4, -7, -9, -10, -6, -3, -1]. Highest is 0.

### Constraints

- `n == gain.length`
- `1 <= n <= 100`
- `-100 <= gain[i] <= 100`

## Approach

### Running Sum with Max Tracking

Keep a running altitude (prefix sum) and track the maximum seen. Start at 0.

**Key Insight:** Each altitude is the prefix sum of gains up to that point. Just accumulate and track the max — don't even need to store all altitudes.

**Algorithm:**

1. Set `altitude = 0`, `maxAlt = 0`
2. For each gain:
    - `altitude += gain`
    - `maxAlt = max(maxAlt, altitude)`
3. Return maxAlt

**Walkthrough:**

    gain = [-5, 1, 5, 0, -7]
    altitude = 0, maxAlt = 0

    -5: altitude = -5, maxAlt = 0
     1: altitude = -4, maxAlt = 0
     5: altitude = 1,  maxAlt = 1
     0: altitude = 1,  maxAlt = 1
    -7: altitude = -6, maxAlt = 1

    Return 1 ✓

**Time Complexity:** O(n) — single pass  
**Space Complexity:** O(1) — two variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Prefix sum in its simplest form — running total + track max
- Starting altitude (0) could be the highest — initialize maxAlt to 0
- Don't need to store all altitudes — just track current and max
