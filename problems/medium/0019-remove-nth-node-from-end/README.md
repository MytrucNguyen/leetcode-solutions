# 19. Remove Nth Node From End of List

**Difficulty:** Medium  
**Topics:** Linked List, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Problem Description

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

### Examples

**Example 1:**

    Input: head = [1,2,3,4,5], n = 2
    Output: [1,2,3,5]
    Explanation: Remove node 4 (2nd from end).

**Example 2:**

    Input: head = [1], n = 1
    Output: []
    Explanation: Remove the only node.

**Example 3:**

    Input: head = [1,2], n = 1
    Output: [1]
    Explanation: Remove node 2 (1st from end).

### Constraints

- The number of nodes in the list is `sz`
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

**Follow up:** Could you do this in one pass?

## Approach

### Two Pointers with Dummy Node

Use two pointers separated by `n` steps. When fast reaches the end, slow is right before the node to remove. A dummy node handles the edge case of removing the head.

**Key Insight:** If fast is `n` steps ahead of slow, when fast reaches the last node, slow is at the node before the one to remove. This lets us do it in one pass without knowing the list length.

**Why a dummy node?** If we need to remove the head itself, there's no node before it. A dummy node before the head handles this cleanly.

**Algorithm:**
1. Create a dummy node pointing to head
2. Set both `slow` and `fast` to dummy
3. Move `fast` forward `n + 1` steps
4. Move both until `fast` reaches null
5. Skip the target: `slow.next = slow.next.next`
6. Return `dummy.next`

**Walkthrough:**

    head = [1,2,3,4,5], n = 2

    dummy → 1 → 2 → 3 → 4 → 5 → null
      S     F

    Move fast n+1 = 3 steps:
    dummy → 1 → 2 → 3 → 4 → 5 → null
      S               F

    Move both until fast is null:
    dummy → 1 → 2 → 3 → 4 → 5 → null
                  S               F

    slow.next = slow.next.next (skip 4):
    dummy → 1 → 2 → 3 → 5 → null

    Return [1,2,3,5] ✓

**Time Complexity:** O(L) where L is list length — one pass  
**Space Complexity:** O(1) — only two pointers and a dummy node

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Two pointers with a fixed gap finds the nth from end in one pass
- Dummy node eliminates edge cases when removing the head
- The gap of n+1 puts slow right before the target for easy removal
- This "dummy node" trick is useful for many linked list problems
- Builds on fast/slow from Linked List Cycle (#141) and Palindrome Linked List (#234)