# 55. Jump Game

**Difficulty:** Medium  
**Topics:** Array, Dynamic Programming, Greedy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/jump-game/)

## Problem Description

You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

### Examples

**Example 1:**
```
Input: nums = [2, 3, 1, 1, 4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**
```
Input: nums = [3, 2, 1, 0, 4]
Output: false
Explanation: You will always arrive at index 3 where the value is 0, stuck.
```

### Constraints

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 10^5`

## Approach

### Greedy — Track Farthest Reachable

Walk through the array tracking the farthest index you can reach. If at any point the current index exceeds the farthest, you're stuck. If farthest reaches or passes the last index, return true.

**Key Insight:** You don't need to try every possible jump path. Just greedily track the maximum reachable position. If you can reach index `i`, you can reach everything between 0 and `i`. So just keep extending your reach.

**Algorithm:**
1. Initialize `farthest = 0`
2. Loop through each index:
   - If `i > farthest` → you can't reach this index, return false
   - Update `farthest = max(farthest, i + nums[i])`
   - If `farthest >= last index` → return true early
3. Return true

**Walkthrough:**
```
nums = [2, 3, 1, 1, 4], last = 4

i=0: 0 <= 0 ✓, farthest = max(0, 0+2) = 2
i=1: 1 <= 2 ✓, farthest = max(2, 1+3) = 4
  4 >= 4 → return true ✓
```
```
nums = [3, 2, 1, 0, 4], last = 4

i=0: 0 <= 0 ✓, farthest = max(0, 0+3) = 3
i=1: 1 <= 3 ✓, farthest = max(3, 1+2) = 3
i=2: 2 <= 3 ✓, farthest = max(3, 2+1) = 3
i=3: 3 <= 3 ✓, farthest = max(3, 3+0) = 3
i=4: 4 > 3 → can't reach index 4, return false ✓
```
```
nums = [0]

Single element → already at the last index → return true ✓
```

**Why greedy works:** If you can reach position `i`, you can make any jump from 1 to `nums[i]`. The farthest you can reach from `i` is `i + nums[i]`. By always tracking the max, you never miss a reachable position. If the max can't grow past some point, no path exists.

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Only one variable

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Greedy works when the locally optimal choice (extend farthest reach) leads to the global answer
- Tracking max reachable position eliminates the need to try all paths
- The `i > farthest` check catches the "stuck" case elegantly
- This is the foundation for Jump Game II (#45) which asks for minimum jumps
- One of the cleanest examples of greedy algorithm thinking