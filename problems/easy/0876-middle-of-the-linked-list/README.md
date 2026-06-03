# 876. Middle of the Linked List

**Difficulty:** Easy  
**Topics:** Linked List, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/middle-of-the-linked-list/)

## Problem Description

Given the `head` of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the **second middle** node.

### Examples

**Example 1:**

    Input: head = [1, 2, 3, 4, 5]
    Output: [3, 4, 5]
    Explanation: The middle node is 3.

**Example 2:**

    Input: head = [1, 2, 3, 4, 5, 6]
    Output: [4, 5, 6]
    Explanation: Two middle nodes (3 and 4), return the second one (4).

### Constraints

- The number of nodes in the list is in the range `[1, 100]`
- `1 <= Node.val <= 100`

## Approach

### Fast and Slow Pointers

Fast pointer moves 2 steps, slow moves 1. When fast reaches the end, slow is at the middle.

**Key Insight:** Fast moves at double speed. When fast has traveled the full length, slow has traveled exactly half — landing on the middle. For even-length lists, this naturally lands on the second middle.

**Algorithm:**
1. Set `slow = head`, `fast = head`
2. While `fast !== null` and `fast.next !== null`:
   - `slow = slow.next`
   - `fast = fast.next.next`
3. Return `slow`

**Walkthrough:**

    [1, 2, 3, 4, 5] (odd length)

    slow=1, fast=1
    slow=2, fast=3
    slow=3, fast=5
    fast.next is null → stop

    Return slow = 3 ✓

    [1, 2, 3, 4, 5, 6] (even length)

    slow=1, fast=1
    slow=2, fast=3
    slow=3, fast=5
    slow=4, fast=null → stop (fast became null)

    Return slow = 4 ✓ (second middle)

**Where you've used this before:**
- Palindrome Linked List (#234): Find middle, then reverse second half
- Linked List Cycle (#141): Fast/slow to detect cycle
- This is the pure, fundamental version of the technique

**Time Complexity:** O(n) — one pass  
**Space Complexity:** O(1) — two pointers

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Fast/slow pointer is THE technique for finding the middle of a linked list
- For even-length lists, this gives the second middle (which is what LeetCode wants)
- The same technique powers cycle detection (#141) and palindrome check (#234)
- One of the simplest yet most useful linked list patterns