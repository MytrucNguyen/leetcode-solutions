# 45. Jump Game II

**Difficulty:** Medium  
**Topics:** Array, Dynamic Programming, Greedy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/jump-game-ii/)

## Problem Description

You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`.

Return the minimum number of jumps to reach `nums[n - 1]`.

The test cases are generated such that you can always reach the last index.

### Examples

**Example 1:**

    Input: nums = [2, 3, 1, 1, 4]
    Output: 2
    Explanation: Jump from index 0 to 1 (3 steps available), then jump to index 4.

**Example 2:**

    Input: nums = [2, 3, 0, 1, 4]
    Output: 2

### Constraints

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 1000`
- It's guaranteed that you can reach `nums[n - 1]`

## Approach

### Greedy — BFS-style Level Traversal

Think of the array as a graph where each index can reach indices within its jump range. The minimum jumps is like BFS shortest path — count levels.

**Key Insight:** Track the current jump's reach (`currentEnd`) and the farthest we can reach from this level (`farthest`). When we pass `currentEnd`, we must take another jump — update `currentEnd` to `farthest`.

**Analogy to BFS:**

- Level 0: index 0
- Level 1: all indices reachable from level 0
- Level 2: all indices reachable from level 1
- Each level = one jump

**Algorithm:**

1. Track `jumps = 0`, `currentEnd = 0`, `farthest = 0`
2. For each index from 0 to n-2 (don't need to jump FROM the last index):
    - Update `farthest = max(farthest, i + nums[i])`
    - If `i === currentEnd` → reached the end of this jump level:
        - Increment jumps
        - `currentEnd = farthest`
3. Return jumps

**Walkthrough:**

    nums = [2, 3, 1, 1, 4]
    jumps=0, currentEnd=0, farthest=0

    i=0: farthest = max(0, 0+2) = 2
         i === currentEnd(0) → jump! jumps=1, currentEnd=2
         (Level 1: can reach indices 1-2)

    i=1: farthest = max(2, 1+3) = 4
         i !== currentEnd(2) → continue

    i=2: farthest = max(4, 2+1) = 4
         i === currentEnd(2) → jump! jumps=2, currentEnd=4
         (Level 2: can reach up to index 4)

    i=3: farthest = max(4, 3+1) = 4
         i !== currentEnd(4) → continue

    (Stop at n-2=3, don't process last index)

    Return jumps = 2 ✓

    nums = [2, 3, 0, 1, 4]

    i=0: farthest=2, i===currentEnd → jumps=1, currentEnd=2
    i=1: farthest=max(2,4)=4
    i=2: farthest=max(4,2)=4, i===currentEnd → jumps=2, currentEnd=4
    i=3: farthest=max(4,4)=4

    Return 2 ✓

**Why stop at n-2?** If `currentEnd` already reaches or passes the last index, we don't need another jump. Processing the last index would add an unnecessary jump.

**Comparison with Jump Game (#55):**

- #55: Can you reach the end? → track farthest, check if ≥ last index
- #45: Minimum jumps to reach end → track farthest per level, count levels
- Same farthest-tracking, but #45 adds the "level" concept

**Time Complexity:** O(n) — single pass  
**Space Complexity:** O(1) — three variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Think of it as BFS on the array — each level is one jump
- `currentEnd` marks the end of the current level, `farthest` marks the next level's end
- When you reach `currentEnd`, you must take a jump — that's the level boundary
- Stop at n-2 to avoid an extra jump from the last index
- Same greedy farthest-tracking from #55 with level counting added
