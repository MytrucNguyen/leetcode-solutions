# 2095. Delete the Middle Node of a Linked List

**Difficulty:** Medium  
**Topics:** Linked List, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)

## Problem Description

You are given the `head` of a linked list. **Delete** the middle node, and return the head of the modified linked list.

The middle node of a linked list of size `n` is the `⌊n / 2⌋th` node from the start (0-indexed).

### Examples

**Example 1:**

    Input: [1,3,4,7,1,2,6]
    Output: [1,3,4,1,2,6]
    Explanation: Node 7 (index 3) is the middle of 7 nodes.

**Example 2:**

    Input: [1,2,3,4]
    Output: [1,2,4]
    Explanation: Node 3 (index 2) is the middle of 4 nodes.

**Example 3:**

    Input: [2,1]
    Output: [2]
    Explanation: Node 1 (index 1) is the middle of 2 nodes.

### Constraints

- The number of nodes in the list is in the range `[1, 10^5]`
- `1 <= Node.val <= 10^5`

## Approach

### Fast/Slow with Dummy Node

Same fast/slow from Middle of Linked List (#876) but we need to stop ONE BEFORE the middle to skip it. A dummy node handles the edge case of deleting the only node.

**Key Insight:** To delete a node, we need the node BEFORE it. So instead of landing slow on the middle, we land slow on the node before the middle. Starting fast one step ahead (from `head` instead of `dummy`) achieves this.

**Algorithm:**

1. If single node → return null
2. Create dummy pointing to head
3. Set `slow = dummy`, `fast = head`
4. While `fast !== null` AND `fast.next !== null`:
    - `slow = slow.next`
    - `fast = fast.next.next`
5. `slow.next = slow.next.next` (skip the middle)
6. Return `dummy.next`

**Why start fast at head instead of dummy?** This gives fast a one-step head start, which means slow ends up one node BEFORE where it normally would — exactly where we need to be for deletion.

**Walkthrough:**

    1 → 3 → 4 → 7 → 1 → 2 → 6
    dummy → 1 → 3 → 4 → 7 → 1 → 2 → 6

    slow=dummy, fast=1

    slow=1, fast=4
    slow=3, fast=1
    slow=4, fast=6
    fast.next = null → stop

    slow = 4, slow.next = 7 (the middle!)
    4.next = 7.next = 1
    Skip 7!

    Result: 1 → 3 → 4 → 1 → 2 → 6 ✓

    1 → 2 → 3 → 4
    dummy → 1 → 2 → 3 → 4

    slow=dummy, fast=1
    slow=1, fast=3
    slow=2, fast=null → stop (fast went past end)

    Wait — fast=3, fast.next=4, fast.next.next=null
    slow=1, fast=3
    slow=2, fast=null → stop

    slow=2, slow.next=3 (the middle!)
    2.next = 3.next = 4

    Result: 1 → 2 → 4 ✓

**Comparison with Middle of Linked List (#876):**

- #876: slow lands ON the middle → return it
- #2095: slow lands BEFORE the middle → skip it
- Same fast/slow, different starting point

**Time Complexity:** O(n) — one pass  
**Space Complexity:** O(1) — only pointers

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- To delete, stop one before the target — offset fast by one step
- Dummy node handles single-node edge case cleanly
- Same fast/slow technique, slightly different setup for a different goal
- Builds directly on #876 (find middle) and #203 (remove elements)
