# 143. Reorder List

**Difficulty:** Medium  
**Topics:** Linked List, Two Pointers, Stack, Recursion  
**Link:** [LeetCode Problem](https://leetcode.com/problems/reorder-list/)

## Problem Description

You are given the head of a singly linked-list. The list can be represented as:

    L0 → L1 → … → Ln-1 → Ln

Reorder the list to be on the following form:

    L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

### Examples

**Example 1:**

    Input: head = [1, 2, 3, 4]
    Output: [1, 4, 2, 3]

**Example 2:**

    Input: head = [1, 2, 3, 4, 5]
    Output: [1, 5, 2, 4, 3]

### Constraints

- The number of nodes in the list is in the range `[1, 5 * 10^4]`
- `1 <= Node.val <= 1000`

## Approach

### Three Steps — Find Middle, Reverse, Interleave

Combine three linked list techniques you already know:

1. Find the middle (#876) — split into two halves
2. Reverse the second half (#206) — so we can walk from the end
3. Interleave the two halves — weave them together

**Key Insight:** We need to alternate between the start and end of the list. Since we can't walk backwards in a singly linked list, we reverse the second half first. Then interleaving two forward-walking lists is easy.

**Algorithm:**

1. Find middle with fast/slow pointers
2. Split: cut the list at the middle
3. Reverse the second half
4. Merge by interleaving: take one from first, one from second, alternate

**Walkthrough:**

    Input: 1 → 2 → 3 → 4 → 5

    Step 1 — Find middle:
      slow=1, fast=1
      slow=2, fast=3
      slow=3, fast=5 → fast.next is null, stop
      Middle = 3

    Step 2 — Split and reverse second half:
      First half: 1 → 2 → 3 → null
      Second half: 4 → 5 → null
      Reverse second: 5 → 4 → null

    Step 3 — Interleave:
      Take 1, then 5: 1 → 5
      Take 2, then 4: 1 → 5 → 2 → 4
      Take 3:         1 → 5 → 2 → 4 → 3

    Output: 1 → 5 → 2 → 4 → 3 ✓

    Input: 1 → 2 → 3 → 4

    Step 1: Middle = 2
    Step 2: First [1,2], Second [3,4] → reversed [4,3]
    Step 3: 1 → 4 → 2 → 3

    Output: 1 → 4 → 2 → 3 ✓

**The ultimate linked list combo:**

- Find Middle (#876) → fast/slow pointers
- Reverse List (#206) → iterative pointer swap
- Merge Two Lists (#21) → interleave variation
- Also used in: Palindrome Linked List (#234), Sort List (#148)

**Time Complexity:** O(n) — three O(n) passes  
**Space Complexity:** O(1) — all operations are in-place

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Combines three fundamental linked list operations into one problem
- "Can't walk backwards" → reverse the part you need to walk backwards
- The interleave step is like merge but alternating instead of comparing
- This same three-step pattern appears in Palindrome Linked List (#234)
- One of the best problems for demonstrating linked list mastery
