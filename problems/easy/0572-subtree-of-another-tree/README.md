# 572. Subtree of Another Tree

**Difficulty:** Easy  
**Topics:** Tree, Depth-First Search, Binary Tree, String Matching, Hash Function  
**Link:** [LeetCode Problem](https://leetcode.com/problems/subtree-of-another-tree/)

## Problem Description

Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.

A subtree of a binary tree is a tree that consists of a node in the tree and all of this node's descendants.

### Examples

**Example 1:**
```
     3            4
    / \          / \
   4   5        1   2
  / \
 1   2

Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
```

**Example 2:**
```
     3            4
    / \          / \
   4   5        1   2
  / \
 1   2
    /
   0

Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
Explanation: The subtree [4,1,2,null,null,0] has an extra node, so it doesn't match [4,1,2].
```

### Constraints

- The number of nodes in the `root` tree is in the range `[1, 2000]`
- The number of nodes in the `subRoot` tree is in the range `[1, 1000]`
- `-10^4 <= root.val <= 10^4`
- `-10^4 <= subRoot.val <= 10^4`

## Approach

### DFS + Same Tree Check

Walk through every node in the main tree. At each node, check if the subtree starting there is identical to `subRoot` using the Same Tree logic from #100.

**Key Insight:** This problem combines two patterns you already know:
- **DFS traversal** — visit every node in the main tree
- **Same Tree (#100)** — check if two trees are identical

At each node, ask: "Is the tree rooted here identical to subRoot?" If yes at any node, return true.

**Algorithm:**
1. If `root` is null, return false (nowhere left to check)
2. If the tree starting at `root` is the same as `subRoot` → return true
3. Otherwise, recursively check the left and right subtrees
4. Return true if either side finds a match

**Walkthrough:**
```
root:        subRoot:
     3          4
    / \        / \
   4   5      1   2
  / \
 1   2

isSameTree(3, 4)? 3 !== 4 → No
  Check left: isSubtree(4, subRoot)
    isSameTree(4, 4)? Yes!
      isSameTree(1, 1)? Yes!
      isSameTree(2, 2)? Yes!
    All match → return true ✓
```
```
root with extra 0:       subRoot:
     3                      4
    / \                    / \
   4   5                  1   2
  / \
 1   2
    /
   0

isSameTree(3, 4)? No
  Check left: isSubtree(4, subRoot)
    isSameTree(4, 4)? Yes
      isSameTree(1, 1)? Yes
      isSameTree(2, 2)?
        isSameTree(0, null)? 0 !== null → No!
    Not same → continue searching...
  Check right: isSubtree(5, subRoot)
    isSameTree(5, 4)? No
    ...no more matches → return false ✓
```

**Comparison with Same Tree (#100):**
- #100: Check if two trees are identical → one comparison
- #572: Run Same Tree at every node in the main tree → DFS + Same Tree

**Time Complexity:** O(m * n) where m is nodes in root and n is nodes in subRoot  
**Space Complexity:** O(m) - Recursion stack depth

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Combining two simple patterns (DFS + Same Tree) solves a more complex problem
- Reusing solutions from previous problems (#100) is a powerful technique
- The subtree must match exactly — same structure AND same values
- This "check a condition at every node" pattern appears in many tree problems