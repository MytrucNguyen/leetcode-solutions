# 1431. Kids With the Greatest Number of Candies

**Difficulty:** Easy  
**Topics:** Array  
**Link:** [LeetCode Problem](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

## Problem Description

There are `n` kids with candies. You are given an integer array `candies`, where each `candies[i]` represents the number of candies the `ith` kid has, and an integer `extraCandies`, denoting the number of extra candies that you have.

Return a boolean array `result` of length `n`, where `result[i]` is `true` if, after giving the `ith` kid all the `extraCandies`, they will have the **greatest** number of candies among all the kids, or `false` otherwise.

Note that multiple kids can have the greatest number of candies.

### Examples

**Example 1:**

    Input: candies = [2,3,5,1,3], extraCandies = 3
    Output: [true,true,true,false,true]

**Example 2:**

    Input: candies = [4,2,1,1,2], extraCandies = 1
    Output: [true,false,false,false,false]

**Example 3:**

    Input: candies = [12,1,12], extraCandies = 10
    Output: [true,false,true]

### Constraints

- `n == candies.length`
- `2 <= n <= 100`
- `1 <= candies[i] <= 100`
- `1 <= extraCandies <= 50`

## Approach

### Find Max, Then Compare

Find the current maximum candies. For each kid, check if their candies + extra ≥ max.

**Algorithm:**

1. Find the maximum value in candies
2. For each kid: `candies[i] + extraCandies >= max`

**Walkthrough:**

    candies = [2,3,5,1,3], extraCandies = 3
    max = 5

    2+3=5 ≥ 5 → true
    3+3=6 ≥ 5 → true
    5+3=8 ≥ 5 → true
    1+3=4 < 5 → false
    3+3=6 ≥ 5 → true

    Result: [true,true,true,false,true] ✓

**Time Complexity:** O(n) — find max + one pass  
**Space Complexity:** O(n) — result array

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Find the benchmark (max), then compare each element against it
- Simple but practical — good warm-up for array thinking
