# 234. Palindrome Linked List

**Difficulty:** Easy  
**Topics:** Linked List, Two Pointers, Stack  
**Link:** [LeetCode Problem](https://leetcode.com/problems/palindrome-linked-list/)

## Problem Description

Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.

### Examples

**Example 1:**
```
Input: head = [1,2,2,1]
Output: true
```

**Example 2:**
```
Input: head = [1,2]
Output: false
```

### Constraints

- The number of nodes in the list is in the range `[1, 10^5]`.
- `0 <= Node.val <= 9`

**Follow up:** Could you do it in O(n) time and O(1) space?

## Approach

### Stack Approach (Simple)
Push all values onto a stack, then iterate through the list again comparing each value to the top of the stack (which gives reverse order).
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Two Pointer + Reverse (Optimal)
Use the fast/slow pointer technique to find the middle, reverse the second half, then compare both halves.

**Key Insight:** Combine two patterns you already know — finding the middle of a linked list (fast/slow pointers) and reversing a linked list (#206).

**Algorithm:**
1. Use fast and slow pointers to find the middle of the list
2. Reverse the second half of the list
3. Compare the first half and reversed second half node by node
4. If all values match, it's a palindrome

**Walkthrough:**
```
Input: [1, 2, 3, 2, 1]

Step 1: Find middle with fast/slow pointers
  slow → 1 → 2 → 3
  fast → 1 → 3 → null
  Middle = 3

Step 2: Reverse second half (after middle)
  Before: 3 → 2 → 1
  After:  3 ← 2 ← 1
  reversed head = 1

Step 3: Compare first half and reversed second half
  1 == 1? ✓
  2 == 2? ✓
  All match → return true
```
```
Input: [1, 2, 3, 4]

Step 1: Find middle
  slow → 1 → 2 → 3
  Middle = 3

Step 2: Reverse second half
  3 → 4 becomes 4 → 3
  reversed head = 4

Step 3: Compare
  1 == 4? ✗ → return false
```

**Time Complexity:** O(n) - Three passes through the list  
**Space Complexity:** O(1) - Only pointer variables, no extra data structures

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Fast/slow pointer technique finds the middle of a linked list in one pass
- Combining known patterns (find middle + reverse list) solves more complex problems
- The O(1) space solution modifies the list in place — in an interview, ask if that's acceptable
- This problem is a great example of breaking a complex task into smaller, familiar steps