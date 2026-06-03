# 124. Binary Tree Maximum Path Sum

**Difficulty:** Hard  
**Topics:** Tree, Depth-First Search, Dynamic Programming, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

## Problem Description

A **path** in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence **at most once**. Note that the path does not need to pass through the root.

The **path sum** of a path is the sum of the node's values in the path.

Given the `root` of a binary tree, return the maximum **path sum** of any **non-empty** path.

### Examples

**Example 1:**

        1
       / \
      2   3

    Input: root = [1,2,3]
    Output: 6
    Explanation: Path 2 → 1 → 3 has sum 2 + 1 + 3 = 6.

**Example 2:**

       -10
       / \
      9   20
         / \
        15   7

    Input: root = [-10,9,20,null,null,15,7]
    Output: 42
    Explanation: Path 15 → 20 → 7 has sum 15 + 20 + 7 = 42.

### Constraints

- The number of nodes in the tree is in the range `[1, 3 * 10^4]`
- `-1000 <= Node.val <= 1000`

## Approach

### DFS — Track Two Things at Each Node

At each node, calculate two values:
1. **Path through this node** (left + node + right) → updates global max
2. **Path to this node** (node + max(left, right)) → returns upward to parent

This is Diameter of Binary Tree (#543) but with sums instead of lengths, and negative values add complexity — sometimes it's better NOT to include a subtree.

**Key Insight:** A path can go through a node (left → node → right) or just extend upward (node + one side). The "through" value is a candidate for the global max. The "upward" value is what the parent can use.

**Handling negatives:** If a subtree sum is negative, don't include it — it would reduce the total. Use `max(0, subtreeSum)` to treat negative paths as 0 (skip them).

**Algorithm:**
1. Track `maxSum` globally (initialized to -Infinity)
2. DFS at each node:
   - Get left gain = max(0, DFS(left)) — skip if negative
   - Get right gain = max(0, DFS(right)) — skip if negative
   - Path through node = node.val + left gain + right gain → update maxSum
   - Return node.val + max(left gain, right gain) — best single path upward
3. Return maxSum

**Walkthrough:**

       -10
       / \
      9   20
         / \
        15   7

    DFS(15): leaf → leftGain=0, rightGain=0
      Through: 15+0+0 = 15 → maxSum=15
      Return: 15+0 = 15

    DFS(7): leaf → leftGain=0, rightGain=0
      Through: 7+0+0 = 7 → maxSum=15
      Return: 7+0 = 7

    DFS(20): leftGain=15, rightGain=7
      Through: 20+15+7 = 42 → maxSum=42 ✓
      Return: 20+max(15,7) = 35

    DFS(9): leaf → leftGain=0, rightGain=0
      Through: 9+0+0 = 9 → maxSum=42
      Return: 9+0 = 9

    DFS(-10): leftGain=9, rightGain=35
      Through: -10+9+35 = 34 → maxSum=42 (not better)
      Return: -10+max(9,35) = 25

    Return maxSum = 42 ✓

**Why max(0, subtreeSum)?**

        -5
       / \
      2   -3

    Without max(0,...):
      DFS(-3): return -3
      DFS(2): return 2
      DFS(-5): through = -5 + 2 + (-3) = -6. Wrong!

    With max(0,...):
      DFS(-3): return max(0, -3) = 0 (skip this subtree)
      DFS(2): return max(0, 2) = 2
      DFS(-5): through = -5 + 2 + 0 = -3
      But maxSum was updated to 2 when we visited node 2!
      
    maxSum = 2 ✓ (just node 2 alone is the best path)

**Comparison with Diameter of Binary Tree (#543):**
- #543: Track `left + right` lengths at each node, return `1 + max(left, right)` upward
- #124: Track `left + node + right` sums at each node, return `node + max(left, right)` upward
- Same structure, sums instead of lengths, `max(0, ...)` for negative handling

**Time Complexity:** O(n) — visit each node once  
**Space Complexity:** O(n) — recursion stack (O(log n) for balanced tree)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same "track two things" pattern as Diameter (#543)
- "Through this node" updates global max, "to this node" returns upward
- max(0, subtreeSum) handles negatives — don't include paths that hurt
- A single node alone can be the best path — don't forget this case
- One of the most asked Hard tree problems at Meta, Google, and Amazon
- Your 150th problem! The skills from #104, #543 all led here