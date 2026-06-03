# 230. Kth Smallest Element in a BST

**Difficulty:** Medium  
**Topics:** Tree, Depth-First Search, Binary Search Tree, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

## Problem Description

Given the `root` of a binary search tree, and an integer `k`, return the `kth` smallest value (**1-indexed**) of all the values of the nodes in the tree.

### Examples

**Example 1:**

        3
       / \
      1    4
       \
        2

    Input: root = [3,1,4,null,2], k = 1
    Output: 1

**Example 2:**

        5
       / \
      3    6
     / \
    2    4
   /
  1

    Input: root = [5,3,6,2,4,null,null,1], k = 3
    Output: 3

### Constraints

- The number of nodes in the tree is `n`
- `1 <= k <= n <= 10^4`
- `0 <= Node.val <= 10^4`

## Approach

### Inorder Traversal — Stop at K

Inorder traversal of a BST visits nodes in sorted order (you proved this in #94). So the kth node visited in inorder is the kth smallest. Stop early once you've found it.

**Key Insight:** You don't need to traverse the entire tree and sort. Inorder traversal naturally gives sorted order for BSTs. Just count as you go and return the kth value.

**Connection to #94:**
- #94: Inorder traversal → collect ALL values in sorted order
- #230: Inorder traversal → stop at the kth value

**Algorithm:**
1. Track a counter and result
2. Inorder traversal (left → node → right):
   - Go left
   - Visit node: decrement k. If k === 0, this is our answer
   - Go right
3. Return the result

**Walkthrough:**

        5
       / \
      3    6
     / \
    2    4
   /
  1

    k = 3, looking for 3rd smallest

    Inorder traversal:
    Go left → 3 → 2 → 1
    Visit 1: k=2 (not yet)
    Back to 2
    Visit 2: k=1 (not yet)
    Back to 3
    Visit 3: k=0 → found it! Return 3 ✓

    We never even visited 4, 5, or 6 — early exit!

**Time Complexity:** O(H + k) where H is tree height — go to leftmost node (H), then visit k nodes  
**Space Complexity:** O(H) — recursion stack depth

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Inorder traversal of BST = sorted order — fundamental property
- Stop early at k — no need to traverse the whole tree
- Directly builds on Inorder Traversal (#94) and Validate BST (#98)
- This pattern of "inorder with early exit" is reusable for many BST problems
- Asked frequently at Meta, Amazon, and Microsoft