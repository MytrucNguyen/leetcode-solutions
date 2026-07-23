# 1448. Count Good Nodes in Binary Tree

**Difficulty:** Medium  
**Topics:** Tree, Depth-First Search, Breadth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-good-nodes-in-binary-tree/)

## Problem Description

Given a binary tree `root`, a node X in the tree is named **good** if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

### Examples

**Example 1:**

            3
           / \
          1    4
         /    / \
        3    1    5

    Input: root = [3,1,4,3,null,1,5]
    Output: 4
    Explanation: Good nodes: 3 (root), 4, 5, 3 (left-left).
    Node 1 (left) is not good because 3 > 1.
    Node 1 (right-left) is not good because 4 > 1.

**Example 2:**

            3
           /
          3

    Input: root = [3,3,null]
    Output: 2
    Explanation: Both nodes are good (3 ≥ 3).

**Example 3:**

    Input: root = [1]
    Output: 1
    Explanation: Root is always good.

### Constraints

- The number of nodes in the tree is in the range `[1, 10^5]`
- `-10^4 <= Node.val <= 10^4`

## Approach

### DFS with Max Tracking

Pass the maximum value seen on the path from root to current node. If the current node's value is greater than or equal to that max, it's a good node.

**Key Insight:** A node is "good" if it's the maximum (or tied) on its path from the root. By passing `maxSoFar` down the recursion, each node can check in O(1) whether it qualifies.

**Algorithm:**

1. DFS with `maxSoFar` parameter (starts as root's value)
2. At each node:
    - If `node.val >= maxSoFar` → it's good, count it
    - Update maxSoFar = max(maxSoFar, node.val)
    - Recurse left and right with updated maxSoFar
3. Return total count

**Walkthrough:**

            3
           / \
          1    4
         /    / \
        3    1    5

    DFS(3, max=-∞):
      3 >= -∞ → good! count=1, max=3
      DFS(1, max=3):
        1 < 3 → not good. max stays 3
        DFS(3, max=3):
          3 >= 3 → good! count=1, max=3
          No children
        Return 1
      Return 1 (0 for node 1 + 1 from child 3)
      DFS(4, max=3):
        4 >= 3 → good! count=1, max=4
        DFS(1, max=4):
          1 < 4 → not good
          No children
        Return 0
        DFS(5, max=4):
          5 >= 4 → good! count=1
          No children
        Return 1
      Return 2 (1 for node 4 + 0 + 1)
    Total: 1 + 1 + 2 = 4 ✓

**Comparison with other tree DFS problems:**

- Max Depth (#104): Pass nothing down, return depth up
- Validate BST (#98): Pass min/max bounds down
- Max Path Sum (#124): Track two things at each node
- Good Nodes (#1448): Pass maxSoFar down, count up

**Time Complexity:** O(n) — visit each node once  
**Space Complexity:** O(h) — recursion stack, h = height

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Pass context DOWN the recursion (maxSoFar), aggregate results UP (count)
- The root is always good — it has no ancestors to beat it
- Equal values count as good (≥ not >)
- Same "pass info down" pattern as Validate BST (#98)
