# 134. Gas Station

**Difficulty:** Medium  
**Topics:** Array, Greedy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/gas-station/)

## Problem Description

There are `n` gas stations along a circular route, where the amount of gas at the `ith` station is `gas[i]`.

You have a car with an unlimited size tank and it costs `cost[i]` of gas to travel from the `ith` station to its next `(i + 1)th` station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return `-1`. If there exists a solution, it is guaranteed to be **unique**.

### Examples

**Example 1:**

    Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
    Output: 3
    Explanation:
      Start at station 3, tank = 0
      Station 3: gas 4, cost 1 → tank = 3
      Station 4: gas 5, cost 2 → tank = 6
      Station 0: gas 1, cost 3 → tank = 4
      Station 1: gas 2, cost 4 → tank = 2
      Station 2: gas 3, cost 5 → tank = 0
      Complete circuit ✓

**Example 2:**

    Input: gas = [2,3,4], cost = [3,4,3]
    Output: -1
    Explanation: Total gas = 9, total cost = 10. Not enough gas.

### Constraints

- `n == gas.length == cost.length`
- `1 <= n <= 10^5`
- `0 <= gas[i], cost[i] <= 10^4`

## Approach

### Greedy — Single Pass with Two Insights

Two key observations make this O(n):

1. If total gas < total cost → impossible, return -1
2. If you run out of gas starting from station `i` at station `j`, no station between `i` and `j` works either → skip to `j + 1`

**Key Insight #1 — Feasibility:** If the total gas across all stations is at least the total cost, a solution is guaranteed to exist. If not, it's impossible.

**Key Insight #2 — Skip ahead:** If starting from station `i`, you run out of gas at station `j`, then stations `i+1, i+2, ..., j` can't be the answer either. Why? Because you arrived at each of those stations with extra gas (≥ 0), so starting there with 0 gas would be even worse.

**Algorithm:**

1. Track `totalGas` (sum of all gas - cost) and `currentTank`
2. Track `startStation` candidate
3. For each station:
    - Add `gas[i] - cost[i]` to both totalGas and currentTank
    - If `currentTank < 0` → can't start from `startStation`
        - Reset: `startStation = i + 1`, `currentTank = 0`
4. If `totalGas < 0` → impossible, return -1
5. Otherwise return `startStation`

**Walkthrough:**

    gas  = [1, 2, 3, 4, 5]
    cost = [3, 4, 5, 1, 2]
    net  = [-2,-2,-2, 3, 3]

    totalGas=0, currentTank=0, start=0

    i=0: net=-2, currentTank=-2, totalGas=-2
      currentTank < 0 → start=1, currentTank=0

    i=1: net=-2, currentTank=-2, totalGas=-4
      currentTank < 0 → start=2, currentTank=0

    i=2: net=-2, currentTank=-2, totalGas=-6
      currentTank < 0 → start=3, currentTank=0

    i=3: net=3, currentTank=3, totalGas=-3
      currentTank ≥ 0 → keep going

    i=4: net=3, currentTank=6, totalGas=0
      currentTank ≥ 0 → keep going

    totalGas=0 ≥ 0 → possible!
    Return start=3 ✓

    gas  = [2, 3, 4]
    cost = [3, 4, 3]

    i=0: net=-1, currentTank=-1, totalGas=-1 → start=1, tank=0
    i=1: net=-1, currentTank=-1, totalGas=-2 → start=2, tank=0
    i=2: net=1, currentTank=1, totalGas=-1

    totalGas=-1 < 0 → return -1 ✓

**Comparison with other greedy problems:**

- Jump Game (#55): Track farthest reachable position
- Partition Labels (#763): Track farthest last occurrence
- **Gas Station (#134): Track current tank, reset start on failure**

**Time Complexity:** O(n) — single pass  
**Space Complexity:** O(1) — only counters

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Two insights: total feasibility check + skip-ahead on failure
- If you fail at station j starting from i, skip everything between i and j
- Track total separately from current — total decides feasibility, current finds the start
- The "reset and try next" pattern is classic greedy
- One of the most elegant greedy problems
