# 110. Balanced Binary Tree

**Difficulty:** Easy  
**Topics:** Tree, Depth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/balanced-binary-tree/)

## Problem Description

Given a binary tree, determine if it is **height-balanced**.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

### Examples

**Example 1:**

            3
           / \
          9   20
             / \
            15   7

    Input: root = [3,9,20,null,null,15,7]
    Output: true

**Example 2:**

            1
           / \
          2    2
         / \
        3    3
       / \
      4    4

    Input: root = [1,2,2,3,3,null,null,4,4]
    Output: false

**Example 3:**

    Input: root = []
    Output: true

### Constraints

- The number of nodes in the tree is in the range `[0, 5000]`
- `-10^4 <= Node.val <= 10^4`

## Approach

### DFS — Check Height and Balance Together

Calculate height at each node, but return -1 early if any subtree is unbalanced. This avoids recalculating heights and gives O(n) time.

**Key Insight:** Instead of checking balance at every node separately (O(n²)), combine height calculation with balance checking. If any subtree is unbalanced, propagate -1 upward — no need to check further.

**Algorithm:**
1. DFS function returns the height, or -1 if unbalanced
2. At each node:
   - Get left height (if -1, propagate)
   - Get right height (if -1, propagate)
   - If `|left - right| > 1` → unbalanced, return -1
   - Otherwise return `1 + max(left, right)`
3. Return whether the result is not -1

**Walkthrough:**

            1
           / \
          2    2
         / \
        3    3
       / \
      4    4

    height(4 left): left=0, right=0 → return 1
    height(4 right): left=0, right=0 → return 1
    height(3 left): left=1, right=1 → return 2
    height(3 right): left=0, right=0 → return 1
    height(2 left): left=2, right=1 → |2-1|=1 ≤ 1 → return 3
    height(2 right): left=0, right=0 → return 1
    height(1): left=3, right=1 → |3-1|=2 > 1 → return -1!

    Result: -1 → not balanced ✓

            3
           / \
          9   20
             / \
            15   7

    height(9): left=0, right=0 → return 1
    height(15): return 1
    height(7): return 1
    height(20): left=1, right=1 → |1-1|=0 ≤ 1 → return 2
    height(3): left=1, right=2 → |1-2|=1 ≤ 1 → return 3

    Result: 3 (not -1) → balanced ✓

**Comparison with tree depth problems:**
- Maximum Depth (#104): `return 1 + max(left, right)` — just calculate depth
- Diameter (#543): Track `left + right` at each node for diameter
- **Balanced (#110): Check `|left - right| ≤ 1` at each node, early exit with -1** ✅

**Time Complexity:** O(n) — visit each node once, early exit on imbalance  
**Space Complexity:** O(n) — recursion stack (O(log n) for balanced tree)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Using -1 as a "not balanced" signal avoids recalculating heights
- Same recursive depth pattern as #104 with one extra check
- Early propagation of -1 makes this O(n) instead of O(n²)
- Completes the tree depth trio: max depth, diameter, balanced check