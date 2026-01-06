# 226. Invert Binary Tree

**Difficulty:** Easy  
**Topics:** Tree, Depth-First Search, Breadth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/invert-binary-tree/)

## Problem Description

Given the `root` of a binary tree, invert the tree, and return its root.

### Examples

**Example 1:**
```
Input: root = [4,2,7,1,3,6,9]

    4
   / \
  2   7
 / \ / \
1  3 6  9

Output: [4,7,2,9,6,3,1]

    4
   / \
  7   2
 / \ / \
9  6 3  1
```

**Example 2:**
```
Input: root = [2,1,3]

  2
 / \
1   3

Output: [2,3,1]

  2
 / \
3   1
```

**Example 3:**
```
Input: root = []
Output: []
```

### Constraints

- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

## Understanding Binary Trees

### What is a Binary Tree?

A binary tree is a data structure where each piece (called a **node**) can have up to **two children** - a left child and a right child.
```
      4          ← root (top node)
     / \
    2   7        ← children of 4
   / \ / \
  1  3 6  9      ← leaf nodes (no children)
```

### Node Structure

Each node has three parts:
- **val**: The value stored in the node
- **left**: Pointer to the left child (or null if no left child)
- **right**: Pointer to the right child (or null if no right child)
```
┌─────────────┐
│   val: 4    │
│   left: ●───┼──→ Points to left child
│   right: ●──┼──→ Points to right child
└─────────────┘
```

### What Does "Invert" Mean?

**Inverting** a binary tree means **swapping the left and right children** at every node. Think of it like looking at the tree in a mirror!

**Before (Original):**
```
    4
   / \
  2   7
 / \ / \
1  3 6  9
```

**After (Inverted):**
```
    4
   / \
  7   2        ← Swapped! 2 and 7 switched places
 / \ / \
9  6 3  1      ← All children flipped
```

For every node in the tree, we swap its left and right children.

## Approach

### Recursive Solution (Depth-First Search)

The recursive approach is the most intuitive way to solve this problem. Visit each node and swap its left and right children, then recursively do the same for all child nodes.

**Algorithm:**
1. If the node is null, return null (base case)
2. Swap the left and right children using a temporary variable
3. Recursively invert the left subtree
4. Recursively invert the right subtree
5. Return the node

**Example:**
```
Starting with:    After swapping at root:
     4                 4
    / \               / \
   2   7             7   2
  / \ / \           / \ / \
 1  3 6  9         9  6 3  1
                   (then recurse on each subtree)
```

**Time Complexity:** O(n) - Visit every node once  
**Space Complexity:** O(h) - Where h is the height of the tree (recursion stack)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Recursion is a natural fit for tree problems
- Swapping nodes requires a temporary variable to avoid losing references
- Base case is crucial: always check for null nodes
- The pattern "process node, recurse left, recurse right" is common in tree traversal
- This is a classic Depth-First Search (DFS) problem