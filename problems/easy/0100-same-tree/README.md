# 100. Same Tree

**Difficulty:** Easy  
**Topics:** Tree, Depth-First Search, Breadth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/same-tree/)

## Problem Description

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

### Examples

**Example 1:**
```
Input: p = [1,2,3], q = [1,2,3]

Tree p:        Tree q:
    1              1
   / \            / \
  2   3          2   3

Output: true
```

**Example 2:**
```
Input: p = [1,2], q = [1,null,2]

Tree p:        Tree q:
    1              1
   /                \
  2                  2

Output: false
```

**Example 3:**
```
Input: p = [1,2,1], q = [1,1,2]

Tree p:        Tree q:
    1              1
   / \            / \
  2   1          1   2

Output: false
```

### Constraints

- The number of nodes in both trees is in the range `[0, 100]`.
- `-10^4 <= Node.val <= 10^4`

## Understanding the Problem

Two trees are the same if they have:
1. **Same structure** - nodes in the same positions
2. **Same values** - each corresponding node has the same value

**Key insight:** This is naturally a recursive problem. Two trees are the same if their roots match AND their left subtrees match AND their right subtrees match.

## Approach

### Recursive Comparison

Check if two trees are identical by comparing nodes recursively.

**Algorithm:**

1. **Base Case 1:** If both nodes are null → return true (both empty)
2. **Base Case 2:** If only one node is null → return false (structure differs)
3. **Recursive Case:** 
   - Check if current values match
   - Recursively check if left subtrees match
   - Recursively check if right subtrees match
   - Return true only if all three conditions are true

**Why recursion works:**
- Comparing trees = comparing roots + comparing subtrees
- Comparing subtrees = same problem, just smaller
- Base case: empty trees (null nodes)

**Example walkthrough [1,2,3] vs [1,2,3]:**
```
Compare roots: 1 === 1? YES ✓
Compare left subtrees: 
  Compare 2 === 2? YES ✓
  Both leaves have no children? YES ✓
Compare right subtrees:
  Compare 3 === 3? YES ✓
  Both leaves have no children? YES ✓
  
Result: true ✓
```

**Example walkthrough [1,2] vs [1,null,2]:**
```
Compare roots: 1 === 1? YES ✓
Compare left subtrees:
  p.left = 2, q.left = null
  One is null, one isn't? YES → false ✗
  
Stop here, trees are different
Result: false ✗
```

**Time Complexity:** O(min(n, m)) - Visit each node once, stop early if different  
**Space Complexity:** O(min(h₁, h₂)) - Recursion stack depth (tree height)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Recursive tree problems follow a pattern: base cases + recursive case
- Two base cases: both null (true), one null (false)
- Recursive case: check current AND recurse on children
- Very short solution (~4-5 lines)
- The pattern "check current, recurse on children" applies to many tree problems
- Understanding when to return true vs false in base cases is crucial