# 236. Lowest Common Ancestor of a Binary Tree

**Difficulty:** Medium  
**Topics:** Tree, Depth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

## Problem Description

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

The lowest common ancestor is defined as the lowest node in the tree that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).

### Examples

**Example 1:**

            3
           / \
          5    1
         / \  / \
        6   2 0   8
           / \
          7   4

    Input: root = 3, p = 5, q = 1
    Output: 3

**Example 2:**

    Same tree
    Input: root = 3, p = 5, q = 4
    Output: 5
    Explanation: 5 is an ancestor of 4, and a node can be its own ancestor.

**Example 3:**

    Input: root = [1,2], p = 1, q = 2
    Output: 1

### Constraints

- The number of nodes in the tree is in the range `[2, 10^5]`
- `-10^9 <= Node.val <= 10^9`
- All `Node.val` are unique
- `p != q`
- `p` and `q` will exist in the tree

## Approach

### Recursive DFS

Search both subtrees for `p` and `q`. The answer emerges naturally from how the results combine.

**Key Insight:** At each node, three things can happen:
1. The node itself is `p` or `q` → return this node
2. `p` and `q` are found in different subtrees → this node is the LCA
3. `p` and `q` are both in the same subtree → the LCA is deeper in that subtree

**Algorithm:**
1. Base case: if node is null, return null (not found)
2. If node is `p` or `q`, return this node (found one!)
3. Recurse left and right
4. If both left and right return non-null → both found in different subtrees → this node is LCA
5. If only one side returns non-null → both nodes are in that subtree → return that result
6. If both null → neither found here

**Walkthrough:**

            3
           / \
          5    1
         / \  / \
        6   2 0   8

    LCA(5, 1):

    At node 3:
      left = search(5) → finds 5, returns 5
      right = search(1) → finds 1, returns 1
      Both non-null → 3 is the LCA ✓

    LCA(5, 4):

    At node 3:
      left = search(5):
        At node 5: node === p → return 5
        (We don't need to search deeper — 4 must be below 5)
      right = search(1):
        Searches 1, 0, 8 → all null
      Only left non-null → return 5 ✓

**Why does returning early when we find p or q work?**
If we find `p`, and `q` is guaranteed to exist in the tree, then either:
- `q` is below `p` → `p` is the LCA (correct to return `p`)
- `q` is elsewhere → the parent will see both left and right non-null

**Time Complexity:** O(n) — visit every node once in worst case  
**Space Complexity:** O(n) — recursion stack depth (O(log n) for balanced tree)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- The recursive solution naturally finds the LCA through how results combine
- "Found in both subtrees" → current node is LCA
- "Found in one subtree" → LCA is deeper in that subtree
- A node can be its own ancestor — handle this in the base case
- One of the most elegant recursive tree solutions
- Very commonly asked at Microsoft, Meta, and Amazon