# 841. Keys and Rooms

**Difficulty:** Medium  
**Topics:** Depth-First Search, Breadth-First Search, Graph  
**Link:** [LeetCode Problem](https://leetcode.com/problems/keys-and-rooms/)

## Problem Description

There are `n` rooms labeled from `0` to `n - 1` and all the rooms are locked except for room `0`. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of **distinct keys** in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array `rooms` where `rooms[i]` is the set of keys that you can obtain if you visited room `i`, return `true` if you can visit all the rooms, or `false` otherwise.

### Examples

**Example 1:**

    Input: rooms = [[1],[2],[3],[]]
    Output: true
    Explanation:
      Visit room 0 → get key to room 1
      Visit room 1 → get key to room 2
      Visit room 2 → get key to room 3
      Visit room 3 → all rooms visited!

**Example 2:**

    Input: rooms = [[1,3],[3,0,1],[2],[0]]
    Output: false
    Explanation: Can't reach room 2.

### Constraints

- `n == rooms.length`
- `2 <= n <= 1000`
- `0 <= rooms[i].length <= 1000`
- `1 <= sum(rooms[i].length) <= 3000`
- `0 <= rooms[i][j] < n`
- All values of `rooms[i]` are unique

## Approach

### DFS from Room 0

Start in room 0, DFS to all reachable rooms using keys. Track visited rooms. If visited count equals total rooms, return true.

**Key Insight:** This is a standard graph reachability problem. Rooms are nodes, keys are edges. Can we reach all nodes from node 0? Same as checking if a directed graph is fully reachable from a starting node.

**Algorithm:**

1. Create a visited Set, add room 0
2. DFS from room 0:
    - For each key in the current room:
        - If room not visited → mark visited, DFS into it
3. Return `visited.size === rooms.length`

**Walkthrough:**

    rooms = [[1],[2],[3],[]]

    Start: visited = {0}
    Room 0 has key [1]:
      Visit 1. visited = {0, 1}
      Room 1 has key [2]:
        Visit 2. visited = {0, 1, 2}
        Room 2 has key [3]:
          Visit 3. visited = {0, 1, 2, 3}
          Room 3 has keys [] → nothing new

    visited.size = 4 === rooms.length = 4 → true ✓

    rooms = [[1,3],[3,0,1],[2],[0]]

    Start: visited = {0}
    Room 0 has keys [1, 3]:
      Visit 1. visited = {0, 1}
        Room 1 has keys [3, 0, 1]:
          Visit 3. visited = {0, 1, 3}
            Room 3 has keys [0]: already visited
          0, 1 already visited
      Visit 3: already visited

    visited.size = 3 ≠ 4 → false ✓
    (Room 2 is unreachable!)

**Comparison with other graph problems:**

- Number of Islands (#200): DFS on grid, count components
- Course Schedule (#207): DFS cycle detection
- Clone Graph (#133): DFS with node copying
- Keys and Rooms (#841): DFS reachability from a single source

**Time Complexity:** O(n + k) where n is rooms and k is total keys  
**Space Complexity:** O(n) — visited set and recursion stack

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Graph reachability = DFS from source, check if all nodes visited
- Rooms are nodes, keys are directed edges
- Same DFS pattern as grid problems but on an adjacency list
- The visited set prevents revisiting rooms (and infinite loops)
