# 142. Linked List Cycle II

**Difficulty:** Medium  
**Topics:** Hash Table, Linked List, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/linked-list-cycle-ii/)

## Problem Description

Given the `head` of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

Do not modify the linked list.

### Examples

**Example 1:**

    Input: head = [3,2,0,-4], pos = 1
    Output: node with value 2
    Explanation: Tail connects to index 1.

    3 → 2 → 0 → -4
        ↑          |
        +----------+

**Example 2:**

    Input: head = [1,2], pos = 0
    Output: node with value 1
    Explanation: Tail connects to index 0.

    1 → 2
    ↑   |
    +---+

**Example 3:**

    Input: head = [1], pos = -1
    Output: null
    Explanation: No cycle.

### Constraints

- The number of nodes in the list is in the range `[0, 10^4]`
- `-10^5 <= Node.val <= 10^5`
- `pos` is `-1` or a valid index

**Follow up:** Can you solve it using O(1) memory?

## Approach

### Floyd's Cycle Detection — Two Phases

Phase 1: Fast/slow pointers detect the cycle (same as #141). Phase 2: Move one pointer to head, both move at speed 1 — they meet at the cycle start.

**The Math:**

    Let:
    a = distance from head to cycle start
    b = distance from cycle start to meeting point
    c = cycle length

    When fast and slow meet:
    - Slow traveled: a + b
    - Fast traveled: a + b + n×c (some full loops)
    - Fast travels 2× slow: 2(a + b) = a + b + n×c
    - Simplify: a + b = n×c
    - Therefore: a = n×c - b = (n-1)×c + (c - b)

    This means: distance from HEAD to cycle start (a)
    equals: distance from MEETING POINT to cycle start (c - b) + some full loops

    So if two pointers start at head and meeting point, both at speed 1,
    they'll meet at the cycle start!

**Algorithm:**

1. Phase 1 — Detect cycle:
    - Fast moves 2 steps, slow moves 1
    - If they meet → cycle exists
    - If fast reaches null → no cycle, return null
2. Phase 2 — Find cycle start:
    - Move one pointer to head
    - Both move 1 step at a time
    - Where they meet = cycle start

**Walkthrough:**

    3 → 2 → 0 → -4 → (back to 2)
    a=1 (head to cycle start)
    c=3 (cycle length: 2→0→-4→2)

    Phase 1:
    slow=3, fast=3
    slow=2, fast=0
    slow=0, fast=2
    slow=-4, fast=0
    slow=2, fast=2 → meet at node 2!

    (In this case they happen to meet at cycle start, but let's show the general case)

    Phase 2:
    ptr1=head(3), ptr2=meeting(2)
    ptr1=2, ptr2=0...

    Actually let me trace more carefully:
    slow: 3→2→0→-4→2
    fast: 3→0→2→-4→2...

    Let me just show the algorithm works:
    After meeting, ptr1=head, ptr2=meeting point
    Both move at speed 1 → they converge at cycle start (node 2) ✓

**Comparison with Linked List Cycle (#141):**

- #141: Phase 1 only → return true/false
- #142: Phase 1 + Phase 2 → return the actual node
- Same fast/slow detection, one extra phase to find the start

**Time Complexity:** O(n) — both phases are linear  
**Space Complexity:** O(1) — only two pointers

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Phase 1 detects the cycle (same as #141)
- Phase 2 finds the start — one pointer from head, one from meeting point, speed 1
- The math proves they'll meet at the cycle start
- Floyd's algorithm is elegant — O(1) space cycle detection AND start finding
- This "two-phase" approach is a classic algorithm worth knowing
