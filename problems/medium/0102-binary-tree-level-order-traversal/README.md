# 102. Binary Tree Level Order Traversal

**Difficulty:** Medium  
**Topics:** Tree, Breadth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/binary-tree-level-order-traversal/)

## Problem Description

Given the `root` of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).

### Examples

**Example 1:**

    Input:
            3
           / \
          9   20
             / \
            15   7
    Output: [[3], [9, 20], [15, 7]]

**Example 2:**

    Input: root = [1]
    Output: [[1]]

**Example 3:**

    Input: root = []
    Output: []

### Constraints

- The number of nodes in the tree is in the range `[0, 2000]`
- `-1000 <= Node.val <= 1000`

## Approach

### BFS with Queue

Use a queue to process nodes level by level. For each level, process all nodes currently in the queue, collect their values, and add their children for the next level.

**Key Insight:** DFS goes deep (you've been using this for all tree problems). BFS goes wide — process an entire level before moving down. A queue naturally gives us this: add all nodes at the current level, process them all, then their children become the next level.

**DFS vs BFS:**
- DFS (#94, #104, #543): Uses recursion/stack, goes deep first
- BFS (#102): Uses a queue, goes level by level

**Algorithm:**
1. If root is null, return empty array
2. Create a queue with root in it
3. While queue is not empty:
   - Get the current queue size (this is the level size)
   - Process that many nodes:
     - Dequeue a node, add its value to the current level array
     - Add its left and right children to the queue (if they exist)
   - Add the level array to results
4. Return results

**Why track level size?** The queue contains nodes from multiple levels. By recording the size at the start of each iteration, we know exactly how many nodes belong to the current level — the rest are children for the next level.

**Walkthrough:**

    Tree:
            3
           / \
          9   20
             / \
            15   7

    Queue: [3]

    Level 0: size = 1
      Dequeue 3, add to level → [3]
      Enqueue left 9, right 20
      Queue: [9, 20]
      Result: [[3]]

    Level 1: size = 2
      Dequeue 9, add to level → [9]
        9 has no children
      Dequeue 20, add to level → [9, 20]
        Enqueue left 15, right 7
      Queue: [15, 7]
      Result: [[3], [9, 20]]

    Level 2: size = 2
      Dequeue 15, add to level → [15]
        No children
      Dequeue 7, add to level → [15, 7]
        No children
      Queue: []
      Result: [[3], [9, 20], [15, 7]]

    Queue empty → done!
    Return [[3], [9, 20], [15, 7]] ✓

**Time Complexity:** O(n) — visit every node once  
**Space Complexity:** O(n) — queue holds at most one full level (worst case n/2 for a complete tree)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- BFS uses a queue, DFS uses recursion/stack — both visit all nodes
- Tracking queue size at the start of each iteration separates levels
- This is the template for ALL level-order tree problems
- Unlocks: zigzag traversal (#103), right side view (#199), average of levels (#637)
- Your first BFS problem! This pattern also applies to graphs (shortest path, etc.)