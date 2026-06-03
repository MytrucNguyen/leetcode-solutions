# 203. Remove Linked List Elements

**Difficulty:** Easy  
**Topics:** Linked List, Recursion  
**Link:** [LeetCode Problem](https://leetcode.com/problems/remove-linked-list-elements/)

## Problem Description

Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return the new head.

### Examples

**Example 1:**

    Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5]

**Example 2:**

    Input: head = [], val = 1
    Output: []

**Example 3:**

    Input: head = [7,7,7,7], val = 7
    Output: []

### Constraints

- The number of nodes in the list is in the range `[0, 10^4]`
- `1 <= Node.val <= 50`
- `0 <= val <= 50`

## Approach

### Dummy Node + Iterate

Use a dummy node before head to handle the case where the head itself needs to be removed. Walk through with a pointer — if the next node matches val, skip it. Otherwise advance.

**Key Insight:** Without a dummy node, removing the head requires special case logic. The dummy node before head handles this cleanly — same trick from Remove Nth Node (#19).

**Algorithm:**
1. Create dummy node pointing to head
2. Set `current = dummy`
3. While `current.next` is not null:
   - If `current.next.val === val` → skip it: `current.next = current.next.next`
   - Else → advance: `current = current.next`
4. Return `dummy.next`

**Why not advance when removing?** After skipping a node, the new `current.next` might ALSO need to be removed. So we check again without advancing.

**Walkthrough:**

    head = [1,2,6,3,4,5,6], val = 6

    dummy → 1 → 2 → 6 → 3 → 4 → 5 → 6 → null
    current = dummy

    current.next = 1, 1 ≠ 6 → advance, current = 1
    current.next = 2, 2 ≠ 6 → advance, current = 2
    current.next = 6, 6 === 6 → skip! current.next = 3
    current.next = 3, 3 ≠ 6 → advance, current = 3
    current.next = 4, 4 ≠ 6 → advance, current = 4
    current.next = 5, 5 ≠ 6 → advance, current = 5
    current.next = 6, 6 === 6 → skip! current.next = null
    current.next = null → done

    dummy.next = [1,2,3,4,5] ✓

    head = [7,7,7,7], val = 7

    dummy → 7 → 7 → 7 → 7 → null
    current = dummy

    current.next = 7, 7 === 7 → skip! current.next = 7
    current.next = 7, 7 === 7 → skip! current.next = 7
    current.next = 7, 7 === 7 → skip! current.next = 7
    current.next = 7, 7 === 7 → skip! current.next = null
    done

    dummy.next = null = [] ✓

**Comparison with Remove Element (#27) on arrays:**
- #27: Write pointer overwrites values to keep → returns count
- #203: Skip pointer bypasses nodes to remove → returns new head
- Same "keep or skip" logic, different data structure

**Time Complexity:** O(n) — single pass  
**Space Complexity:** O(1) — only a dummy node and pointer

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Dummy node eliminates special cases for head removal
- Don't advance when removing — the new next might also need removal
- Same "keep or skip" pattern as array Remove Element (#27)
- The dummy node trick appears in many linked list problems (#19, #21, #203)