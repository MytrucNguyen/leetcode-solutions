# 116. Populating Next Right Pointers in Each Node

**Difficulty:** Medium  
**Topics:** Linked List, Tree, Depth-First Search, Breadth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)

## Problem Description

You are given a **perfect binary tree** where all leaves are on the same level, and every parent has two children. The Node has an additional pointer `next` which is initially set to `null`. Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `null`.

### Examples

**Example 1:**

            1                    1 → null
           / \                  / \
          2    3               2 → 3 → null
         / \  / \             / \  / \
        4  5 6   7           4→5→6→7 → null

    Input: root = [1,2,3,4,5,6,7]
    Output: [1,#,2,3,#,4,5,6,7,#]
    (# represents null next pointers at end of each level)

**Example 2:**

    Input: root = []
    Output: []

### Constraints

- The number of nodes in the tree is in the range `[0, 2^12 - 1]`
- `-1000 <= Node.val <= 1000`
- The tree is a perfect binary tree

**Follow up:** Can you solve it using only constant extra space?

## Approach

### BFS Level Order — Connect Each Level

Same BFS as Level Order Traversal (#102). Process each level, connect each node's `next` to the next node in the queue at the same level.

**Key Insight:** During BFS, all nodes at the same level are in the queue together. While processing a level, each node's next is simply the next node in that level — except the last one which stays null.

**Algorithm:**

1. If root is null, return null
2. BFS with queue starting with root
3. For each level:
    - Process all nodes in the level
    - Connect each node's next to the next node in the level
    - Last node in the level keeps next = null
    - Add children to queue

**Walkthrough:**

            1
           / \
          2    3
         / \  / \
        4  5 6   7

    Queue: [1], level size = 1

    Level 0: process [1]
      node 1: last in level → next stays null
      Add children: 2, 3
      Queue: [2, 3]

    Level 1: process [2, 3], size = 2
      i=0: node 2 → next = queue[0] = 3. 2→3
      i=1: node 3 → last in level → next stays null
      Add children: 4, 5, 6, 7
      Queue: [4, 5, 6, 7]

    Level 2: process [4, 5, 6, 7], size = 4
      i=0: node 4 → next = 5. 4→5
      i=1: node 5 → next = 6. 5→6
      i=2: node 6 → next = 7. 6→7
      i=3: node 7 → last → next stays null

    Result:
      1 → null
      2 → 3 → null
      4 → 5 → 6 → 7 → null ✓

### O(1) Space Approach — Use the Next Pointers

Since we're building next pointers level by level, we can use the already-connected level to traverse and connect the next level — no queue needed!

**Algorithm:**

1. Start with leftmost = root
2. While leftmost has children (not at leaf level):
    - Walk across the level using next pointers
    - For each node: connect left.next = right, connect right.next = node.next.left
    - Move leftmost down to leftmost.left

**Walkthrough:**

    Level 0: leftmost = 1
      node 1: 1.left.next = 1.right → 2→3
              1.right.next = null (no node.next)

    Level 1: leftmost = 2
      node 2: 2.left.next = 2.right → 4→5
              2.right.next = 2.next.left = 3.left → 5→6
      node 3: 3.left.next = 3.right → 6→7
              3.right.next = null (no node.next)

    Level 2: leftmost = 4 (no children, stop)

    Result: same as above ✓

**Comparison with BFS tree problems:**

- Level Order (#102): Collect values per level
- Right Side View (#199): Collect last per level
- Zigzag (#103): Alternate direction per level
- Next Right Pointers (#116): Connect nodes within each level

**Time Complexity:** O(n) — visit each node once  
**Space Complexity:** O(1) for the pointer approach, O(n) for BFS

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- BFS approach: same level order template, connect during processing
- O(1) space approach: use already-built next pointers to traverse the current level
- Two connections per node: left→right (within same parent) and right→next's left (across parents)
- Perfect binary tree guarantees every non-leaf has two children
- Your 200th problem! BFS mastery from #102 applied in a new way!
