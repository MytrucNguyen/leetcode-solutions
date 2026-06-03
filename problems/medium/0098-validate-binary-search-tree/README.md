# 98. Validate Binary Search Tree

**Difficulty:** Medium  
**Topics:** Tree, Depth-First Search, Binary Search Tree, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/validate-binary-search-tree/)

## Problem Description

Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

### Examples

**Example 1:**

        2
       / \
      1   3
    Output: true

**Example 2:**

        5
       / \
      1   4
         / \
        3   6
    Output: false
    Explanation: The root's right child is 4, which is less than 5.

### Constraints

- The number of nodes in the tree is in the range `[1, 10^4]`
- `-2^31 <= Node.val <= 2^31 - 1`

## Approach

### DFS with Valid Range

Pass down a valid range (min, max) that narrows as you go deeper. Each node must be within its allowed range.

**Key Insight:** It's not enough to check that `left < node < right` for immediate children. Every node in the left subtree must be less than the root, and every node in the right subtree must be greater. The range approach handles this by narrowing the valid range at each level.

**Common mistake:**

        5
       / \
      1   6
         / \
        3   7

    Checking only immediate children: 6 > 5 ✓, 3 < 6 ✓, 7 > 6 ✓
    But 3 is in the RIGHT subtree of 5, and 3 < 5 → INVALID!

    Range approach catches this:
    Node 6: range (5, ∞) → 6 in range ✓
    Node 3: range (5, 6) → 3 NOT in range ✗ Caught!

**Algorithm:**
1. Start with range (-Infinity, Infinity)
2. At each node:
   - If node value is NOT within (min, max) → return false
   - Recurse left with updated range: (min, node.val)
   - Recurse right with updated range: (node.val, max)
3. If all nodes pass, return true

**Walkthrough:**

        2 (range: -∞, ∞)
       / \
      1   3

    Node 2: -∞ < 2 < ∞ ✓
      Left → Node 1: range (-∞, 2) → -∞ < 1 < 2 ✓
      Right → Node 3: range (2, ∞) → 2 < 3 < ∞ ✓
    All pass → return true ✓

        5 (range: -∞, ∞)
       / \
      1   4

    Node 5: -∞ < 5 < ∞ ✓
      Left → Node 1: range (-∞, 5) → -∞ < 1 < 5 ✓
      Right → Node 4: range (5, ∞) → 5 < 4? NO! 4 < 5 ✗
    Return false ✓

**Connection to Inorder Traversal (#94):**
An alternative approach: inorder traversal of a valid BST produces values in strictly increasing order. If any value is ≤ the previous, it's invalid.

**Time Complexity:** O(n) — visit every node once  
**Space Complexity:** O(n) — recursion stack depth (O(log n) for balanced tree)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Checking only immediate children is NOT enough — must validate the entire subtree range
- The range narrows as you go deeper: left child gets (min, parent), right gets (parent, max)
- Alternative: inorder traversal should produce strictly increasing values
- Uses the same "pass constraints down" pattern as many tree DFS problems
- Very commonly asked at Microsoft, Amazon, and Meta