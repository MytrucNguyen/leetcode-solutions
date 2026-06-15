# 103. Binary Tree Zigzag Level Order Traversal

**Difficulty:** Medium  
**Topics:** Tree, Breadth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

## Problem Description

Given the `root` of a binary tree, return the **zigzag level order traversal** of its nodes' values (i.e., from left to right, then right to left for the next level and alternate between).

### Examples

**Example 1:**

            3
           / \
          9   20
             / \
            15   7

    Input: root = [3,9,20,null,null,15,7]
    Output: [[3],[20,9],[15,7]]

**Example 2:**

    Input: root = [1]
    Output: [[1]]

**Example 3:**

    Input: root = []
    Output: []

### Constraints

- The number of nodes in the tree is in the range `[0, 2000]`
- `-100 <= Node.val <= 100`

## Approach

### BFS with Direction Toggle

Same Level Order Traversal (#102) but track a boolean flag that alternates each level. When the flag says right-to-left, reverse the level array before adding to results.

**Key Insight:** The BFS queue always processes nodes left to right — we don't change the traversal order. We just reverse the collected values for odd-numbered levels. This keeps the tree traversal correct (children are still added left then right).

**Algorithm:**

1. If root is null, return []
2. BFS with queue, starting with root
3. Track `leftToRight = true`
4. For each level:
    - Process all nodes (same as #102), collect values
    - If `!leftToRight` → reverse the level array
    - Add to results
    - Toggle `leftToRight`

**Walkthrough:**

            3
           / \
          9   20
             / \
            15   7

    Queue: [3], leftToRight = true

    Level 0: process 3, add children 9, 20
      level = [3], leftToRight → keep as is
      result: [[3]]
      Toggle → leftToRight = false

    Level 1: process 9, 20
      level = [9, 20], !leftToRight → reverse → [20, 9]
      result: [[3], [20, 9]]
      Toggle → leftToRight = true

    Level 2: process 15, 7
      level = [15, 7], leftToRight → keep as is
      result: [[3], [20, 9], [15, 7]]

    Return [[3], [20, 9], [15, 7]] ✓

**The BFS tree trio:**

- Level Order (#102): collect all per level
- Right Side View (#199): collect last per level
- Zigzag (#103): alternate direction per level

**Time Complexity:** O(n) — visit every node once  
**Space Complexity:** O(n) — queue holds at most one full level

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same BFS as #102 with one boolean toggle
- Reverse the level array for odd levels, keep as-is for even levels
- Don't change the queue order — always add children left then right
- Three BFS variations from the same template: all, last, zigzag
