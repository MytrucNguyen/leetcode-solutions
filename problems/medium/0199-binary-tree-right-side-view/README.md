# 199. Binary Tree Right Side View

**Difficulty:** Medium  
**Topics:** Tree, Depth-First Search, Breadth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/binary-tree-right-side-view/)

## Problem Description

Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return the values of the nodes you can see ordered from top to bottom.

### Examples

**Example 1:**

            1
           / \
          2    3
           \    \
            5    4

    Input: root = [1,2,3,null,5,null,4]
    Output: [1, 3, 4]

**Example 2:**

    Input: root = [1,null,3]
    Output: [1, 3]

**Example 3:**

    Input: root = []
    Output: []

### Constraints

- The number of nodes in the tree is in the range `[0, 100]`
- `-100 <= Node.val <= 100`

## Approach

### BFS — Last Node Per Level

Same Level Order Traversal (#102) but only keep the last node of each level — that's the rightmost one visible from the right side.

**Key Insight:** In BFS, when you process a level left to right, the LAST node processed is the rightmost one. Just track the last node in each level instead of collecting all nodes.

**Algorithm:**
1. If root is null, return []
2. BFS with queue, starting with root
3. For each level:
   - Process all nodes (same as #102)
   - The last node in the level is the right side view
   - Add its value to result
4. Return result

**Walkthrough:**

            1
           / \
          2    3
           \    \
            5    4

    Queue: [1]

    Level 0: size=1
      Process 1 → add children 2, 3
      Last node = 1 → result: [1]
      Queue: [2, 3]

    Level 1: size=2
      Process 2 → add child 5
      Process 3 → add child 4
      Last node = 3 → result: [1, 3]
      Queue: [5, 4]

    Level 2: size=2
      Process 5 → no children
      Process 4 → no children
      Last node = 4 → result: [1, 3, 4]
      Queue: []

    Return [1, 3, 4] ✓

**Important:** The right side view isn't always the rightmost child! Consider:

            1
           /
          2
           \
            3

    Level 0: 1 (right side view)
    Level 1: 2 (only node, so it's visible from right)
    Level 2: 3 (only node, visible from right)
    Output: [1, 2, 3] — node 2 is a LEFT child but still visible!

**Comparison with Level Order Traversal (#102):**
- #102: Collect ALL nodes per level → `result.push(level)`
- #199: Collect LAST node per level → `result.push(lastNode)`
- Same BFS template, different what you keep

**Time Complexity:** O(n) — visit every node once  
**Space Complexity:** O(n) — queue holds at most one full level

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Right side view = last node of each BFS level
- Same BFS level-by-level template from #102
- Left nodes CAN be visible from the right if there's nothing to their right on that level
- This pattern extends to left side view (take first node per level instead)
- BFS is naturally suited for level-based questions