# 108. Convert Sorted Array to BST

**Difficulty:** Easy  
**Topics:** Array, Divide and Conquer, Tree, Binary Search Tree, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/convert-sorted-array-to-height-balanced-bst/)

## Problem Description

Given an integer array `nums` where the elements are sorted in **ascending order**, convert it to a **height-balanced** binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

### Examples

**Example 1:**
```
Input: nums = [-10, -3, 0, 5, 9]
Output: [0, -3, 9, -10, null, 5]
Explanation:
        0
       / \
     -3   9
     /   /
   -10  5
```

**Example 2:**
```
Input: nums = [1, 3]
Output: [3, 1] or [1, null, 3]
```

### Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in strictly increasing order

## Approach

### Divide and Conquer (Recursion)

Pick the middle element as the root to keep the tree balanced, then recursively build the left and right subtrees from the left and right halves.

**Key Insight:** In a BST, the root should be the median of the values to ensure balance. Since the array is already sorted, the middle element is the median. Everything to the left is smaller (left subtree) and everything to the right is larger (right subtree). Apply this recursively.

**Connection to #94:** Inorder traversal of a BST produces a sorted array. This problem is the exact reverse — given a sorted array, reconstruct the BST.

**Algorithm:**
1. If the array range is empty, return null (base case)
2. Find the middle index
3. Create a node with the middle value as root
4. Recursively build the left subtree from the left half
5. Recursively build the right subtree from the right half
6. Return the root

**Walkthrough:**
```
nums = [-10, -3, 0, 5, 9]

build(0, 4):
  mid = 2, root = 0
  root.left = build(0, 1)
  root.right = build(3, 4)

  build(0, 1):
    mid = 0, root = -10
    root.left = build(0, -1) → null
    root.right = build(1, 1)

    build(1, 1):
      mid = 1, root = -3
      root.left = build(1, 0) → null
      root.right = build(2, 1) → null
      return -3

    return -10 (with -3 as right? No...)
```

Let me redo this more clearly:
```
nums = [-10, -3, 0, 5, 9]
indices: 0    1   2  3  4

build(0, 4):
  mid = 2 → root = 0
  left = build(0, 1)    → left half [-10, -3]
  right = build(3, 4)   → right half [5, 9]

  build(0, 1):
    mid = 0 → root = -10
    left = build(0, -1) → null
    right = build(1, 1)

    build(1, 1):
      mid = 1 → root = -3
      left = build(1, 0) → null
      right = build(2, 1) → null
      return node(-3)

    return node(-10, right: -3)

  build(3, 4):
    mid = 3 → root = 5
    left = build(3, 2) → null
    right = build(4, 4)

    build(4, 4):
      mid = 4 → root = 9
      left = build(4, 3) → null
      right = build(5, 4) → null
      return node(9)

    return node(5, right: 9)

Final tree:
        0
       / \
     -10   5
       \    \
       -3    9
```

**Time Complexity:** O(n) - Visit every element once  
**Space Complexity:** O(log n) - Recursion stack depth for a balanced tree

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Picking the middle element as root guarantees a balanced tree
- Divide and conquer naturally maps to recursive tree construction
- This is the reverse of inorder traversal (#94) — sorted array → BST
- The same pattern applies to building balanced structures from sorted data