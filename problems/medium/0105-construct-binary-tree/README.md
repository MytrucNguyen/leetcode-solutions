# 105. Construct Binary Tree from Preorder and Inorder Traversal

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Divide and Conquer, Tree, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

## Problem Description

Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.

### Examples

**Example 1:**

    preorder = [3, 9, 20, 15, 7]
    inorder  = [9, 3, 15, 20, 7]

    Output:
            3
           / \
          9   20
             / \
            15   7

**Example 2:**

    preorder = [-1]
    inorder  = [-1]
    Output: [-1]

### Constraints

- `1 <= preorder.length <= 3000`
- `inorder.length == preorder.length`
- `-3000 <= preorder[i], inorder[i] <= 3000`
- `preorder` and `inorder` consist of unique values
- Each value of `inorder` also appears in `preorder`
- `preorder` is guaranteed to be the preorder traversal of the tree
- `inorder` is guaranteed to be the inorder traversal of the tree

## Approach

### Divide and Conquer with Hash Map

The first element of preorder is always the root. Find that root in inorder — everything left is the left subtree, everything right is the right subtree. Recurse on each half.

**Key Insight:** Two traversal properties work together:
- **Preorder** (Node, Left, Right): First element is always the root
- **Inorder** (Left, Node, Right): Root splits left and right subtrees

By finding the root in inorder, we know the sizes of left and right subtrees, which tells us how to split both arrays.

**Algorithm:**
1. Build a hash map of `value → index` for inorder (O(1) root lookup)
2. Track a `preIndex` that walks through preorder left to right
3. Recursive build function:
   - If range is empty, return null
   - Take `preorder[preIndex]` as root, increment preIndex
   - Find root's position in inorder
   - Build left subtree (inorder left of root)
   - Build right subtree (inorder right of root)
   - Return root

**Why preIndex works left to right:** Preorder visits Node → Left → Right. So after the root, all left subtree nodes come next, then right subtree nodes. Just incrementing preIndex naturally visits them in the correct order.

**Walkthrough:**

    preorder = [3, 9, 20, 15, 7]
    inorder  = [9, 3, 15, 20, 7]
    inorderMap: {9:0, 3:1, 15:2, 20:3, 7:4}

    build(0, 4), preIndex=0:
      root = preorder[0] = 3, preIndex=1
      rootIndex in inorder = 1
      left = build(0, 0)  → inorder[0..0] = [9]
      right = build(2, 4) → inorder[2..4] = [15, 20, 7]

      build(0, 0), preIndex=1:
        root = preorder[1] = 9, preIndex=2
        rootIndex = 0
        left = build(0, -1) → null
        right = build(1, 0) → null
        return node(9)

      build(2, 4), preIndex=2:
        root = preorder[2] = 20, preIndex=3
        rootIndex = 3
        left = build(2, 2) → inorder[2..2] = [15]
        right = build(4, 4) → inorder[4..4] = [7]

        build(2, 2), preIndex=3:
          root = preorder[3] = 15, preIndex=4
          left = null, right = null
          return node(15)

        build(4, 4), preIndex=4:
          root = preorder[4] = 7, preIndex=5
          left = null, right = null
          return node(7)

        return node(20, left=15, right=7)

      return node(3, left=9, right=20)

    Result:
            3
           / \
          9   20
             / \
            15   7  ✓

**Comparison with Convert Sorted Array to BST (#108):**
- #108: Pick middle as root, split left/right → builds balanced BST
- #105: Pick preorder[0] as root, find in inorder to split → rebuilds exact tree
- Same divide and conquer pattern, different way to find the root

**Time Complexity:** O(n) — visit each node once, O(1) lookup with hash map  
**Space Complexity:** O(n) — hash map and recursion stack

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Preorder's first element = root. Inorder splits left and right subtrees.
- Hash map for inorder indices avoids O(n) search each time
- preIndex increments naturally through preorder — left subtree nodes come before right
- Must build left subtree BEFORE right (matching preorder's visit order)
- Classic divide and conquer tree construction problem