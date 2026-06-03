# 133. Clone Graph

**Difficulty:** Medium  
**Topics:** Hash Table, Depth-First Search, Breadth-First Search, Graph  
**Link:** [LeetCode Problem](https://leetcode.com/problems/clone-graph/)

## Problem Description

Given a reference of a node in a **connected** undirected graph, return a **deep copy** (clone) of the graph.

Each node in the graph contains a value (`int`) and a list of its neighbors (`Node[]`).

### Examples

**Example 1:**

      1 --- 2
      |     |
      4 --- 3

    Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
    Output: [[2,4],[1,3],[2,4],[1,3]]
    Explanation: Deep copy with same structure.

**Example 2:**

    Input: adjList = [[]]
    Output: [[]]
    Explanation: Single node with no neighbors.

**Example 3:**

    Input: adjList = []
    Output: []
    Explanation: Empty graph.

### Constraints

- The number of nodes in the graph is in the range `[0, 100]`
- `1 <= Node.val <= 100`
- `Node.val` is unique for each node
- There are no repeated edges and no self-loops
- The graph is connected and all nodes can be visited from the given node

## Approach

### DFS with Hash Map

Same pattern as Copy List with Random Pointer (#138). Use a hash map to track `original → copy`. DFS through the graph — when you visit a node, create its copy and recursively clone its neighbors.

**Key Insight:** The hash map serves two purposes:
1. Maps original nodes to copies for wiring neighbors
2. Acts as a "visited" set — if a node is already in the map, we've cloned it

This means we don't need a separate visited set! The map IS the visited tracker.

**Algorithm:**
1. If node is null, return null
2. If node is already in the map, return its copy (already cloned)
3. Create a copy of the node
4. Add to map BEFORE recursing (prevents infinite loops on cycles)
5. For each neighbor: recursively clone and add to copy's neighbors
6. Return the copy

**Walkthrough:**

      1 --- 2
      |     |
      4 --- 3

    cloneGraph(1):
      1 not in map → create 1', map: {1→1'}
      Clone neighbors of 1: [2, 4]

        cloneGraph(2):
          2 not in map → create 2', map: {1→1', 2→2'}
          Clone neighbors of 2: [1, 3]

            cloneGraph(1): already in map → return 1'

            cloneGraph(3):
              3 not in map → create 3', map: {..., 3→3'}
              Clone neighbors of 3: [2, 4]

                cloneGraph(2): already in map → return 2'

                cloneGraph(4):
                  4 not in map → create 4', map: {..., 4→4'}
                  Clone neighbors of 4: [1, 3]
                    cloneGraph(1): return 1'
                    cloneGraph(3): return 3'
                  4'.neighbors = [1', 3']
                  return 4'

              3'.neighbors = [2', 4']
              return 3'

          2'.neighbors = [1', 3']
          return 2'

        cloneGraph(4): already in map → return 4'

      1'.neighbors = [2', 4']
      return 1' ✓

**Comparison with Copy List with Random Pointer (#138):**
- #138: Two-pass — create all copies, then wire pointers
- #133: Single-pass DFS — create copy and wire neighbors as you go
- Both use hash map for `original → copy` mapping
- #133 adds the map BEFORE recursing to handle cycles

**Why add to map BEFORE recursing?** In a graph, node 1 points to node 2, and node 2 points back to node 1. If we don't add 1 to the map before visiting its neighbors, we'd try to clone 1 again when we reach it from 2 → infinite loop!

**Time Complexity:** O(V + E) — visit each node and edge once  
**Space Complexity:** O(V) — hash map and recursion stack

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same hash map cloning pattern as Copy List (#138) applied to graphs
- The map doubles as a visited set — prevents infinite loops on cycles
- Add to map BEFORE recursing — critical for cycle handling
- DFS naturally traverses the whole connected graph
- This "clone a structure with a map" pattern works for any node-based structure