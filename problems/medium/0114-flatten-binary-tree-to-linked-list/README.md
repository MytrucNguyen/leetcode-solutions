# 114. Flatten Binary Tree to Linked List

**Difficulty:** Medium  
**Topics:** Linked List, Stack, Tree, Depth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

## Problem Description

Given the `root` of a binary tree, flatten the tree into a "linked list":

- The "linked list" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.
- The "linked list" should be in the same order as a **pre-order traversal** of the binary tree.

### Examples

**Example 1:**

            1
           / \
          2    5
         / \    \
        3   4    6

    Output:
    1 → 2 → 3 → 4 → 5 → 6 (right pointers)

**Example 2:**

    Input: root = []
    Output: []

**Example 3:**

    Input: root = [0]
    Output: [0]

### Constraints

- The number of nodes in the tree is in the range `[0, 2000]`
- `-100 <= Node.val <= 100`

**Follow up:** Can you flatten the tree in-place (without extra space)?

## Approach

### Iterative — Rewire Left Subtree to Right

For each node with a left child, find the rightmost node of the left subtree (the "predecessor"), connect it to the right child, then move the left subtree to the right.

**Key Insight:** In preorder, all left subtree nodes come before the right child. So we can insert the entire left subtree between the current node and its right child. The predecessor (rightmost of left subtree) connects to the original right child.

**Algorithm:**

1. Start at root
2. While current node exists:
    - If current has a left child:
        - Find the rightmost node of the left subtree (predecessor)
        - Connect predecessor.right = current.right (save right subtree)
        - Move left to right: current.right = current.left
        - Clear left: current.left = null
    - Move to current.right (next in the flattened list)

**Walkthrough:**

            1
           / \
          2    5
         / \    \
        3   4    6

    current = 1:
      Has left (2). Find rightmost of left subtree: 2→4 (rightmost)
      4.right = 1.right = 5.   Save right subtree!
      1.right = 1.left = 2.    Move left to right.
      1.left = null.

            1
             \
              2
             / \
            3   4
                 \
                  5
                   \
                    6

    current = 2:
      Has left (3). Find rightmost of left subtree: 3 (no right child)
      3.right = 2.right = 4.
      2.right = 2.left = 3.
      2.left = null.

            1
             \
              2
               \
                3
                 \
                  4
                   \
                    5
                     \
                      6

    current = 3: no left → move right
    current = 4: no left → move right
    current = 5: no left → move right
    current = 6: no left → move right → null, done!

    Result: 1 → 2 → 3 → 4 → 5 → 6 ✓

**Why this produces preorder:** Preorder visits Node → Left → Right. By moving left to right and connecting left's rightmost to the original right, we get exactly: node → all left descendants → all right descendants.

**Comparison with Morris Traversal:** This is essentially a simplified Morris traversal — threading the tree by connecting predecessors to successors without using extra space.

**Time Complexity:** O(n) — each node visited at most twice (once to process, once to find predecessor)  
**Space Complexity:** O(1) — only pointer manipulation, no recursion or stack

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Find predecessor (rightmost of left subtree) to bridge left and right subtrees
- Three steps: connect predecessor to right, move left to right, clear left
- O(1) space — pure pointer rewiring, no recursion or stack needed
- Preorder order is maintained by inserting left subtree before right subtree
- Combines tree traversal knowledge with linked list manipulation
