# 104. Maximum Depth of Binary Tree

**Difficulty:** Easy  
**Topics:** Tree, Depth-First Search, Breadth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## Problem Description

Given the `root` of a binary tree, return its maximum depth.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Examples

**Example 1:**
![alt text](image.png)
```
Input: root = [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7

Output: 3
```

**Example 2:**
```
Input: root = [1,null,2]

  1
   \
    2

Output: 2
```

### Constraints

- The number of nodes in the tree is in the range `[0, 10^4]`.
- `-100 <= Node.val <= 100`

## Understanding Depth

**Depth (or Height)** is the number of nodes along the longest path from the root to a leaf.
```
    3          ← Level 1
   / \
  9  20        ← Level 2
    /  \
   15   7      ← Level 3

Maximum depth = 3
```

The longest path is `3 → 20 → 15` (or `3 → 20 → 7`), which has 3 nodes.

## Approach

### Recursive Solution (Depth-First Search)

The key insight is that the depth of a tree is determined by exploring both subtrees and taking the maximum depth, then adding 1 for the current node.

**Formula:**
```
depth(node) = 1 + max(depth(left), depth(right))
```

**Example Walkthrough:**
```
    3
   / \
  9  20
    /  \
   15   7

Node 9: depth = 1 (leaf node)
Node 15: depth = 1 (leaf node)
Node 7: depth = 1 (leaf node)
Node 20: depth = 1 + max(depth(15), depth(7)) = 1 + max(1, 1) = 2
Node 3: depth = 1 + max(depth(9), depth(20)) = 1 + max(1, 2) = 3
```

**Algorithm:**
1. Base case: If the node is null, return 0
2. Recursively find the depth of the left subtree
3. Recursively find the depth of the right subtree
4. Return 1 + maximum of the two depths

**Time Complexity:** O(n) - Visit every node once  
**Space Complexity:** O(h) - Where h is the height of the tree (recursion stack)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Recursion naturally fits tree problems - solve for subtrees, then combine
- The depth of a tree is 1 + the maximum depth of its subtrees
- Base case is crucial: null nodes have depth 0
- This pattern (explore both children, take max/min/sum) is common in tree problems
- Depth-First Search explores as deep as possible before backtracking
