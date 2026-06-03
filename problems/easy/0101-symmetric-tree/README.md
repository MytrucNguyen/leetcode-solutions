# 101. Symmetric Tree

**Difficulty:** Easy  
**Topics:** Tree, Depth-First Search, Breadth-First Search, Binary Tree  
**Link:** [LeetCode Problem](https://leetcode.com/problems/symmetric-tree/)

## Problem Description

Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

### Examples

**Example 1:**
```
Input: root = [1,2,2,3,4,4,3]

    1
   / \
  2   2
 / \ / \
3  4 4  3

Output: true
```

**Example 2:**
```
Input: root = [1,2,2,null,3,null,3]

    1
   / \
  2   2
   \   \
   3    3

Output: false
```

### Constraints

- The number of nodes in the tree is in the range `[1, 1000]`
- `-100 <= Node.val <= 100`

**Follow up:** Could you solve it both recursively and iteratively?

## Understanding the Problem

A tree is **symmetric** if the left side is a **mirror image** of the right side.

**What is a mirror?**
```
    1
   / \
  2   2        ← These should be mirrors!
 / \ / \
3  4 4  3

Left side:    Right side:
  2              2
 / \            / \
3   4          4   3
↑   ↑          ↑   ↑
Mirror positions!
```

**Think of it like looking in a mirror:**
- What's on your left appears on the mirror's right
- What's on your right appears on the mirror's left

**Key insight:** We compare **opposite sides**, not same sides!

### **Example - Symmetric:**
```
    1
   / \
  2   2
 / \ / \
3  4 4  3

Check:
- Left subtree root (2) = Right subtree root (2) ✓
- Left's left (3) = Right's right (3) ✓
- Left's right (4) = Right's left (4) ✓

Symmetric! ✓
```

### **Example - NOT Symmetric:**
```
    1
   / \
  2   2
   \   \
   3    3

Check:
- Left subtree root (2) = Right subtree root (2) ✓
- Left's left (null) = Right's right (null) ✓
- Left's right (3) = Right's left (null) ✗

Not symmetric! ✗
```

## Approach

### Recursive Mirror Checking

Check if the left subtree is a **mirror** of the right subtree.

**Key difference from Same Tree:**

| Same Tree | Symmetric Tree |
|-----------|----------------|
| Compare left with left | Compare left with **right** |
| Compare right with right | Compare right with **left** |
| Check if identical | Check if **mirror** |

**Algorithm:**

1. Handle special case: empty tree is symmetric
2. Create helper function `isMirror(left, right)`:
   - **Base case 1:** Both null → true (both empty = mirrors)
   - **Base case 2:** One null → false (can't be mirrors)
   - **Recursive case:** 
     - Check if values match
     - Check if left's left mirrors right's right
     - Check if left's right mirrors right's left
3. Return result

**The mirror check:**
```typescript
return left.val === right.val &&
       isMirror(left.left, right.right) &&  // Opposite sides!
       isMirror(left.right, right.left);    // Opposite sides!
```

### **Step-by-Step for Symmetric Tree:**
```
    1
   / \
  2   2
 / \ / \
3  4 4  3

Call: isSymmetric(root)
  Call: isMirror(root.left, root.right)
        isMirror(2, 2)

Step 1: Check base cases
  Both null? NO
  One null? NO
  Continue...

Step 2: Check values
  left.val = 2, right.val = 2
  2 === 2? YES ✓

Step 3: Check left's left with right's right
  Call: isMirror(left.left, right.right)
        isMirror(3, 3)
  
  Values: 3 === 3? YES ✓
  Children: both are leaves (null children)
  Return: true ✓

Step 4: Check left's right with right's left
  Call: isMirror(left.right, right.left)
        isMirror(4, 4)
  
  Values: 4 === 4? YES ✓
  Children: both are leaves
  Return: true ✓

Step 5: Combine results
  2 === 2 AND
  isMirror(3, 3) = true AND
  isMirror(4, 4) = true
  
  Return: true ✓
```

### **Step-by-Step for Non-Symmetric Tree:**
```
    1
   / \
  2   2
   \   \
   3    3

Call: isSymmetric(root)
  Call: isMirror(root.left, root.right)
        isMirror(2, 2)

Step 1: Check values
  2 === 2? YES ✓

Step 2: Check left's left with right's right
  Call: isMirror(left.left, right.right)
        isMirror(null, null)
  
  Both null? YES
  Return: true ✓

Step 3: Check left's right with right's left
  Call: isMirror(left.right, right.left)
        isMirror(3, null)
  
  Both null? NO
  One null? YES (right is null, left is 3)
  Return: false ✗

Step 4: Combine results
  2 === 2 AND
  isMirror(null, null) = true AND
  isMirror(3, null) = false
  
  Return: false ✗
```

### **Visual of Mirror Comparison:**
```
Left subtree:     Right subtree:
    2                 2
   / \               / \
  A   B             C   D

For mirrors:
  A must equal D (left's left = right's right)
  B must equal C (left's right = right's left)
```

**Why This Works:**

In a symmetric tree, if you fold it down the middle, both sides match perfectly:
```
    1
   / \
  2   2
 / \ / \
3  4 4  3

Fold here ↓
    1
   / \
  2 = 2   ← These must be mirrors!
```

**Time Complexity:** O(n) - Visit each node once  
**Space Complexity:** O(h) - Recursion stack depth (h = height)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Symmetric tree = left subtree mirrors right subtree
- Mirror check: compare **opposite sides** (left.left with right.right, left.right with right.left)
- Very similar to Same Tree, but compare opposite children instead of same children
- Base cases: both null (true), one null (false)
- Recursive pattern: check value AND check children's mirrors
- Classic tree recursion problem
- Foundation for understanding tree symmetry and mirror concepts
- This pattern (comparing opposite sides) appears in other tree problems